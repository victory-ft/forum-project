<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Button from "$lib/components/Button.svelte";

	export let data;
	export let form;

	const { id } = $page.params;

	$: if (form?.success) {
		fetchCommunity();
	}

	let loading = true;
	let createLoading = false;
	let community = {};
	let posts = [];
	let members = {};
	let likedPosts = [];
	let dislikedPosts = [];

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
		posts = resJSON.posts;
		posts.reverse();
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
		fetchCommunityUsers();
		loading = false;
	};

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
	};

	const joinCommunity = async () => {
		try {
			await fetch(
				`https://forum-co-backend.onrender.com/socials/join-community/${id}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);
			fetchCommunity();
		} catch (error) {
			// console.log("error:", error);
		}
	};

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

	let isDeleteModal = false;
	let deleteLoading = false;
	let deletePk = "";

	const deletePost = async () => {
		try {
			deleteLoading = true;
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/delete-community-post/${deletePk}/`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);
			deleteLoading = false;
			isDeleteModal = false;
			fetchCommunity();
			//
		} catch (error) {
			console.log("error", error.message);
		}
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
		<a href={`/communities/members/${id}`} class="members-number">
			{#if members.members}
				<span>{members.members.length}</span>
				members
			{:else}
				...
			{/if}
		</a>
		<br />
		<button
			class="post-btn cd"
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
								<a href={`/profile/${post.owner.pk}`} class="profile-text-info">
									<p class="post-name">
										{post.owner.first_name}
										{post.owner.last_name}
									</p>
									<p class="post-username">@{post.owner.username}</p>
								</a>
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
								{#if community.is_admin}
									<button
										class="delete"
										on:click={() => {
											deletePk = post.pk;
											isDeleteModal = !isDeleteModal;
										}}
									>
										Delete post
									</button>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<h3 class="no-posts">No posts in this community</h3>
		{/if}

		{#if isDeleteModal}
			<div class="modal">
				<h2 class="sure">Are you sure?</h2>

				<button class="close-btn" on:click={() => (isDeleteModal = false)}>
					<img src="/icons/close.svg" alt="close" />
				</button>

				<button class="post-btn" on:click={deletePost}>
					{#if deleteLoading}
						<Loading />
					{:else}
						Yes
					{/if}
				</button>
			</div>
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
		margin-bottom: 5px;
		font-size: 1.2rem;
	}

	.delete {
		background-color: #ededed;
		border: none;
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
		justify-content: start;
		align-items: center;
		text-decoration: none;
		color: #000;
		/* flex-direction: column !important; */
	}

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0 -10px -10px -20px;
			padding-right: 1px;
			padding-left: -1px;
		}

		h1 {
			margin-top: -5px;
		}
	}

	.modal {
		position: absolute;
		padding: 10px;
		margin: auto;
		inset: 0;
		border-radius: 20px;
		width: 220px;
		height: 120px;
		background-color: #fff;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		z-index: 20;
	}

	.close-btn {
		width: 2.5rem;
		height: 2.5rem;
		background-color: transparent;
		border: none;
		position: absolute;
		right: 10px;
		top: 10px;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.sure {
		margin-top: 0px;
		color: #502eed;
	}

	/* @media only screen and (max-width: 650px) {
		.modal {
			width: 300px;
			height: 240px;
		}
	} */
</style>
