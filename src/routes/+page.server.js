import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	const token = cookies.get("token");

	if (token) {
		const userData = { token };
		return { user: userData && redirect(302, "/home") };
	} else {
		redirect(302, "/login");
	}
};
