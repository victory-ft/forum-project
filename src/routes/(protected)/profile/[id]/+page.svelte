<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	// import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import SendMessage from "$lib/components/SendMessage.svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let data;
	export let form;

	$: if (form?.success) {
		fetchPosts();
	}

	const { id } = $page.params;

	let loading = true;
	let profile = {};
	let date = null;

	const fetchProfile = async () => {
		const response = await fetch(
			`https://forum-co-backend.onrender.com/auth/get-profile/${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);
		profile = await response.json();
		console.log(profile);
		date = new Date(profile.date_joined);
		loading = false;
	};

	let isSendMessageOpen = false;
	let sendLoading = false;
	let receiver = "";
	let to_pk = "";

	function setMessageModal() {
		isSendMessageOpen = !isSendMessageOpen;
	}

	function getMessage(txt) {
		sendMessage(txt);
	}

	async function sendMessage(text) {
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
				setMessageModal();
				goto("/messages");
			}
		} catch (error) {
			console.log(error);
		} finally {
			sendLoading = false;
		}
	}

	onMount(() => {
		fetchProfile();
	});
</script>

{#if loading}
	<main>
		<PageLoading />
	</main>
{:else}
	{#if isSendMessageOpen}
		<SendMessage {setMessageModal} {getMessage} {sendLoading} {receiver} />
	{/if}
	<main>
		<!-- <h1>Profile</h1> -->
		<img src="/images/dummy.png" alt="profile" class="profile-img" />
		<div class="names">
			<h2>{profile.first_name} {profile.last_name}</h2>
		</div>
		<div class="more-info">
			<div>
				<p class="info-header">Username</p>
				<p class="info-content">@{profile.username}</p>
			</div>
			<!-- <div>
				<p class="info-header">Email</p>
				<p class="info-content">{profile.email}</p>
			</div> -->

			<div>
				<p class="info-header">Date joined</p>
				<p class="info-content">{date.toDateString()}</p>
			</div>
		</div>
		<button
			class="post-btn"
			on:click={() => {
				to_pk = profile.pk;
				receiver = `${profile.first_name} ${profile.last_name}`;
				setMessageModal();
			}}
		>
			Send Message
		</button>
	</main>
{/if}

<style lang="scss">
	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
		display: grid;
		place-content: center;
		align-content: start;
		min-height: 90vh;
	}

	.profile-img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		margin: 0 auto;
	}

	.names h2 {
		text-align: center;
		font-weight: 600;
	}

	.more-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* place-content: center; */

		p {
			text-align: center;
			/* min-width: 100px; */
			&.info-header {
				color: #656464;
				font-size: 0.9rem;
				margin-bottom: 0;
			}
		}
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

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0 -10px -10px -30px;
			padding-right: 1px;
			padding-left: -1px;
		}
	}

	@media only screen and (max-width: 450px) {
		.more-info {
			grid-template-columns: 1fr;
		}
	}
</style>
