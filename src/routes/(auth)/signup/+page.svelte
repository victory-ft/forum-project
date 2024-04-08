<script>
	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";

	let first_name = "";
	let last_name = "";
	let email = "";
	let password = "";
	let confirm_password = "";
	let username = "";

	let signupLoad = false;
	let isPasswordMatching = true;

	const signup = async () => {
		try {
			signupLoad = true;
			const response = await fetch(
				"https://forum-co-backend.onrender.com/auth/register/",
				{
					method: "POST",
					body: JSON.stringify({
						first_name,
						last_name,
						email,
						password,
						confirm_password,
						username,
					}),
				},
			);
			const resJSON = await response.json();
			console.log(resJSON);
		} catch (error) {
			console.error(error);
		} finally {
			signupLoad = false;
		}
	};

	const checkPasswordMatch = () => {
		if (password !== confirm_password) {
			isPasswordMatching = false;
		} else {
			isPasswordMatching = true;
		}
	};
</script>

<div class="auth-container">
	<img src="/images/logotext.png" alt="logo" />
	<h1>Sign Up</h1>

	<form on:submit|preventDefault={signup} class="auth-form">
		<div class="form-row">
			<div class="input-data">
				<input
					type="text"
					name="first-name"
					id="first-name"
					bind:value={first_name}
					required
				/>
				<div class="underline"></div>
				<label for="first-name">First Name</label>
			</div>
			<div class="input-data">
				<input
					type="text"
					name="last-name"
					id="last-name"
					bind:value={last_name}
					required
				/>
				<div class="underline"></div>
				<label for="last-name">Last Name</label>
			</div>
		</div>
		<div class="form-row">
			<div class="input-data">
				<input
					type="email"
					name="email"
					id="email"
					bind:value={email}
					required
				/>
				<div class="underline"></div>
				<label for="email">Email</label>
			</div>
		</div>
		<div class="form-row">
			<div class="input-data">
				<input
					type="password"
					name="password"
					id="password"
					bind:value={password}
					required
				/>
				<div class="underline"></div>
				<label for="password">Password</label>
			</div>
		</div>
		<div class="form-row">
			<div class="input-data">
				<input
					type="password"
					name="confirm-password"
					id="confirm-password"
					bind:value={confirm_password}
					on:keyup={checkPasswordMatch}
					required
				/>
				<div class="underline"></div>
				<label for="confirm-password">Confirm Password</label>
				{#if !isPasswordMatching}
					<p class="input-error">Passwords do not match</p>
				{/if}
			</div>
		</div>
		<div class="form-row">
			<div class="input-data">
				<input
					type="text"
					name="username"
					id="username"
					bind:value={username}
					required
				/>
				<div class="underline"></div>
				<label for="username">Choose a username</label>
			</div>
		</div>
		<div class="btn-div">
			<Button>
				{#if signupLoad}
					<Loading />
				{:else}
					Sign up
				{/if}
			</Button>
		</div>
	</form>
	<p class="log-link">
		Already an account? <a href="/login">Log in</a>
	</p>
</div>

<style lang="scss">
	h1 {
		font-weight: 600;
		color: #502eed;
		text-align: center;
	}
	.auth-container {
		display: grid;
		place-content: center;
		min-height: 90vh;

		img {
			width: 200px;
			margin-left: 20px;
		}

		.form-row {
			display: flex;
			margin: 32px 0;

			.input-data {
				width: 100%;
				height: 40px;
				margin: 0 20px;
				position: relative;

				input {
					display: block;
					width: 100%;
					height: 100%;
					border: none;
					font-size: 17px;
					border-bottom: 2px solid rgba(0, 0, 0, 0.12);
					outline: none;
					background-color: transparent;

					&:focus ~ label,
					&:valid ~ label {
						transform: translateY(-20px);
						font-size: 14px;
						color: #502eed;
					}

					&:focus ~ .underline:before,
					&:valid ~ .underline:before {
						transform: scale(1);
					}
				}

				label {
					position: absolute;
					pointer-events: none;
					bottom: 10px;
					font-size: 16px;
					transition: all 0.3s ease;
				}

				.input-error {
					font-size: 0.8rem;
					color: #cc0000;
					margin-top: 0;
				}
			}
		}

		.btn-div,
		.log-link {
			margin-left: 20px;
		}
	}

	.input-data {
		.underline {
			position: absolute;
			bottom: -4px;
			height: 2px;
			width: 100%;

			&::before {
				position: absolute;
				content: "";
				height: 2px;
				width: 100%;
				background: #502eed;
				transform: scaleX(0);
				transform-origin: center;
				transition: transform 0.3s ease;
			}
		}
	}
	.log-link {
		a {
			text-decoration: none;
			color: #502eed;
		}
	}

	@media only screen and (max-width: 650px) {
		.auth-container {
			.form-row {
				.input-data {
					min-width: 38vw;
				}
			}
		}
	}
</style>
