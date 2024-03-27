<script>
	import Conversation from "$lib/components/Conversation.svelte";
</script>

<main>
	<div class="people">
		<button class="person">
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Victory</p>
		</button>
		<button class="person">
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Ayodele</p>
		</button>
		<button class="person">
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Sarah</p>
		</button>
	</div>
	<div class="conversation">
		<Conversation />
	</div>
</main>

<style lang="scss">
	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
		padding-right: 0;
		display: grid;
		grid-template-columns: 1fr 2fr;
	}

	.people {
		border-right: 1px solid #dddddd;
		overflow-y: auto;

		.person {
			display: flex;
			justify-content: start;
			align-items: center;
			background-color: #fff;
			border: none;
			width: calc(100% - 20px);
			margin: 5px 0;

			&:hover {
				background-color: #f7f7f7;
			}
		}
	}

	.name {
		margin-left: 10px;
		font-size: 1.1rem;
	}

	.profile-picture {
		width: 3rem;
		border-radius: 50%;
	}

	.conversation {
		position: relative;
		overflow-x: auto;
	}
</style>
