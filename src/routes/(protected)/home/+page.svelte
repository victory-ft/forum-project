<script>
	import { onMount } from "svelte";
	import PageLoading from "$lib/components/PageLoading.svelte";

	export let data;

	let loading = true;
	let posts = [];
	let likedPosts = [];
	let dislikedPosts = [];

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
		if (response.ok) {
			posts = await response.json();
			const likedIds = new Set(likedPosts.map((post) => post.id));
			const dislikedIds = new Set(likedPosts.map((post) => post.id));

			posts.forEach((post) => {
				if (!likedIds.has(post.pk)) {
					likedPosts.push({
						id: post.pk,
						isLiked: post.is_liked,
						likes: post.likes,
					});
					likedIds.add(post.pk);
				}
			});

			posts.forEach((post) => {
				if (!dislikedIds.has(post.pk)) {
					dislikedPosts.push({
						id: post.pk,
						isDisliked: post.is_disliked,
						dislikes: post.dislikes,
					});
					dislikedIds.add(post.pk);
				}
			});
		}

		// console.log(likedPosts);
		// console.log(posts);
		// console.log(dislikedPosts);
		loading = false;
	};

	onMount(() => {
		fetchPosts();
	});

	const likePost = async (id) => {
		try {
			addLike(id);
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
			}
			//
		} catch (error) {
			console.log("error", error.message);
		}
	};

	const dislikePost = async (id) => {
		try {
			addDislike(id);
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/dislike-post/${id}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);
			//
		} catch (error) {
			console.log("error", error.message);
		}
	};

	const removeLikePost = async (id) => {
		try {
			removeLike(id);
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/remove-like-post/${id}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			// if (response.ok) {
			// }
			//
		} catch (error) {
			console.log("error", error.message);
		}
	};

	const removeDislikePost = async (id) => {
		try {
			removeDislike(id);
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/remove-dislike-post/${id}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			//
		} catch (error) {
			console.log("error", error.message);
		}
	};

	function addLike(id) {
		const postIndex = likedPosts.findIndex((post) => post.id === id);
		if (postIndex !== -1 && !likedPosts[postIndex].isLiked) {
			likedPosts[postIndex].likes += 1;
			likedPosts[postIndex].isLiked = true;
		}
		if (postIndex !== -1 && dislikedPosts[postIndex].isDisliked) {
			dislikedPosts[postIndex].dislikes -= 1;
			dislikedPosts[postIndex].isDisliked = false;
		}
	}

	function addDislike(id) {
		const postIndex = dislikedPosts.findIndex((post) => post.id === id);
		if (postIndex !== -1 && !dislikedPosts[postIndex].isDisliked) {
			dislikedPosts[postIndex].dislikes += 1;
			dislikedPosts[postIndex].isDisliked = true;
		}

		if (postIndex !== -1 && likedPosts[postIndex].isLiked) {
			likedPosts[postIndex].likes -= 1;
			likedPosts[postIndex].isLiked = false;
		}
	}

	function removeLike(id) {
		const postIndex = likedPosts.findIndex((post) => post.id === id);
		if (postIndex !== -1 && likedPosts[postIndex].isLiked) {
			likedPosts[postIndex].likes -= 1;
			likedPosts[postIndex].isLiked = false;
		}
		if (postIndex !== -1 && dislikedPosts[postIndex].isDisliked) {
			dislikedPosts[postIndex].dislikes -= 1;
			dislikedPosts[postIndex].isDisliked = false;
		}
	}

	function removeDislike(id) {
		const postIndex = dislikedPosts.findIndex((post) => post.id === id);
		if (postIndex !== -1 && dislikedPosts[postIndex].isDisliked) {
			dislikedPosts[postIndex].dislikes += -1;
			dislikedPosts[postIndex].isDisliked = false;
		}
	}

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
								{post.date_created}
							</div>
						</div>
						<a href={`/post/${post.pk}`} class="post-message">
							{post.text}
						</a>
						<div class="post-actions">
							<button class="post-action">
								<img src="/icons/comment.svg" alt="comments" />
								{post.comments}
							</button>
							<button
								class="post-action"
								on:click={() => {
									const postIndex = likedPosts.findIndex(
										(poste) => poste.id === post.pk,
									);
									likedPosts[postIndex].isLiked
										? removeLikePost(post.pk)
										: likePost(post.pk);
								}}
							>
								{#each likedPosts as liked}
									{#if liked.id === post.pk}
										<img
											src={liked.isLiked
												? "/icons/thumb-up-fill.svg"
												: "/icons/thumb-up.svg"}
											alt="like"
										/>
										{liked.likes}
									{/if}
								{/each}
							</button>
							<button
								class="post-action"
								on:click={() => {
									const postIndex = dislikedPosts.findIndex(
										(poste) => poste.id === post.pk,
									);
									dislikedPosts[postIndex].isDisliked
										? removeDislikePost(post.pk)
										: dislikePost(post.pk);
								}}
							>
								{#each dislikedPosts as disliked}
									{#if disliked.id === post.pk}
										<img
											src={disliked.isDisliked
												? "/icons/thumb-down-fill.svg"
												: "/icons/thumb-down.svg"}
											alt="like"
										/>
										{disliked.dislikes}
									{/if}
								{/each}
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
