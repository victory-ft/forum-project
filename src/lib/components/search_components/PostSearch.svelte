<div class="post-container">
	<a href="/post/1" class="post">
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
			<p class="post-message">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
				mollitia quos, dignissimos voluptates possimus veritatis.
			</p>
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
	</a>
</div>
<div class="post-container">
	<a href="/post/1" class="post">
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
			<p class="post-message">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
				mollitia quos, dignissimos voluptates possimus veritatis.
			</p>
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
	</a>
</div>

<style lang="scss">
	.profile-img {
		width: 3rem;
		margin-right: 10px;
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
	}

	.post-actions {
		display: flex;
		justify-content: start;
		align-items: center;
		margin-top: 20px;
	}

	.post-action {
		font-family: "Poppins", sans-serif;
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: start;
		align-items: center;
		margin-right: 10px;
		font-size: 0.85rem;
		cursor: pointer;

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
