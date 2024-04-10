<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Line from "./Line.svelte";

	let communityLoading = true;
	let membersLoading = true;
	let communities = [];

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

	const fetchCommunity = async () => {
		const auth = getCookie("token");
		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/get-communities/`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${auth}`,
				},
			},
		);
		communities = await response.json();
		communities = communities.slice(0, 3);
		communityLoading = false;
	};

	onMount(() => {
		fetchCommunity();
	});
</script>

<nav>
	<!-- <div class="search-container">
		<img src="/icons/search.svg" alt="search" />
		<input type="search" class="search" placeholder="Search..." />
	</div> -->

	<div class="popular-communities">
		{#if communityLoading}
			<Loading />
		{:else}
			<h3>Popular Communities</h3>
			<Line />
			{#each communities as community}
				<a href={"#"} class="community">
					<p class="community-name">{community.name}</p>
					<p class="community-members">
						{community.member_count}
						{community.member_count == 1 ? "member" : "members"}
					</p>
				</a>
			{/each}
		{/if}
	</div>
	<div class="popular-members">
		<h3>Popular Members</h3>
		<Line />
		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@oluwa_tayo</p>
				<p class="community-members">11.2k followers</p>
			</a>
			<!-- <button class="follow">Follow</button> -->
		</div>

		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@ayodele</p>
				<p class="community-members">20.1k followers</p>
			</a>
			<!-- <button class="follow">Follow</button> -->
		</div>
		<div class="member">
			<a href={"#"} class="member-link">
				<p class="community-name">@somebody</p>
				<p class="community-members">9.0k followers</p>
			</a>
			<!-- <button class="follow">Follow</button> -->
		</div>
	</div>
</nav>

<style lang="scss">
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

		img {
			width: 1.5rem;
			margin-left: 3px;
			margin-right: 3px;
		}
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

		&:hover {
			background-color: #f7f7f7;
		}
	}

	.follow {
		padding: 5px 10px;
		border-radius: 10px;
		border: none;
		font-size: 0.8rem;
		background-color: #512eed36;
		cursor: pointer;
	}

	@media only screen and (max-width: 960px) {
		nav {
			display: none;
		}
	}
</style>
