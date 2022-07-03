<script>
	import { program } from '../WorkoutProgramming';
	import { appendToGistFromWorkout, getLastWorkoutSets } from '../Data';
	import Set from '../Set.svelte';
	let week = 1;
	let day = 'A';

	let submitted = false;

	$: e = program[week - 1][day];
	$: workoutId = 'Wk' + week + 'D' + day;
	// may return null
	$: prevWorkoutPromise = getLastWorkoutSets(day);

	let sets = {
		A1Set1: {},
		A1Set2: {},
		A1Set3: {},
		A2Set1: {},
		A2Set2: {},
		A2Set3: {},
		B1Set1: {},
		B1Set2: {},
		B1Set3: {},
		B2Set1: {},
		B2Set2: {},
		B2Set3: {},
		hipDominantSet1: {},
		hipDominantSet2: {},
		hipDominantSet3: {},
		gluteAccessorySet: {},
		linearCoreSet: {},
		rotationalCoreSet: {}
	};

	//	$: console.log(setsRecord[0].set.notes);

	$: setsRecord = [
		{ exercise: e.A1, set: sets.A1Set1, setN: 1 },
		{ exercise: e.A1, set: sets.A1Set2, setN: 2 },
		{ exercise: e.A1, set: sets.A1Set3, setN: 3 },
		{ exercise: e.A2, set: sets.A2Set1, setN: 1 },
		{ exercise: e.A2, set: sets.A2Set2, setN: 2 },
		{ exercise: e.A2, set: sets.A2Set3, setN: 3 },
		{ exercise: e.B1, set: sets.B1Set1, setN: 1 },
		{ exercise: e.B1, set: sets.B1Set2, setN: 2 },
		{ exercise: e.B1, set: sets.B1Set3, setN: 3 },
		{ exercise: e.B2, set: sets.B2Set1, setN: 1 },
		{ exercise: e.B2, set: sets.B2Set2, setN: 2 },
		{ exercise: e.B2, set: sets.B2Set3, setN: 3 },
		{ exercise: e.hipDominant, set: sets.hipDominantSet1, setN: 1 },
		{ exercise: e.hipDominant, set: sets.hipDominantSet2, setN: 2 },
		{ exercise: e.hipDominant, set: sets.hipDominantSet3, setN: 3 },
		{ exercise: e.gluteAccessory, set: sets.gluteAccessorySet, setN: 1 },
		{ exercise: e.linearCore, set: sets.linearCoreSet, setN: 1 },
		{ exercise: e.rotationalCore, set: sets.rotationalCoreSet, setN: 1 }
	];

	// Add something to prevent writing the same workout multiple times
	function submitWorkout() {
		submitted = true;
		appendToGistFromWorkout(convertSetData(workoutId, day, setsRecord), day);
	}

	function resetSubmission() {
		submitted = false;
	}

	function convertSetData(workoutId, day, setsRecord) {
		return {
			workoutId: workoutId,
			day: day,
			sets: setsRecord.map((d) => {
				return {
					exercise: d.exercise.name,
					weight: d.set['weight'],
					reps: d.set['reps'],
					setN: d.setN,
					notes: d.set['notes']
				};
			})
		};
	}

	function selectSetFromPrevWorkout(e, setN, prevWorkout) {
		if (!prevWorkout) return null;
		console.log(prevWorkout);
		return prevWorkout.filter((s) => s.exercise === e.name && s.setN === setN).pop();
	}
</script>

<h1>Workout Tracker</h1>
<h2>Workout id: {workoutId}</h2>

{#if submitted}
	<h2>SUBMITTED!</h2>
{/if}

Week:<input type="number" bind:value={week} min="1" max="12" on:change={resetSubmission} />
Day:
<select bind:value={day} on:change={resetSubmission}>
	<option value={'A'}>A</option>
	<option value={'B'}>B</option>
	<option value={'C'}>C</option>
</select>

<h2>Workout {day} overview</h2>
<ul>
	<li><b>A1: {e.A1.name}</b> - 3 sets of {e.A1.repsRange[0]}-{e.A1.repsRange[1]} reps</li>
	<li><b>A2: {e.A2.name}</b> - 3 sets of {e.A2.repsRange[0]}-{e.A2.repsRange[1]} reps</li>
</ul>
<ul>
	<li><b>B1: {e.B1.name}</b> - 3 sets of {e.B1.repsRange[0]}-{e.B1.repsRange[1]} reps</li>
	<li><b>A2: {e.B2.name}</b> - 3 sets of {e.B2.repsRange[0]}-{e.B2.repsRange[1]} reps</li>
</ul>
<ul>
	<li>
		<b>{e.hipDominant.name}</b> - 3 sets of {e.hipDominant.repsRange[0]}-{e.hipDominant
			.repsRange[1]} reps
	</li>
	<li>
		<b>{e.gluteAccessory.name}</b> - 3 sets of {e.gluteAccessory.repsRange[0]}-{e.gluteAccessory
			.repsRange[1]} reps
	</li>
	<li>
		<b>{e.linearCore.name}</b> - 3 sets of {e.linearCore.repsRange[0]}-{e.linearCore.repsRange[1]} reps
	</li>
	<li>
		<b>{e.rotationalCore.name}</b> - 3 sets of {e.rotationalCore.repsRange[0]}-{e.rotationalCore
			.repsRange[1]} reps
	</li>
</ul>

<h2>A1 and A2 sets</h2>
{#await prevWorkoutPromise then prevSet}
	<Set
		e={e.A1}
		setN={1}
		setObj={sets.A1Set1}
		prevSet={selectSetFromPrevWorkout(e.A1, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.A2}
		setN={1}
		setObj={sets.A2Set1}
		prevSet={selectSetFromPrevWorkout(e.A2, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.A1}
		setN={2}
		setObj={sets.A1Set2}
		prevSet={selectSetFromPrevWorkout(e.A1, 2, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.A2}
		setN={2}
		setObj={sets.A2Set2}
		prevSet={selectSetFromPrevWorkout(e.A2, 2, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.A1}
		setN={3}
		setObj={sets.A1Set3}
		prevSet={selectSetFromPrevWorkout(e.A1, 3, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.A2}
		setN={3}
		setObj={sets.A2Set3}
		prevSet={selectSetFromPrevWorkout(e.A2, 3, prevSet)}
		disabled={submitted}
	/>

	<h2>B1 and B2 sets</h2>
	<Set
		e={e.B1}
		setN={1}
		setObj={sets.B1Set1}
		prevSet={selectSetFromPrevWorkout(e.A1, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.B2}
		setN={1}
		setObj={sets.B2Set1}
		prevSet={selectSetFromPrevWorkout(e.B2, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.B1}
		setN={2}
		setObj={sets.B1Set2}
		prevSet={selectSetFromPrevWorkout(e.B1, 2, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.B2}
		setN={2}
		setObj={sets.B2Set2}
		prevSet={selectSetFromPrevWorkout(e.B2, 2, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.B1}
		setN={3}
		setObj={sets.B1Set3}
		prevSet={selectSetFromPrevWorkout(e.B1, 3, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.B2}
		setN={3}
		setObj={sets.B2Set3}
		prevSet={selectSetFromPrevWorkout(e.B2, 3, prevSet)}
		disabled={submitted}
	/>

	<h2>Hip dominant sets</h2>
	<Set
		e={e.hipDominant}
		setN={1}
		setObj={sets.hipDominantSet1}
		prevSet={selectSetFromPrevWorkout(e.hipDominant, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.hipDominant}
		setN={2}
		setObj={sets.hipDominantSet2}
		prevSet={selectSetFromPrevWorkout(e.hipDominant, 2, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.hipDominant}
		setN={3}
		setObj={sets.hipDominantSet3}
		prevSet={selectSetFromPrevWorkout(e.hipDominant, 3, prevSet)}
		disabled={submitted}
	/>

	<h2>Accessory sets</h2>
	<Set
		e={e.gluteAccessory}
		setN={1}
		setObj={sets.gluteAccessorySet}
		prevSet={selectSetFromPrevWorkout(e.gluteAccessory, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.linearCore}
		setN={1}
		setObj={sets.linearCoreSet}
		prevSet={selectSetFromPrevWorkout(e.linearCore, 1, prevSet)}
		disabled={submitted}
	/>
	<Set
		e={e.rotationalCore}
		setN={1}
		setObj={sets.rotationalCoreSet}
		prevSet={selectSetFromPrevWorkout(e.rotationalCore, 1, prevSet)}
		disabled={submitted}
	/>
{/await}
<h2>Finish!!</h2>
<p>Don't forget to submit your workout!</p>
<button on:click={submitWorkout}>Submit</button>
{#if submitted}
	<h2>SUBMITTED!</h2>
{/if}
