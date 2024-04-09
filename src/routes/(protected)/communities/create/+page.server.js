import { redirect, fail } from "@sveltejs/kit";

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const name = form.get("name");
		const description = form.get("description");
		const token = cookies.get("token");

		const response = await fetch(
			"https://forum-co-backend.onrender.com/socials/create-community/",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					name,
					description,
				}),
			},
		);
		// var resJSON = await response.json();
		// console.log(resJSON);

		if (response.ok) {
			redirect(302, "/communities");
		} else {
			return fail(400, { error: resJSON });
		}
	},
};
