<script>
	import Line from "$lib/components/Line.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<main class="post-container">
	<div class="post-community">
		<img src="/icons/community.svg" alt="community-icon" />
		<p class="community-name">Software Development</p>
	</div>
	<br />
	<h3>Post</h3>
	<div class="reply-message-container">
		<div class="post-author">
			<div class="post-author-info">
				<img src="/images/dummy.png" alt="post-author" class="author-image" />
				<div class="post-author-text">
					<p class="post-name">Ayodele</p>
					<p class="post-username">@badboyayo</p>
				</div>
			</div>
		</div>
		<a href="/post/1" class="reply-message">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
			delectus dolor, dolorum quis ab itaque ut rem deserunt cum? Nostrum porro
			nesciunt corporis voluptatum rerum eos ratione iste animi non!
		</a>
		<div class="post-actions">
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
		</div>
	</div>

	<h2>Reply</h2>

	<div class="post-message-container">
		<div class="post-message">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non
			quaerat quis, itaque eos iure maiores tempora repudiandae, quibusdam,
			minima maxime. Earum cumque asperiores error officia omnis corrupti
			doloribus alias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Minus iste labore, suscipit culpa rerum enim. In, recusandae quibusdam
			iure voluptas fugiat, ea beatae, ex nemo porro reprehenderit rem commodi
			placeat!
		</div>
		<div class="post-author">
			<div class="post-author-info">
				<img src="/images/dummy.png" alt="post-author" class="author-image" />
				<div class="post-author-text">
					<p class="post-name">Oluwatayo</p>
					<p class="post-username">@oluwatayo</p>
				</div>
			</div>

			<div class="post-created">
				<p>07:58 PM</p>
				<p>Mar, 24 2024</p>
			</div>
		</div>
		<div class="post-actions">
			<button class="post-action">
				<img src="/icons/comment.svg" alt="comments" />
				23
			</button>
			<button class="post-action">
				<img src="/icons/thumb-up.svg" alt="like" />
				450
			</button>
			<button class="post-action">
				<img src="/icons/thumb-down.svg" alt="dislike" />
			</button>
		</div>
	</div>
	<Line />
	<div class="reply-container">
		<div class="reply-input-container">
			<input type="text" class="search" placeholder="Reply..." />
			<Button>Reply</Button>
		</div>

		<div class="reply-message-container">
			<div class="post-author">
				<div class="post-author-info">
					<img src="/images/dummy.png" alt="post-author" class="author-image" />
					<div class="post-author-text">
						<p class="post-name">Ayodele</p>
						<p class="post-username">@badboyayo</p>
					</div>
				</div>
			</div>
			<a href={"#"} class="reply-message">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
				delectus dolor, dolorum quis ab itaque ut rem deserunt cum? Nostrum
				porro nesciunt corporis voluptatum rerum eos ratione iste animi non!
			</a>
			<div class="post-actions">
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
			</div>
		</div>
		<div class="reply-message-container">
			<div class="post-author">
				<div class="post-author-info">
					<img src="/images/dummy.png" alt="post-author" class="author-image" />
					<div class="post-author-text">
						<p class="post-name">John Doe</p>
						<p class="post-username">@theirdaddy</p>
					</div>
				</div>
			</div>
			<a href="/post/1/reply/1" class="reply-message">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
				voluptatibus reiciendis amet provident molestiae aperiam ratione,
				deserunt ipsa in libero repellat nam quis est commodi quas qui dolores.
			</a>
			<div class="post-actions">
				<button class="post-action">
					<img src="/icons/comment.svg" alt="comments" />
					8
				</button>
				<button class="post-action">
					<img src="/icons/thumb-up.svg" alt="like" />
					29
				</button>
				<button class="post-action">
					<img src="/icons/thumb-down.svg" alt="dislike" />
				</button>
			</div>
		</div>
		<div class="reply-message-container">
			<div class="post-author">
				<div class="post-author-info">
					<img src="/images/dummy.png" alt="post-author" class="author-image" />
					<div class="post-author-text">
						<p class="post-name">A person</p>
						<p class="post-username">@someone</p>
					</div>
				</div>
			</div>
			<a href={"#"} class="reply-message">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci
				culpa ipsam!
			</a>
			<div class="post-actions">
				<button class="post-action">
					<img src="/icons/comment.svg" alt="comments" />
					12
				</button>
				<button class="post-action">
					<img src="/icons/thumb-up.svg" alt="like" />
					42
				</button>
				<button class="post-action">
					<img src="/icons/thumb-down.svg" alt="dislike" />
				</button>
			</div>
		</div>
	</div>
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

	h3 {
		font-weight: 600;
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
		font-family: "Poppins", sans-serif;
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

		img {
			height: 2.5rem;
			width: 2.5rem;
			border-radius: 50%;
		}

		.post-author-text {
			margin-left: 10px;
		}

		.post-name {
			margin-bottom: 0;
			font-weight: 500;
		}

		.post-username {
			margin-top: 0;
			font-size: 0.9rem;
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
		}
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
