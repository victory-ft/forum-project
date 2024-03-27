<script>
	export let setConvoFalse;
</script>

<div class="conversation-header">
	<button class="back-btn" on:click={() => setConvoFalse()}>
		<img src="/icons/arrow-left.svg" alt="back" />
	</button>
	<img src="/images/dummy.png" alt="profile" class="profile-picture" />
	<p class="name">Victory</p>
</div>
<div class="conversation-messages">
	<p class="message-bubble left">Hi</p>
	<p class="message-bubble right">Hey</p>
	<p class="message-bubble left">
		Lorem ipsum dolor sit, adipisicing elit. Perferendis quisquam natus cumque.
	</p>
	<p class="message-bubble right">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
		quis reprehenderit nam soluta recusandae.
	</p>
	<p class="message-bubble right">Lorem ipsum dolor sit.</p>
	<p class="message-bubble left">Hi</p>
	<p class="message-bubble right">Hey</p>
	<p class="message-bubble left">
		Lorem ipsum dolor sit, adipisicing elit. Perferendis quisquam natus cumque.
	</p>
	<p class="message-bubble right">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
		quis reprehenderit nam soluta recusandae.
	</p>
	<p class="message-bubble right">Lorem ipsum dolor sit.</p>
	<p class="message-bubble left">Hi</p>
	<p class="message-bubble right">Hey</p>
	<p class="message-bubble left">
		Lorem ipsum dolor sit, adipisicing elit. Perferendis quisquam natus cumque.
	</p>
	<p class="message-bubble right">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
		quis reprehenderit nam soluta recusandae.
	</p>
	<p class="message-bubble right">Lorem ipsum dolor sit.</p>
	<p class="message-bubble left">Hi</p>
	<p class="message-bubble right">Hey</p>
	<p class="message-bubble left">
		Lorem ipsum dolor sit, adipisicing elit. Perferendis quisquam natus cumque.
	</p>
	<p class="message-bubble right">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem at
		quis reprehenderit nam soluta recusandae.
	</p>
	<p class="message-bubble right">Lorem ipsum dolor sit.</p>
</div>

<style lang="scss">
	.back-btn {
		width: 2.5rem;
		height: 2.5rem;
		background-color: transparent;
		border: none;
		margin-right: 5px;
		display: none;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.profile-picture {
		width: 3rem;
		border-radius: 50%;
	}
	.name {
		margin-left: 10px;
		font-size: 1.1rem;
	}
	.conversation-header {
		display: flex;
		justify-content: start;
		align-items: center;
		position: sticky;
		top: 0;
		background-color: #fff;
		border-bottom: 1px solid #dddddd;
		width: calc(100% - 20px);
		padding: 0 10px;
		z-index: 1;
		border-radius: 30px 30px 0 0;
	}

	.message-bubble {
		/* min-width: 50px; */
		max-width: 270px;
		padding: 10px;
		margin: 10px;
		word-wrap: break-word;
		color: black;
		background-color: #e5e5ea;
		border-radius: 30px;
		position: relative;
	}

	.message-bubble::before,
	.message-bubble::after {
		bottom: -0.1rem;
		content: "";
		height: 1rem;
		position: absolute;
	}

	.message-bubble.right {
		/* align-self: flex-end; */
		background-color: #502eed;
		color: #fff;
		margin-left: auto;
	}

	@media only screen and (max-width: 670px) {
		.message-bubble {
			max-width: 200px;
			font-size: 0.9rem;
		}
		.back-btn {
			display: block;
		}

		.conversation-header {
			position: sticky;
		}
	}
</style>
