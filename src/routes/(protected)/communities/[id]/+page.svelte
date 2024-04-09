<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let data;
	export let form;

	const { id } = $page.params;

	$: if (form?.success) {
		fetchCommunity();
	}

	let loading = true;
	let createLoading = false;
	let joined = false;
	let community = {};
	let posts = [];

	const fetchCommunity = async () => {
		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/get-community/${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);
		const resJSON = await response.json();
		community = resJSON;
		// console.log(community);
		posts = resJSON.posts;
		posts.reverse();
		loading = false;
	};

	const joinCommunity = async () => {
		await fetch(
			`https://forum-co-backend.onrender.com/socials/join-community/${id}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);

		// fetchCommunity()
		// console.log("ran");
	};

	onMount(() => {
		fetchCommunity();
	});
</script>

{#if loading}
	<main>
		<PageLoading />
	</main>
{:else}
	<main>
		<h1>{community.name}</h1>
		<h2 class="community-desc">
			{community.description}
		</h2>
		<button
			class="post-btn"
			disabled={community.is_joined}
			on:click={joinCommunity}
		>
			{#if community.is_joined}
				Joined
			{:else}
				Join Community
			{/if}
		</button>
		<br />
		<br />
		<div class="post-msg-container">
			<form
				method="POST"
				action="?/post"
				class="post-input-container"
				use:enhance={() => {
					createLoading = true;
					return async ({ update }) => {
						createLoading = false;
						update();
					};
				}}
			>
				<div>
					<img src="/images/dummy.png" alt="profile" class="profile-img" />
					<input
						type="text"
						name="post"
						id="post"
						class="post-input"
						placeholder="Post in this community"
					/>
				</div>
				<!-- <br /> -->
				<button class="post-btn">
					{#if createLoading}
						<Loading />
					{:else}
						Post
					{/if}
				</button>
			</form>
		</div>
		<br />
		{#if posts.length !== 0}
			{#each posts as post}
				<div class="post-container">
					<div class="post">
						<div class="post-message-container">
							<div class="post-username-container">
								<img src="/images/dummy.png" alt="pfp" class="profile-img" />
								<div class="profile-text-info">
									<p class="post-name">
										{post.owner.first_name}
										{post.owner.last_name}
									</p>
									<p class="post-username">@{post.owner.username}</p>
								</div>
								<div class="post-time">
									<span>•</span>
									1h
								</div>
							</div>
							<a href="/post/1" class="post-message">
								{post.text}
							</a>
							<div class="post-actions">
								<button class="post-action">
									<img src="/icons/comment.svg" alt="comments" />
									{post.comments}
								</button>
								<button class="post-action">
									<img src="/icons/thumb-up.svg" alt="like" />
									{post.likes}
								</button>
								<button class="post-action">
									<img src="/icons/thumb-down.svg" alt="dislike" />
								</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<h3 class="no-posts">No posts in this community</h3>
		{/if}
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
		font-size: 1.2rem;
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
		justify-content: start;
		align-items: center;
		/* flex-direction: column !important; */
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
