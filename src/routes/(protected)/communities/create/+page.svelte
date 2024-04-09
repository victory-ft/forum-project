<script>
	import Button from "$lib/components/Button.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import { enhance } from "$app/forms";

	let createLoad = false;
</script>

<div class="create">
	<div class="auth-container">
		<h2>Create Community</h2>

		<form
			method="POST"
			class="auth-form"
			use:enhance={() => {
				createLoad = true;
				return async ({ update }) => {
					createLoad = false;
					update();
				};
			}}
		>
			<div class="form-row">
				<div class="input-data">
					<input type="text" name="name" id="name" required />
					<div class="underline"></div>
					<label for="password">Name</label>
				</div>
			</div>
			<div class="form-row">
				<div class="input-data">
					<input
						type="description"
						name="description"
						id="description"
						class=""
						required
					/>
					<div class="underline"></div>
					<label for="confirm-password">Description</label>
				</div>
			</div>
			<div class="btn-div">
				<Button>
					{#if createLoad}
						<Loading />
					{:else}
						Create
					{/if}
				</Button>
			</div>
		</form>
	</div>
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
				min-width: 600px;
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
	.form-error {
		font-size: 1rem;
		color: #cc0000;
		margin-left: 10px;
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
