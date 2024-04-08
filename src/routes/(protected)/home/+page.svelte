<script>
	import Line from "$lib/components/Line.svelte";
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

	<div class="post-container">
		<div class="post">
			<div class="post-message-container">
				<div class="post-username-container">
					<img src="/images/dummy.png" alt="pfp" class="profile-img" />
					<div class="profile-text-info">
						<p class="post-name">Oluwatayo</p>
						<p class="post-username">@oluwatayo</p>
					</div>
					<div class="post-time">
						<span>•</span>
						1h
					</div>
				</div>
				<a href="/post/1" class="post-message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
					mollitia quos, dignissimos voluptates possimus veritatis.
				</a>
				<div class="post-actions">
					<button class="post-action">
						<img src="/icons/comment.svg" alt="comments" />
						3
					</button>
					<button class="post-action">
						<img src="/icons/thumb-up.svg" alt="like" />
						81
					</button>
					<button class="post-action">
						<img src="/icons/thumb-down.svg" alt="dislike" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="post-container">
		<div class="post">
			<div class="post-message-container">
				<div class="post-username-container">
					<img src="/images/dummy.png" alt="pfp" class="profile-img" />
					<div class="profile-text-info">
						<p class="post-name">Oluwatayo</p>
						<p class="post-username">@oluwatayo</p>
					</div>
					<div class="post-time">
						<span>•</span>
						1h
					</div>
				</div>
				<a href="/post/1" class="post-message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
					mollitia quos, dignissimos voluptates possimus veritatis.
				</a>
				<div class="post-actions">
					<button class="post-action">
						<img src="/icons/comment.svg" alt="comments" />
						2
					</button>
					<button class="post-action">
						<img src="/icons/thumb-up.svg" alt="like" />
						62
					</button>
					<button class="post-action">
						<img src="/icons/thumb-down.svg" alt="dislike" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="post-container">
		<div class="post">
			<div class="post-message-container">
				<div class="post-username-container">
					<img src="/images/dummy.png" alt="pfp" class="profile-img" />
					<div class="profile-text-info">
						<p class="post-name">Oluwatayo</p>
						<p class="post-username">@oluwatayo</p>
					</div>
					<div class="post-time">
						<span>•</span>
						1h
					</div>
				</div>
				<a href="/post/1" class="post-message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
					mollitia quos, dignissimos voluptates possimus veritatis.
				</a>
				<div class="post-actions">
					<button class="post-action">
						<img src="/icons/comment.svg" alt="comments" />
						12
					</button>
					<button class="post-action">
						<img src="/icons/thumb-up.svg" alt="like" />
						202
					</button>
					<button class="post-action">
						<img src="/icons/thumb-down.svg" alt="dislike" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="post-container">
		<div href="/post/1" class="post">
			<div class="post-message-container">
				<div class="post-username-container">
					<img src="/images/dummy.png" alt="pfp" class="profile-img" />
					<div class="profile-text-info">
						<p class="post-name">Oluwatayo</p>
						<p class="post-username">@oluwatayo</p>
					</div>
					<div class="post-time">
						<span>•</span>
						1h
					</div>
				</div>
				<a href="/post/1" class="post-message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
					mollitia quos, dignissimos voluptates possimus veritatis.
				</a>
				<div class="post-actions">
					<button class="post-action">
						<img src="/icons/comment.svg" alt="comments" />
						12
					</button>
					<button class="post-action">
						<img src="/icons/thumb-up.svg" alt="like" />
						202
					</button>
					<button class="post-action">
						<img src="/icons/thumb-down.svg" alt="dislike" />
					</button>
				</div>
			</div>
		</div>
	</div>
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
		.home-content {
			margin: 0;
			margin-right: -10px;
			padding-right: 1px;
		}
		h1 {
			margin-top: 0px;
		}

		.post-container {
			padding: 5px 0;
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
