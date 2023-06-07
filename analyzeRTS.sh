function analyzeStatistics {
	folder=$1
	
	echo -n "Commits (excluding initial): "
	cat $1/staticTestSelection_*.json | jq ".commits | keys | length"

	echo -n "Commits containing a Java change: "
	cat $1/staticTestSelection_*.json | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l

	echo -n "Commits containing a measurable test case: "
	cat $1/coverageSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l
}

function getOverallCommits {
	allCommits=0
	allCommitsWithChange=0
	allCoveredCommits=0
	for project in Commit1bis194 Commit194bis245 Commit245bis500 Commit500bis750 Commit750bis1010
	do
		selectionFile="$project/results/staticTestSelection_*.json"
		commits=$(cat $selectionFile | jq ".commits | keys | length")
		commitsWithChange=$(cat $selectionFile | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l)
		coveredChanges=$(cat $project/results/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l)
		allCommits=$(($allCommits+$commits))
		allCommitsWithChange=$(($allCommitsWithChange+$commitsWithChange))
		allCoveredCommits=$(($allCoveredCommits+$coveredChanges))
	done
	echo "Commits: $allCommits | Commits mit Änderung: $allCommitsWithChange | Abgedeckte Änderungen: $allCoveredCommits"
}

getOverallCommits

for project in Commit1bis194 Commit194bis245 Commit245bis500 Commit500bis750 Commit750bis1010
do
	echo "=============="
	echo "$project"
	analyzeStatistics $project/results
done

echo
echo
for project in Commit1bis194 Commit194bis245 Commit245bis500 Commit500bis750 Commit750bis1010
do
	echo "=============="
	echo $project
	echo -n "Measured testcases "
	var1=$(cat $project/measurement-results/FirstExecution/statistics.json | jq '.statistics | to_entries | map({key: .key, count: (.value | length)}) | reduce .[] as $item (0; . + $item.count)')
	var2=$(cat $project/measurement-results/SecondExecution/statistics.json | jq '.statistics | to_entries | map({key: .key, count: (.value | length)}) | reduce .[] as $item (0; . + $item.count)')
	echo $(($var1+$var2))
	echo -n "Testcases containing changes "
	changes1=$(cat $project/measurement-results/FirstExecution/changes.json | jq ".changeCount")
	changes2=$(cat $project/measurement-results/SecondExecution/changes.json | jq ".changeCount")
	echo $(($changes1+$changes2))
done


