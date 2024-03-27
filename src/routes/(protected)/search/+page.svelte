<script>
	import CommunitySearch from "$lib/components/search_components/CommunitySearch.svelte";
	import MemberSearch from "$lib/components/search_components/MemberSearch.svelte";
	import PostSearch from "$lib/components/search_components/PostSearch.svelte";

	let searchType = "posts";

	function changeSearchType(type) {
		searchType = type;
	}
</script>

<main>
	<h2>Search results for "Haha"</h2>
	<div class="search-types">
		<button
			class="search-type {searchType == 'posts' && 'active'}"
			on:click={() => changeSearchType("posts")}
		>
			Posts
		</button>
		<button
			class="search-type {searchType == 'comm' && 'active'}"
			on:click={() => changeSearchType("comm")}
		>
			Communities
		</button>
		<button
			class="search-type {searchType == 'members' && 'active'}"
			on:click={() => changeSearchType("members")}
		>
			Members
		</button>
	</div>
	{#if searchType === "posts"}
		<PostSearch />
	{:else if searchType === "comm"}
		<CommunitySearch />
	{:else}
		<MemberSearch />
	{/if}
</main>

<style lang="scss">
	h2 {
		font-weight: 600;
		/* color: #502eed; */
	}

	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
	}

	.search-types {
		display: flex;
		justify-content: start;
		align-items: center;

		.search-type {
			padding: 10px 25px;
			border-radius: 20px;
			border: none;
			font-size: 1rem;
			background-color: #bbbbbb;
			cursor: pointer;
			margin: 0 10px;
			color: #000;

			&.active {
				background-color: #512eed36;
			}
		}
	}

	@media only screen and (max-width: 960px) {
		.search-types {
			flex-wrap: wrap;

			.search-type {
				margin-bottom: 5px;
			}
		}
	}
</style>
