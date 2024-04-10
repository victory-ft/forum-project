<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Line from "$lib/components/Line.svelte";

	export let data;

	let loading = true;
	let createLoading = false;
	let isLiked = [];
	let posts = [];

	const fetchPosts = async () => {
		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/get-homefeed/`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);
		posts = await response.json();
		console.log(posts);
		loading = false;
	};

	onMount(() => {
		fetchPosts();
	});

	const likePost = async (id) => {
		try {
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/like-post/${id}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			if (response.ok) {
				console.log("liked successfully");
				isLiked = [
					...isLiked,
					{
						liked: true,
						id,
					},
				];
				console.log(isLiked);
				checkIfLiked();
			}
			console.log(response);
			//
		} catch (error) {
			console.log(error.messages);
		}
	};

	const checkIfLiked = (id) => {
		isLiked.find((like) => {
			if (like.id === id) {
				console.log("found");
			} else {
				console.log("not found");
			}
		});
	};

	onMount(() => {
		fetchPosts();
	});
</script>

<div class="home-content">
	<h1>Home</h1>

	<div class="post-msg-container">
		<div class="post-input-container">
			<img src="/images/dummy.png" alt="profile" class="profile-img" />
			<input
				type="text"
				name="post"
				id="post"
				class="post-input"
				placeholder="What's on your mind?"
			/>
		</div>
		<button class="post-btn">Post</button>
	</div>

	{#if loading}
		<PageLoading />
	{:else}
		{#each posts as post}
			<div class="post-container">
				<div class="post">
					<div class="post-message-container">
						<div class="post-username-container">
							<img src="/images/dummy.png" alt="pfp" class="profile-img" />
							<a href={`/profile/${post.owner.pk}`} class="profile-text-info">
								<p class="post-name">
									{post.owner.first_name}
									{post.owner.last_name}
								</p>
								<p class="post-username">@{post.owner.username}</p>
							</a>
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
							<button class="post-action" on:click={() => likePost(post.pk)}>
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
	{/if}
</div>

<style lang="scss">
	.home-content {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
	}

	h1 {
		font-weight: 600;
		color: #502eed;
	}

	.post-msg-container {
		width: calc(100% - 20px);
		margin: 10px 10px 30px;
	}

	.post-input-container {
		display: flex;
		justify-content: start;
		align-items: center;
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

		& > a {
			text-decoration: none;
			color: #000;
		}
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
		width: 100%;
		display: block;
		/* flex-wrap: wrap; */
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
		.home-content {
			border-radius: 0;
			margin: 0 -10px -10px -22px;
			/* margin-right: -10px;
			margin-bottom: -10px; */
			padding-right: 1px;
		}
		h1 {
			margin-top: 0px;
		}

		.post-container {
			padding: 5px 10px;
		}
	}

	@media only screen and (max-width: 500px) {
		.profile-text-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
		}

		.profile-text-info p {
			margin: 0;
		}
	}
</style>
