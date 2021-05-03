<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';

	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	let polls = [
		{
			id: 1,
			question: 'A or B?',
			answerA: 'A',
			answerB: 'B',
			votesA: 9,
			votesB: 15,
		},
	];

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];

		activeItem = 'Current Polls';
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<p>This tab will show all the current polls</p>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 690px;
		margin: 40px auto;
	}
</style>