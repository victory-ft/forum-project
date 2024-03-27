<script>
	import { page } from "$app/stores";
	export let isMenuOpen, closeMenu, setCreateModal;
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
			<a href={"#"} on:click={() => closeMenu()}>
				<img src="/icons/chat.svg" alt="chat" />
				Messages
			</a>
		</li>
		<li class="route {$page.url.pathname === '/notifications' && 'active'}">
			<a href={"#"} on:click={() => closeMenu()}>
				<img src="/icons/notification.svg" alt="notifications" />
				Notifications
			</a>
		</li>
		<li class="route {$page.url.pathname === '/communities' && 'active'}">
			<a href="/communities" on:click={() => closeMenu()}>
				<img src="/icons/community.svg" alt="communities" />
				Communities
			</a>
		</li>
	</ul>

	<div class="line"></div>

	<button class="btn-container" on:click={() => setCreateModal()}>
		<img src="/icons/add.svg" alt="add" />
		<p class="create-btn">Create Community</p>
	</button>

	<div href={"#"} class="profile-container">
		<a href={"#"}>
			<img src="/images/dummy.png" alt="profile-img" />
			<div class="profile-info-container">
				<p class="name">Oluwatayo</p>
				<p class="username">@oluwa_tayo</p>
			</div>
		</a>
		<button class="logout">
			Logout
			<img src="/icons/logout.svg" alt="logout" />
		</button>
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
		width: 2rem;
		height: 2rem;
		background-color: transparent;
		border: none;
		top: 10px;
		right: 10px;
		display: none;

		img {
			width: 2rem;
			height: 2rem;
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
