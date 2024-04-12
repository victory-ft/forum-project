export const actions = {
	comment: async ({ request, cookies, params }) => {
		const token = cookies.get("token");

		const { id } = params;

		const form = await request.formData();
		const text = form.get("text");

		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/create-post-comment/${id}/`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ text }),
			},
		);
		const res = response.json();
		console.log(res, "tf");
		if (response.ok) {
			console.log(res, "oksy");
		}
	},

	like: async ({ cookies, params }) => {
		const token = cookies.get("token");
		const { id } = params;

		await fetch(
			`https://forum-co-backend.onrender.com/socials/like-post/${id}/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	},

	dislike: async ({ cookies, params }) => {
		const token = cookies.get("token");
		const { id } = params;

		await fetch(
			`https://forum-co-backend.onrender.com/socials/dislike-post/${id}/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	},

	removeDislike: async ({ cookies, params }) => {
		const token = cookies.get("token");
		const { id } = params;

		await fetch(
			`https://forum-co-backend.onrender.com/socials/remove-dislike-post/${id}/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	},

	removeLike: async ({ cookies, params }) => {
		const token = cookies.get("token");
		const { id } = params;

		await fetch(
			`https://forum-co-backend.onrender.com/socials/remove-like-post/${id}/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	},
};
