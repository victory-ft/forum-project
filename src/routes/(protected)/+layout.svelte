<script>
	import LeftNav from "$lib/components/LeftNav.svelte";
	import RightNav from "$lib/components/RightNav.svelte";

	let isMenuOpen = false;

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<main class="main-container">
	<LeftNav {isMenuOpen} {closeMenu} />
	<button class="menu-btn" on:click={() => (isMenuOpen = !isMenuOpen)}>
		<img src="/icons/menu.svg" alt="menu" />
	</button>
	<slot />
	<RightNav />
</main>

<style lang="scss">
	.menu-btn {
		width: 3rem;
		height: 3rem;
		position: fixed;
		right: 24%;
		top: 20px;
		background-color: transparent;
		border: none;
		display: none;
		z-index: 99;
	}
	.main-container {
		position: relative;
		margin: 5px;
		height: calc(100dvh - 20px);
		width: calc(100% - 20px);
		display: grid;
		/* place-content: center; */
		grid-template-columns: 1fr 4fr 1fr;
	}
	@media only screen and (max-width: 1200px) {
		.main-container {
			grid-template-columns: 4fr 1fr;
		}

		.menu-btn {
			display: block;
		}
	}

	@media only screen and (max-width: 960px) {
		.main-container {
			grid-template-columns: 1fr;
		}

		.menu-btn {
			right: 2%;
		}
	}
</style>
