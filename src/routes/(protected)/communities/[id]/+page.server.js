export const load = async ({ locals, cookies }) => {
	const token = cookies.get("token");
	locals.token = token;

	const res = locals;
	return res;
};

export const actions = {
	post: async ({ request, cookies, params }) => {
		const form = await request.formData();
		const text = await form.get("post");
		// console.log(text);
		// console.log(params);
		const { id } = params;
		if (!text) {
			return;
		}

		const response = await fetch(
			`https://forum-co-backend.onrender.com/socials/create-community-post/${id}/`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${cookies.get("token")}`,
				},
				body: JSON.stringify({ text }),
			},
		);
		let resJSON = await response.json();
		return { success: true };
	},
};
