<script>
	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";
	export let setMessageModal, getMessage, sendLoading, receiver;

	let text = "";
</script>

<div class="modal">
	<h2>Message {receiver}</h2>

	<button class="close-btn" on:click={setMessageModal}>
		<img src="/icons/close.svg" alt="close" />
	</button>

	<form on:submit|preventDefault={() => getMessage(text)}>
		<label for="name">Message</label>
		<br />
		<input
			type="text"
			name="text"
			id="text"
			class="form-name"
			bind:value={text}
		/>
		<br />
		<Button>
			{#if sendLoading}
				<Loading />
			{:else}
				Send
			{/if}
		</Button>
	</form>
</div>

<style lang="scss">
	.modal {
		position: absolute;
		padding: 10px;
		margin: auto;
		inset: 0;
		border-radius: 20px;
		width: 500px;
		height: 200px;
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

	h2 {
		margin-top: 0px;
		color: #502eed;
	}

	label {
		font-size: 1rem;
	}

	input {
		background-color: #ededed;
		border: none;
		border-radius: 10px;
		padding: 10px;
		width: calc(100% - 20px);
		margin-bottom: 20px;
		font-size: 1rem;
	}

	@media only screen and (max-width: 650px) {
		.modal {
			width: 300px;
		}
	}
</style>
