<script>
	import { onMount } from "svelte";
	import PageLoading from "$lib/components/PageLoading.svelte";

	export let data;
	let loading = true;
	let communities = [];
	// $: console.log(loading);

	onMount(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://forum-co-backend.onrender.com/socials/get-communities/",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);
			communities = await response.json();
			loading = false;
		};

		fetchData();
	});
</script>

{#if loading}
	<main>
		<PageLoading />
	</main>
{:else}
	<main>
		<h1>Communities</h1>

		<div class="communities">
			{#each communities as community}
				<a href={`/communities/${community.pk}`} class="community">
					<img src="/images/group.png" alt="community" />
					<div>
						<p class="community-name">{community.name}</p>
						<p class="community-members">{community.member_count} members</p>
					</div>
				</a>
			{/each}
		</div>
	</main>
{/if}

<style lang="scss">
	h1 {
		font-weight: 600;
		color: #502eed;
	}

	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
	}

	.communities {
		display: grid;
		grid-template-columns: repeat(auto-fill, 10rem);
		place-content: center;
		justify-content: space-evenly;
		grid-gap: 10px;
	}

	.community {
		/* margin-bottom: 0;
		padding-bottom: 0; */
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: #000;
		position: relative;

		img {
			border-radius: 50%;
			filter: invert(100%);
			margin-right: 5px;
			padding: 5px;
			width: 30px;
			height: 30px;
			background-color: #656464;
		}

		.community-name {
			margin-bottom: 0;
			padding: 0;
			font-weight: 500;
			font-size: 0.9rem;
		}

		.community-members {
			margin: 0 0px 5px;
			padding: 0;
			font-size: 0.85rem;
			color: #656464;
		}
	}

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0;
			margin-right: -10px;
			margin-bottom: -10px;
			padding-right: 1px;
		}

		h1 {
			margin-top: 10px;
		}
	}
</style>
