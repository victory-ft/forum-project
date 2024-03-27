<div class="conversation-header">
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

<style>
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
		top: 0px;
		background-color: #fff;
		border-bottom: 1px solid #dddddd;
		width: calc(100% - 20px);
		padding: 0 10px;
		z-index: 1;
	}

	.message-bubble {
		width: 270px;
		padding: 10px;
		margin: 10px;
		word-wrap: break-word;
		color: black;
		background-color: #e5e5ea;
		border-radius: 30px;
		position: relative;
	}

	.message-bubble p::before,
	.message-bubble p::after {
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
</style>
