<script>
	import { enhance } from "$app/forms";
	import { navigating } from "$app/stores";

	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import PageLoading from "$lib/components/PageLoading.svelte";

	export let form;
	// $: console.log(form);

	let loginLoad = false;
</script>

{#if $navigating}
	<PageLoading />
{:else}
	<div class="auth-container">
		<img src="/images/logotext.png" alt="logo" />
		<h1>Login</h1>
		<form
			method="POST"
			class="auth-form"
			use:enhance={() => {
				loginLoad = true;
				return async ({ update }) => {
					loginLoad = false;
					update();
				};
			}}
		>
			<div class="form-row">
				<div class="input-data">
					<input type="email" name="email" id="email" required />
					<div class="underline"></div>
					<label for="email">Email</label>
				</div>
			</div>
			<div class="form-row">
				<div class="input-data">
					<input type="password" name="password" id="password" required />
					<div class="underline"></div>
					<label for="password">Password</label>
				</div>
			</div>
			<Button>
				{#if loginLoad}
					<Loading />
				{:else}
					Login
				{/if}
			</Button>
		</form>
		{#if form?.error}
			<p class="form-error">Incorrect username or password.</p>
		{/if}
		<p class="log-link">
			Don't have an account? <a href="/signup">Sign up</a>
		</p>
	</div>
{/if}

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
		}
		/* min-width: 600px; */
		.form-row {
			display: flex;
			margin: 32px 0;

			.input-data {
				min-width: 350px;
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
			}
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

	.input-error {
		font-size: 0.8rem;
		color: #cc0000;
		margin-top: 0;
	}

	.form-error {
		font-size: 1rem;
		color: #cc0000;
		/* margin-top: 0; */
	}

	@media only screen and (max-width: 650px) {
		.auth-container {
			.form-row {
				.input-data {
					min-width: 80vw;
				}
			}
		}
	}
</style>
