<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
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
		console.log(members);
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
				<a href={"#"} class="post">
					<div class="post-message-container">
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

	.community-desc {
		font-weight: 400;
		margin: 0;
		margin-bottom: 5px;
		font-size: 1.2rem;
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

	.no-posts {
		font-weight: 500;
		color: #656464;
	}

	.post-input-container {
		display: flex;
		justify-content: start;
		align-items: start;
		flex-direction: column;
	}

	.post-msg-container {
		form {
			& > div {
				display: flex;
				width: 100%;
			}
			/* flex-wrap: wrap; */

			button {
				display: block;
				/* flex: 0 1 100%; */
			}
		}
	}

	.profile-img {
		width: 3rem;
		margin-right: 10px;
		border-radius: 50%;
	}

	.post-input {
		width: 100%;
		padding: 10px 20px;
		border-radius: 20px;
		border: none;
		background-color: #ededed;
		outline: none;
		font-size: 1rem;
	}

	.post-btn {
		margin-top: 20px;
		padding: 10px 25px;
		border-radius: 20px;
		border: none;
		font-size: 1rem;
		background-color: #512eed36;
		cursor: pointer;
		color: #000;

		&.cd {
			margin-top: 10px;
		}
	}

	.post-container {
		padding: 10px;
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
	}

	.post-time {
		margin-left: 5px;
		font-size: 0.9rem;
		color: #656464;
	}

	.post-time span {
		margin-right: 5px;
	}

	.post-message {
		margin: 5px 0;
		text-decoration: none;
		color: #000;
	}

	.post-actions {
		display: flex;
		justify-content: start;
		align-items: center;
		margin-top: 20px;
	}

	.post-action {
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: start;
		align-items: center;
		margin-right: 10px;
		font-size: 0.85rem;
		cursor: pointer;
		color: #000;

		img {
			width: 1.4rem;
			margin-right: 4px;
		}
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

		h1 {
			margin-top: -5px;
		}
	}
</style>
