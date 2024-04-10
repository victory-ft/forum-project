<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Loading from "$lib/components/Loading.svelte";

	export let isMenuOpen, closeMenu;

	let loading = true;
	let profile = {};

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	function logout(name) {
		document.cookie =
			name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		goto("/login");
	}

	const fetchProfile = async () => {
		const auth = getCookie("token");
		const response = await fetch(
			`https://forum-co-backend.onrender.com/auth/get-profile`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${auth}`,
				},
			},
		);
		profile = await response.json();
		loading = false;
	};

	onMount(() => {
		fetchProfile();
	});
</script>

<nav class:active={isMenuOpen}>
	<button class="close-btn" on:click={() => closeMenu()}>
		<img src="/icons/close.svg" alt="close" />
	</button>
	<img src="/images/logotext.png" alt="LOGO" class="logo" />
	<ul class="routes">
		<li class="route {$page.url.pathname === '/home' && 'active'}">
			<a href="/home" on:click={() => closeMenu()}>
				<img src="/icons/home.svg" alt="home" />
				Home
			</a>
		</li>
		<li class="route {$page.url.pathname === '/messages' && 'active'}">
			<a href="/messages" on:click={() => closeMenu()}>
				<img src="/icons/chat.svg" alt="chat" />
				Messages
			</a>
		</li>
		<!-- <li class="route {$page.url.pathname === '/notifications' && 'active'}">
			<a href={"#"} on:click={() => closeMenu()}>
				<img src="/icons/notification.svg" alt="notifications" />
				Notifications
			</a>
		</li> -->
		<li class="route {$page.url.pathname === '/communities' && 'active'}">
			<a href="/communities" on:click={() => closeMenu()}>
				<img src="/icons/community.svg" alt="communities" />
				Communities
			</a>
		</li>
	</ul>

	<div class="line"></div>

	<button
		class="btn-container"
		on:click={() => {
			goto("/communities/create");
			closeMenu();
		}}
	>
		<img src="/icons/add.svg" alt="add" />
		<p class="create-btn">Create Community</p>
	</button>

	<div href={"#"} class="profile-container">
		{#if loading}
			<Loading />
		{:else}
			<a href="/profile" on:click={closeMenu}>
				<img src="/images/dummy.png" alt="profile-img" />
				<div class="profile-info-container">
					<p class="name">{profile.first_name} {profile.last_name}</p>
					<p class="username">@{profile.username}</p>
				</div>
			</a>
		{/if}

		<button
			class="logout"
			on:click={() => {
				logout("token");
				closeMenu();
			}}
		>
			Logout
			<img src="/icons/logout.svg" alt="logout" />
		</button>
		<!-- <button class="logout login">
			Login
			<img src="/icons/login.svg" alt="logout" />
		</button> -->
	</div>
</nav>

<style lang="scss">
	/* * {
		outline: 2px solid green;
	} */

	nav {
		padding: 10px;
		position: relative;
		overflow-y: auto;
	}

	.close-btn {
		position: absolute;
		width: 2.5rem;
		height: 2.5rem;
		background-color: transparent;
		border: none;
		top: 10px;
		right: 10px;
		display: none;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.logo {
		padding-top: 10px;
		width: 100%;
	}

	.routes {
		padding-left: 0;
		margin-left: 0;
		list-style: none;
		width: 100%;
	}

	.route {
		border-radius: 10px;
		padding: 10px;
		margin: 10px 0;

		img {
			width: 1.5rem;
			margin-right: 10px;
			color: #502eed;
		}
		a {
			display: flex;
			justify-content: start;
			align-items: center;
			text-decoration: none;
			color: #333;
			font-weight: 500;
		}

		&.active {
			background-color: #512eed36;

			a {
				color: #502eed;
			}
		}
	}

	.line {
		background-color: #bbbbbb;
		height: 1px;
		width: 100%;
	}

	.btn-container {
		display: flex;
		align-items: center;
		justify-content: start;
		margin-top: 25px;
		padding: 0 20px;
		border-radius: 25px;
		background-color: #512eed36;
		border: none;
		color: #000;

		img {
			width: 1.5rem;
		}
	}

	.create-btn {
		font-size: 1rem;
		color: #000;
	}

	.profile-container {
		margin-top: auto;
		position: absolute;
		bottom: 10px;

		a {
			color: #000;
			text-decoration: none;
			display: flex;
			justify-content: start;
			align-items: center;

			img {
				width: 2.2rem;
				margin-right: 20px;
				border-radius: 50%;
			}

			.name {
				margin-right: 5px;
				font-weight: 500;
				margin-bottom: 0;
			}

			.username {
				margin-top: 0;
				font-size: 0.9rem;
				color: #656464;
			}
		}
		.logout {
			margin-top: 10px;
			display: flex;
			align-items: center;
			justify-content: start;
			padding: 7px 25px;
			font-size: 0.9rem;
			border: none;
			background-color: #d6d6d6;
			border-radius: 10px;
			color: #cc0000;

			&.login {
				color: #000;
			}

			img {
				width: 1.4rem;
				margin-left: 5px;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		nav {
			position: absolute;
			left: 0;
			width: 300px;
			height: 97dvh;
			z-index: 2;
			background-color: #f7f7f7;
			display: none;
		}

		.close-btn {
			display: block;
		}

		nav.active {
			display: block;
		}
	}
</style>
