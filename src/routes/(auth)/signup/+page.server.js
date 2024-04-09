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
		const first_name = form.get("first_name");
		const last_name = form.get("last_name");
		const username = form.get("username");
		const email = form.get("email");
		const password = form.get("password");
		const confirm_password = form.get("confirm_password");
		const age = 100;

		const response = await fetch(
			"https://forum-co-backend.onrender.com/auth/register/",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					first_name,
					last_name,
					email,
					password,
					confirm_password,
					username,
					age,
				}),
			},
		);
		if (response.ok) {
			redirect(302, "/login");
		}
		let resJSON = await response.json();
		if (resJSON.non_field_errors) {
			return fail(400, { field_error: [...resJSON.non_field_errors] });
		}
		if (!response.ok) {
			return fail(400, { error: resJSON });
		}
	},
};
