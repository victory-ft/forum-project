<br />
<div class="communities">
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Software Development</p>
			<p class="community-members">11.2k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Football</p>
			<p class="community-members">20.1k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Gaming</p>
			<p class="community-members">9.0k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Software Development</p>
			<p class="community-members">11.2k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Football</p>
			<p class="community-members">20.1k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Gaming</p>
			<p class="community-members">9.0k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Football</p>
			<p class="community-members">20.1k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Gaming</p>
			<p class="community-members">9.0k members</p>
		</div>
	</a>
	<a href={"#"} class="community">
		<img src="/images/com.jpg" alt="community" />
		<div>
			<p class="community-name">Software Development</p>
			<p class="community-members">11.2k members</p>
		</div>
	</a>
</div>

<style lang="scss">
	/* h1 {
		font-weight: 600;
		color: #502eed;
	}

	main {
		background-color: #fff;
		margin: 10px;
		border-radius: 30px;
		overflow-y: auto;
		padding: 20px;
	} */

	.communities {
		display: grid;
		grid-template-columns: repeat(auto-fill, 10rem);
		place-content: center;
		justify-content: space-between;
		grid-gap: 10px;
	}

	.community {
		/* margin-bottom: 0;
		padding-bottom: 0; */
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: #000;
		position: relative;

		img {
			border-radius: 50%;
			width: 50px;
			height: 50px;
		}

		.community-name {
			margin-bottom: 0;
			padding: 0;
			font-weight: 500;
			font-size: 0.9rem;
		}

		.community-members {
			margin: 0 0px 5px;
			padding: 0;
			font-size: 0.85rem;
			color: #656464;
		}
	}
</style>
