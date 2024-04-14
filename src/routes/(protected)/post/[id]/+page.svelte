<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import Line from "$lib/components/Line.svelte";
	import Button from "$lib/components/Button.svelte";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let data;
	const { id } = $page.params;

	let post = {};
	let loading = true;
	let commentLoading = false;
	let actions = {};

	const fetchPost = async (id) => {
		try {
			const response = await fetch(
				`https://forum-co-backend.onrender.com/socials/get-post-info/${id}/`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			if (response.ok) {
				post = await response.json();
				console.log(post);
				actions = {
					isLiked: post.is_liked,
					isDisliked: post.is_disliked,
					likes: post.likes,
					dislikes: post.dislikes,
				};
				loading = false;
			}

			//
		} catch (error) {
			console.log("error", error.message);
		}
	};

	function addLike() {
		if (!actions.isLiked) {
			actions = {
				isLiked: true,
				likes: (actions.likes += 1),
				isDisliked: false,
				dislikes: (actions.dislikes -= 1),
			};
		}
	}

	function addDislike() {
		if (!actions.isDisliked) {
			actions = {
				isLiked: false,
				likes: (actions.likes -= 1),
				isDisliked: true,
				dislikes: (actions.dislikes += 1),
			};
		}
	}

	function removeLike() {
		if (actions.isLiked) {
			actions = { isLiked: false, likes: (actions.likes -= 1) };
		}
	}

	function removeDislike() {
		if (actions.isDisliked) {
			actions = { isDisliked: false, dislikes: (actions.dislikes -= 1) };
		}
	}

	onMount(() => {
		fetchPost(id);
	});
</script>

<main class="post-container">
	<!-- <div class="post-community">
		<img src="/icons/community.svg" alt="community-icon" />
		<p class="community-name">Software Development</p>
	</div> -->

	{#if loading}
		<PageLoading />
	{:else}
		<h2>Post</h2>

		<div class="post-message-container">
			<div class="post-message">
				{post.text}
			</div>
			<div class="post-author">
				<a href={`/profile/${post.owner.pk}`} class="post-author-info">
					<img src="/images/dummy.png" alt="post-author" class="author-image" />
					<div class="post-author-text">
						<p class="post-name">
							{post.owner.first_name}
							{post.owner.last_name}
						</p>
						<p class="post-username">@{post.owner.username}</p>
					</div>
				</a>

				<div class="post-created">
					<p>{post.date_created}</p>
					<!-- <p>Mar, 24 2024</p> -->
				</div>
			</div>
			<div class="post-actions">
				<button class="post-action">
					<img src="/icons/comment.svg" alt="comments" />
					{post.comments.length}
				</button>
				<form
					action={!actions.isLiked ? "?/like" : "?/removeLike"}
					method="POST"
					use:enhance={() => {
						actions.isLiked ? removeLike() : addLike();
						return async ({ update }) => {
							update();
						};
					}}
				>
					<button class="post-action">
						<img
							src={actions.isLiked
								? "/icons/thumb-up-fill.svg"
								: "/icons/thumb-up.svg"}
							alt="like"
						/>
						{actions.likes}
					</button>
				</form>
				<form
					action={!actions.isDisliked ? "?/dislike" : "?/removeDislike"}
					method="POST"
					use:enhance={() => {
						actions.isDisliked ? removeDislike() : addDislike();
						return async ({ update }) => {
							update();
						};
					}}
				>
					<button class="post-action">
						<img
							src={actions.isDisliked
								? "/icons/thumb-down-fill.svg"
								: "/icons/thumb-down.svg"}
							alt="dislike"
						/>
					</button>
				</form>
			</div>
		</div>
		<Line />
		<div class="reply-container">
			<form
				class="reply-input-container"
				action="?/comment"
				method="POST"
				use:enhance={() => {
					commentLoading = true;
					return async ({ update }) => {
						commentLoading = false;
						fetchPost(id);
						update();
					};
				}}
			>
				<input type="text" name="text" id="text" placeholder="Reply..." />
				<Button>
					{#if commentLoading}
						<Loading />
					{:else}
						Reply
					{/if}
				</Button>
			</form>

			{#if post.comments.length === 0}
				<p class="no-comments">No comments</p>
			{:else}
				{#each post.comments.reverse() as comment}
					<div class="reply-message-container">
						<div class="post-author">
							<div class="post-author-info">
								<img
									src="/images/dummy.png"
									alt="post-author"
									class="author-image"
								/>
								<div class="post-author-text">
									<p class="post-name">
										{comment.owner.first_name}
										{comment.owner.last_name}
									</p>
									<p class="post-username">@{comment.owner.username}</p>
								</div>
							</div>
							<div class="post-created">
								<p>{comment.date_created}</p>
								<!-- <p>Mar, 24 2024</p> -->
							</div>
						</div>
						<a href={"#"} class="reply-message">
							{comment.text}
						</a>
						<!-- <div class="post-actions">
							<button class="post-action">
								<img src="/icons/comment.svg" alt="comments" />
								2
							</button>
							<button class="post-action">
								<img src="/icons/thumb-up.svg" alt="like" />
								42
							</button>
							<button class="post-action">
								<img src="/icons/thumb-down.svg" alt="dislike" />
							</button>
						</div> -->
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</main>

<style lang="scss">
	.post-container {
		position: relative;
		/* padding: 2px 10px 10px; */
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 2px 20px 20px;
	}

	h2 {
		margin-top: 30px;
		font-weight: 600;
	}

	.post-community {
		display: flex;
		justify-content: start;
		align-items: center;
		position: fixed;
		background-color: #fff;
		width: 60%;
		top: 20px;
		padding: 0;
		height: 25px;
		border-radius: 5px;

		img {
			width: 1rem;
			margin-right: 5px;
		}

		.community-name {
			font-size: 0.9rem;
			color: #656464;
		}
	}

	.post-message-container,
	.reply-container {
		margin: 10px 40px;
	}

	.post-actions {
		margin-top: 10px;
		display: flex;
		justify-content: start;
		align-items: center;
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

	.post-author {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.post-author-info {
		display: flex;
		justify-content: start;
		align-items: center;
		text-decoration: none;
		color: #000;

		img {
			height: 2.5rem;
			width: 2.5rem;
			border-radius: 50%;
		}

		.post-author-text {
			margin-left: 10px;
			font-size: 0.9rem;
		}

		.post-name {
			margin-bottom: 0;
			font-weight: 500;
			font-size: 0.9rem;
		}

		.post-username {
			margin-top: 0;
			font-size: 0.8rem;
			color: #656464;
		}
	}

	.post-created p {
		font-size: 0.9rem;
		color: #656464;
		margin: 0;
	}

	.reply-input-container {
		/* background-color: #fff; */
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		padding: 10px 5px;

		input {
			padding: 10px;
			width: 100%;
			/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
			margin-right: 10px;
			border-radius: 20px;
			border: none;
			background-color: #ededed;
			font-size: 1rem;
		}
	}

	.no-comments {
		font-weight: 500;
		color: #656464;
	}

	.reply-message-container {
		margin-bottom: 10px;
		&:hover {
			background-color: #f7f7f7;
		}

		.reply-message {
			text-decoration: none;
			color: #000;
		}
	}

	@media only screen and (max-width: 960px) {
		.post-container {
			border-radius: 0;
			margin: 0;
			margin-left: -10px;
			margin-right: -10px;
			margin-bottom: -10px;
			padding-right: 1px;
		}

		.post-message-container,
		.reply-container {
			margin: 10px;
		}

		.post-community {
			display: none;
		}
	}
</style>
