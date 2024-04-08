<span class="loader"></span>

<style>
	.loader {
		width: 64px;
		height: 64px;
		border: 5px solid #fff;
		border-bottom-color: #502eed;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
		inset: 0;
		position: absolute;
		margin: auto;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
