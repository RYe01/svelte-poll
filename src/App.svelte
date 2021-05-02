<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';

	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<p>This tab will show all the current polls</p>
	{:else if activeItem === 'Add New Poll'}
		<p>This tab will let you add a new poll</p>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 690px;
		margin: 40px auto;
	}
</style>