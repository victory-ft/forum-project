<script>
	import Conversation from "$lib/components/Conversation.svelte";

	let showConversation = false;

	function setConvoFalse() {
		showConversation = false;
	}
</script>

<main>
	<div class="people {showConversation && 'hide'}">
		<button class="person" on:click={() => (showConversation = true)}>
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Victory</p>
		</button>
		<button class="person" on:click={() => (showConversation = true)}>
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Ayodele</p>
		</button>
		<button class="person" on:click={() => (showConversation = true)}>
			<img src="/images/dummy.png" alt="profile" class="profile-picture" />
			<p class="name">Sarah</p>
		</button>
	</div>
	<div class="conversation {!showConversation && 'hide'}">
		<Conversation {setConvoFalse} />
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
		color: #000;
	}

	.profile-picture {
		width: 3rem;
		border-radius: 50%;
	}

	.conversation {
		position: relative;
		overflow-x: auto;
		height: 100%;
	}

	@media only screen and (max-width: 1200px) {
		main {
			margin: 5px;
			padding-top: 0px;
		}
	}

	@media only screen and (max-width: 670px) {
		main {
			display: block;
		}
		.conversation.hide {
			display: none;
		}

		.people.hide {
			display: none;
		}
	}
</style>
