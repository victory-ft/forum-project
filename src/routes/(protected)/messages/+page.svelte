<script>
	import { onMount, afterUpdate } from "svelte";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import PageLoading from "$lib/components/PageLoading.svelte";
	// import Conversation from "$lib/components/Conversation.svelte";

	let showConversation = false,
		conversationHeight,
		mainC;

	function goToBottom() {
		if (showConversation) {
			mainC.scrollTo(0, conversationHeight);
		}
	}

	afterUpdate(() => {
		goToBottom();
	});

	export let data;

	let isChatOpen = false;
	let loading = true;
	let friends = [];
	let conversations = [];
	let messages = [];
	let friend = {};
	let openedConversation = false;

	let to_pk = "";
	let text = "";
	let sendLoading = false;

	const fetchMessaging = async () => {
		try {
			const response = await fetch(
				`https://forum-co-backend.onrender.com/message/get-conversations/`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			if (response.ok) {
				conversations = await response.json();
				// console.log(conversations);
				conversations.map((conversation) => {
					return (friends = [...friends, { ...conversation.friend }]);
				});
				// console.log(friends);
				loading = false;
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};

	const fetchMessagesAfterSend = async () => {
		try {
			const response = await fetch(
				`https://forum-co-backend.onrender.com/message/get-conversations/`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${data.token}`,
					},
				},
			);

			if (response.ok) {
				conversations = await response.json();
				showMessages(friend.pk);
				// console.log(conversations);
				// console.log(friends);
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};

	function showMessages(id) {
		const conversation = conversations.find((c) => c.friend.pk === id);
		messages = conversation.messages;
		friend = conversation.friend;
		to_pk = conversation.friend.pk;
		openedConversation = true;
	}

	async function sendMessage() {
		try {
			sendLoading = true;

			const response = await fetch(
				"https://forum-co-backend.onrender.com/message/send/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${data.token}`,
					},
					body: JSON.stringify({ to_pk, text }),
				},
			);
			if (response.ok) {
				text = "";
				fetchMessagesAfterSend();
			}
		} catch (error) {
			console.log(error);
		} finally {
			sendLoading = false;
		}
	}

	onMount(() => {
		fetchMessaging();
	});
</script>

<main>
	<div class="people {showConversation && 'hide'}">
		{#if loading}
			<div class="load-div">
				<Loading />
			</div>
		{:else if friends.length === 0}
			<div class="no-chat">
				<p>No friends messaged</p>
			</div>
		{:else}
			{#each friends.reverse() as friend}
				<button
					class="person"
					on:click={() => {
						showConversation = !showConversation;
						showMessages(friend.pk);
					}}
				>
					<img src="/images/dummy.png" alt="profile" class="profile-picture" />
					<p class="name">{friend.first_name} {friend.last_name}</p>
					<!-- <p class="username">@victory</p> -->
				</button>
			{/each}
		{/if}
	</div>
	<div
		class="conversation {!showConversation && 'hide'}"
		bind:offsetHeight={conversationHeight}
		bind:this={mainC}
	>
		<!-- <Conversation {setConvoFalse} {conversationHeight} {mainC} /> -->
		{#if !openedConversation}
			<div class="no-chat"><p>Click on a friend to see messages</p></div>
		{:else}
			<div class="conversation-header">
				<button
					class="back-btn"
					on:click={() => (showConversation = !showConversation)}
				>
					<img src="/icons/arrow-left.svg" alt="back" />
				</button>
				<img src="/images/dummy.png" alt="profile" class="profile-picture" />
				<p class="name">{friend.first_name} {friend.last_name}</p>
			</div>

			<div class="conversation-messages">
				<div class="conversation-texts">
					{#each messages as message}
						<p
							class={`message-bubble ${message.from_user.pk === friend.pk ? "left" : "right"}`}
						>
							{message.text}
						</p>
					{/each}
				</div>
				<form
					on:submit|preventDefault={() => {
						goToBottom();
						sendMessage();
					}}
					class="reply-container"
				>
					<input
						type="text"
						id="text"
						name="text"
						class="reply"
						placeholder="Write a message..."
						bind:value={text}
					/>
					<Button>
						{#if sendLoading}
							<Loading />
						{:else}
							<img src="/icons/send-plane.svg" alt="send" class="send-msg" />
						{/if}
					</Button>
				</form>
			</div>
		{/if}
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

	.load-div {
		display: grid;
		place-content: center;
		min-height: 95%;
	}

	.people {
		margin-top: 10px;
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

	.username {
		/* margin: 0 0px 5px; */
		/* padding: 0; */
		font-size: 0.9rem;
		color: #656464;
	}

	.profile-picture {
		width: 3rem;
		border-radius: 50%;
	}

	.conversation {
		position: relative;
		overflow-x: auto;
		height: 100%;
		transform: translateY(0);
	}

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

	.no-chat {
		display: grid;
		place-content: center;
		min-height: 100%;
	}

	.conversation-header {
		display: flex;
		justify-content: start;
		align-items: center;
		position: sticky;
		top: -2px;
		background-color: #fff;
		border-bottom: 1px solid #dddddd;
		width: calc(100% - 20px);
		padding: 10px 10px 0;
		z-index: 1;
		border-radius: 15px 15px 0 0;
	}

	.conversation-texts {
		display: flex;
		flex-direction: column;
		/* align-items: flex-end; */
		justify-content: flex-end;
		min-height: 75vh;
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

	.message-bubble.left {
		margin-right: auto;
	}

	.message-bubble.right {
		/* align-self: flex-end; */
		background-color: #502eed;
		color: #fff;
		margin-left: auto;
	}

	.reply-container {
		display: flex;
		justify-content: start;
		align-items: center;
		/* position: absolute; */
		/* transform: translateX(-50%); */
		/* height: 50px; */
		/* -webkit-transform: translateZ(0); */
		background-color: #fff;
		/* position: fixed; */
		position: sticky;
		width: calc(100% - 20px);
		bottom: -10px;
		padding: 10px;
		input {
			width: calc(100% - 20px);
			margin-right: 10px;
			padding: 7px 10px;
			font-size: 1rem;
			border-radius: 10px;
			border: none;
			background-color: #e5e5ea;
		}

		.send-msg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	@media only screen and (max-width: 1200px) {
		main {
			margin: 5px;
			padding-top: 0px;
		}
	}

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0 -10px -10px -15px;
			padding-right: 1px;
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

		.conversation-texts {
			min-height: 84vh;
		}
	}
</style>
