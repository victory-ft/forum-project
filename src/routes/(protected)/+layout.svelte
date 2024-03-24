<script>
	import LeftNav from "../../lib/components/LeftNav.svelte";
	import RightNav from "../../lib/components/RightNav.svelte";
</script>

<main class="main-container">
	<LeftNav />
	<slot />
	<RightNav />
</main>

<style lang="scss">
	.main-container {
		margin: 10px;
		height: calc(100dvh - 20px);
		width: calc(100% - 20px);
		display: grid;
		/* place-content: center; */
		grid-template-columns: 1fr 4fr 1fr;
	}
</style>
