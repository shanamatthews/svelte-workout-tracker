<script>
	export let e;
	export let setN;
	export let setObj;
	export let prevSet;
	export let disabled = false;

	if (prevSet) {
		setObj.weight = prevSet.weight;
		setObj.reps = prevSet.reps;
	} else {
		setObj.weight = e.weightRange[0];
		setObj.reps = e.repsRange[0];
	}

	function setNameGenerator() {
		return `<h4>${e.name} set ${setN}</h4>`;
	}

	function prevWorkoutNumsGenerator() {
		console.log(prevSet);
		if (!prevSet) return `<p>No previous workout data</p>`;
		return `<p>Prev <b>weight: </b>${prevSet.weight}, <b>reps: </b>${prevSet.reps}</p>`;
	}
</script>

<p>{@html setNameGenerator(e, setN)}</p>
<p>{@html prevWorkoutNumsGenerator(e, setN)}</p>
Weight:
{#if disabled}
	<input
		type="number"
		bind:value={setObj.weight}
		min={e.weightRange[0]}
		max={e.weightRange[1]}
		step={e.increment}
		disabled
	/>
	<input
		type="range"
		bind:value={setObj.weight}
		min={e.weightRange[0]}
		max={e.weightRange[1]}
		step={e.increment}
		disabled
	/>
{:else}
	<input
		type="number"
		bind:value={setObj.weight}
		min={e.weightRange[0]}
		max={e.weightRange[1]}
		step={e.increment}
	/>
	<input
		type="range"
		bind:value={setObj.weight}
		min={e.weightRange[0]}
		max={e.weightRange[1]}
		step={e.increment}
	/>{/if}
Reps:
{#if disabled}
	<input
		type="number"
		bind:value={setObj.reps}
		min={e.repsRange[0]}
		max={e.repsRange[1]}
		disabled
	/>
	<input type="range" bind:value={setObj.reps} min={e.repsRange[0]} max={e.repsRange[1]} disabled />
{:else}
	<input type="number" bind:value={setObj.reps} min={e.repsRange[0]} max={e.repsRange[1]} />
	<input type="range" bind:value={setObj.reps} min={e.repsRange[0]} max={e.repsRange[1]} />
{/if}
Notes:
{#if disabled}
	<input type="text" bind:value={setObj.notes} disabled />
{:else}
	<input type="text" bind:value={setObj.notes} />
{/if}
