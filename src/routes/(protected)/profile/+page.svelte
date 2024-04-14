<script>
	import { onMount } from "svelte";
	// import { enhance } from "$app/forms";
	import PageLoading from "$lib/components/PageLoading.svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let data;
	export let form;

	$: if (form?.success) {
		fetchPosts();
	}

	let loading = true;
	let profile = {};
	let date = null;

	const fetchProfile = async () => {
		const response = await fetch(
			`https://forum-co-backend.onrender.com/auth/get-profile`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${data.token}`,
				},
			},
		);
		profile = await response.json();
		// console.log(profile);
		date = new Date(profile.date_joined);
		loading = false;
	};

	onMount(() => {
		fetchProfile();
	});
</script>

{#if loading}
	<main>
		<PageLoading />
	</main>
{:else}
	<main>
		<!-- <h1>Profile</h1> -->
		<img src="/images/dummy.png" alt="profile" class="profile-img" />
		<div class="names">
			<h2>{profile.first_name} {profile.last_name}</h2>
		</div>
		<div class="profile-container">
			<div class="more-info">
				<div>
					<p class="info-header">Username</p>
					<p class="info-content">@{profile.username}</p>
				</div>
				<div>
					<p class="info-header">Email</p>
					<p class="info-content">{profile.email}</p>
				</div>

				<div>
					<p class="info-header">Date joined</p>
					<p class="info-content">{date.toDateString()}</p>
				</div>
			</div>
		</div>
	</main>
{/if}

<style lang="scss">
	h1 {
		font-weight: 600;
		color: #502eed;
		margin-bottom: 0;
	}

	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
		display: grid;
		/* place-content: center; */
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
		grid-template-columns: 1fr;
		/* place-content: center; */

		p {
			text-align: center;
			/* min-width: 100px; */
			&.info-header {
				color: #656464;
				font-size: 0.9rem;
				font-weight: 600;

				margin-bottom: 0;
			}
		}
	}

	@media only screen and (max-width: 960px) {
		main {
			border-radius: 0;
			margin: 0 -10px -10px -30px;
			padding-right: 1px;
			padding-left: -1px;
		}

		h1 {
			margin-top: -5px;
		}
	}

	@media only screen and (max-width: 450px) {
		.more-info {
			grid-template-columns: 1fr;
		}
	}
</style>
