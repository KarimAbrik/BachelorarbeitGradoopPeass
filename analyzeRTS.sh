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
	allRuns=0
	for project in Commit1-194 Commit195-245
	do
		selectionFile="$project/results/staticTestSelection_*.json"
		commits=$(cat $selectionFile | jq ".commits | keys | length")
		tests=$(cat $selectionFile | jq ".initialcommit.initialDependencies | keys | length")
		notRunning=$(cat $selectionFile | jq ".commits" | grep "\"running\": false" | wc -l)
		commitsWithChange=$(cat $selectionFile | jq ".commits[].changedClazzes | select(length > 0) | length" | wc -l)
		coveredChanges=$(cat $project/results/traceTestSelection_*.json  | jq ".commits[].testcases | select(length>0) | length" | wc -l)
		runs=$(cat $project/run-$project*sh | wc -l)
		allCommits=$(($allCommits+$commits))
		allTests=$(($allTests+$tests))
		allNotRunning=$(($allNotRunning+$notRunning))
		allCommitsWithChange=$(($allCommitsWithChange+$commitsWithChange))
		allCoveredCommits=$(($allCoveredCommits+$coveredChanges))
		allRuns=$(($allRuns+$runs))
	done
	echo "Tests: $allTests Commits: $allCommits Unausführbar: $allNotRunning Commits mit Änderung: $allCommitsWithChange Abgedeckte Änderungen: $allCoveredCommits Runs: $allRuns"
}

getOverallCommits


for project in Commit1-194 Commit195-245
do
	echo "=============="
	echo "$project"
	analyzeStatistics $project/results	
done


echo
echo
for project in Commit1-194 Commit195-245
do
	echo "=============="
	echo $project
	echo -n "Measured Commits "
	cat $project/measurement-results/statistics.json | jq ".statistics | keys | length"
	
	echo -n "Commits containing changes "
	cat $project/measurement-results/changes.json | jq ".commitChanges | keys | length"
done

