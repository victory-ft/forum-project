<nav>
	<div class="search-container">
		<img src="/icons/search.svg" alt="search" />
		<input type="search" class="search" placeholder="Search..." />
	</div>

	<div class="popular-communities">
		<h3>Popular Communities</h3>
		<div class="line"></div>
		<a href={"#"} class="community">
			<p class="community-name">Software Development</p>
			<p class="community-members">11.2k members</p>
		</a>

		<a href={"#"} class="community">
			<p class="community-name">Football</p>
			<p class="community-members">20.1k members</p>
		</a>
		<a href={"#"} class="community">
			<p class="community-name">Gaming</p>
			<p class="community-members">9.0k members</p>
		</a>
	</div>
	<div class="popular-members">
		<h3>Popular Members</h3>
		<div class="line"></div>
		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@oluwa_tayo</p>
				<p class="community-members">11.2k followers</p>
			</a>
			<button class="follow">Follow</button>
		</div>

		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@ayodele</p>
				<p class="community-members">20.1k followers</p>
			</a>
			<button class="follow">Follow</button>
		</div>
		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@somebody</p>
				<p class="community-members">9.0k followers</p>
			</a>
			<button class="follow">Follow</button>
		</div>
	</div>
</nav>

<style>
	nav {
		padding: 10px 5px;
	}

	.search-container {
		background-color: #fff;
		width: 100%;
		position: relative;
		display: flex;
		justify-content: start;
		align-items: center;
		border-radius: 20px;
		padding: 10px 5px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	.search-container img {
		width: 1.5rem;
		margin-left: 3px;
		margin-right: 3px;
	}

	.search {
		width: 100%;
		/* padding: 10px 20px; */
		border: none;
		/* border: 1px solid #808080; */
		outline: none;
		/* font-size: 1rem; */
	}

	h3 {
		font-weight: 600;
		color: #502eed;
		font-size: 1.1rem;
		margin-bottom: 5px;
	}

	.line {
		background-color: #bbbbbb;
		height: 1px;
		width: 100%;
	}

	.popular-communities,
	.popular-members {
		margin-top: 20px;
		border-radius: 20px;
		padding: 10px 10px 20px;
		background-color: #fff;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	.community,
	.member-link {
		/* margin-bottom: 0;
		padding-bottom: 0; */
		text-decoration: none;
		color: #000;
		position: relative;
	}

	.community::after,
	.member::after {
		position: absolute;
		bottom: -5px;
		width: 100%;
		content: "";
		height: 1px;
		background-color: #bbbbbb;
	}

	.community-name {
		margin-bottom: 0;
		padding: 0;
		font-weight: 500;
	}
	.community-members {
		margin: 0 0px 5px;
		padding: 0;
		font-size: 0.9rem;
		color: #656464;
	}

	.member {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.follow {
		padding: 5px 10px;
		border-radius: 10px;
		border: none;
		font-size: 0.8rem;
		background-color: #512eed36;
		cursor: pointer;
	}
</style>
