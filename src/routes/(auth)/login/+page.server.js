import { redirect, fail } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	const token = cookies.get("token");

	if (token) {
		redirect(302, "/home");
	}
};

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get("email");
		const password = form.get("password");

		if (!email) {
			return fail(400, { emailMissing: true });
		}
		if (!password) {
			return fail(400, { passwordMissing: true });
		}
		const response = await fetch(
			"https://forum-co-backend.onrender.com/auth/log-in/",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			},
		);
		let resJSON = await response.json();
		// console.log(resJSON);

		if (resJSON.non_field_errors) {
			return fail(400, { error: resJSON.non_field_errors });
		}

		if (response.ok) {
			cookies.set("token", resJSON.access_token, {
				path: "/",
				httpOnly: false,
			});

			redirect(302, "/home");
		}
	},
};
