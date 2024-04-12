<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let data;

	const { id } = $page.params;

	let loading = true;
	let createLoading = false;
	let joined = false;
	let posts = [];
	let members = {};

	const fetchCommunityUsers = async () => {
		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/get-community-users/${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);
		members = await response.json();
		// console.log(members);
		loading = false;
	};

	onMount(() => {
		fetchCommunityUsers();
	});
</script>

{#if loading}
	<main>
		<PageLoading />
	</main>
{:else}
	<main>
		<h1>Members</h1>

		<p class="members-number">
			<span>{members.members.length}</span>
			members
		</p>

		{#each members.members as member}
			<div class="post-container">
				<a href={`/profile/${member.pk}`} class="post">
					<div class="post-message-container">
						<div class="cont">
							<div class="post-username-container">
								<img src="/images/dummy.png" alt="pfp" class="profile-img" />
								<div class="profile-text-info">
									<p class="post-name">
										{member.first_name}
										{member.last_name}
									</p>
									<p class="post-username">@{member.username}</p>
								</div>
							</div>
							<button class="post-btn">Message</button>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</main>
{/if}

<style lang="scss">
	h1 {
		font-weight: 600;
		color: #502eed;
		margin-bottom: 0;
	}

	.members-number {
		margin-top: 5px;
		margin-bottom: 5px;
		font-size: 1rem;
		color: #424242;
		text-decoration: none;
		span {
			font-weight: 600;
			color: #000;
		}
	}

	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
	}

	.profile-img {
		width: 3rem;
		margin-right: 10px;
		border-radius: 50%;
	}

	.post-btn {
		padding: 10px 25px;
		border-radius: 20px;
		border: none;
		font-size: 1rem;
		background-color: #512eed36;
		cursor: pointer;
		color: #000;
		margin-left: 20px;
	}

	.post-container {
		padding: 10px;
	}

	.cont {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 50%;
		justify-content: center;
		align-items: center;
	}

	.post-container:hover {
		background-color: #f7f7f7;
	}

	.post {
		text-decoration: none;
		color: #000;
	}

	.post-username-container {
		display: flex;
		justify-content: start;
		align-items: center;
		margin: 0;
		margin-top: 10px;
	}

	.post-name {
		margin-right: 5px;
		font-weight: 500;
	}

	.post-username {
		font-size: 0.9rem;
		color: #656464;
		margin-bottom: 20px;
	}

	.profile-text-info {
		display: flex;
		justify-content: flex-start;
		align-items: start;
		flex-direction: column;

		p {
			margin: 0;
		}
	}

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0 -10px -10px;
			padding-right: 1px;
			padding-left: -1px;
		}

		.cont {
			width: 100%;
		}

		h1 {
			margin-top: -5px;
		}
	}
</style>
