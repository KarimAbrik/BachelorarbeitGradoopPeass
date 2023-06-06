function analyzeStatistics {
	folder=$1
	
	echo -n "Tests: "
	cat $1/staticTestSelection_*.json | jq ".initialcommit.initialDependencies | keys | length"

	echo -n "Commits (excluding initial): "
	cat $1/staticTestSelection_*.json | jq ".commits | keys | length"

	echo -n "Not running commits: "
	cat $1/staticTestSelection_*.json | jq ".commits" | grep "\"running\": false" | wc -l

	echo -n "Commits containing a Java change: "
	cat $1/staticTestSelection_*.json | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l

	echo -n "Commits containing a measurable test case: "
	cat $1/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l
}

function getOverallCommits {
	allCommits=0
	allTests=0
	allNotRunning=0
	allCommitsWithChange=0
	allCoveredCommits=0
nonrunning750to1010=$(cat Commit750bis1010/results/temp_gradoop/nonRunning_gradoop.json | jq '.nonRunableReasons | to_entries[] | select(.value == "Commit is not running.") | .key' | wc -l)
nonrunning500to750=$(cat Commit500bis750/results/temp_gradoop/nonRunning_gradoop.json | jq '.nonRunableReasons | to_entries[] | select(.value == "Commit is not running.") | .key' | wc -l)
nonrunning245to500=$(cat Commit245bis500/results/temp_gradoop/nonRunning_gradoop.json | jq '.nonRunableReasons | to_entries[] | select(.value == "Commit is not running.") | .key' | wc -l)

	for project in Commit1bis194 Commit194bis245 Commit245bis500 Commit500bis750 Commit750bis1010
	do
		selectionFile="$project/results/staticTestSelection_*.json"
		commits=$(cat $selectionFile | jq ".commits | keys | length")
		tests=$(cat $selectionFile | jq ".initialcommit.initialDependencies | keys | length")
		notCompiling=$(cat $selectionFile | jq ".commits" | grep "\"running\": false" | wc -l)
		commitsWithChange=$(cat $selectionFile | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l)
		coveredChanges=$(cat $project/results/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l)
		allCommits=$(($allCommits+$commits))
		allTests=$(($allTests+$tests))
		allNotRunning=$(($allNotRunning+$notCompiling))
		allCommitsWithChange=$(($allCommitsWithChange+$commitsWithChange))
		allCoveredCommits=$(($allCoveredCommits+$coveredChanges))
	done
	echo "Tests: $allTests Commits: $allCommits Unausführbar: $(($allNotRunning+$nonrunning245to500+$nonrunning500to750+$nonrunning750to1010)) Commits mit Änderung: $allCommitsWithChange Abgedeckte Änderungen: $allCoveredCommits"
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
	echo -n "Measured Commits "
	var1=$(cat $project/measurement-results/FirstExecution/statistics.json | jq ".statistics | keys | length")
	var2=$(cat $project/measurement-results/SecondExecution/statistics.json | jq ".statistics | keys | length")
	echo $(($var1+$var2))" First: $var1 Second: $var2"
	echo -n "Commits containing changes "
	changes1=$(cat $project/measurement-results/FirstExecution/changes.json | jq ".commitChanges | keys | length")
	changes2=$(cat $project/measurement-results/SecondExecution/changes.json | jq ".commitChanges | keys | length")
	echo $(($changes1+$changes2))
done


