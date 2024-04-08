import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
	if (cookies.get("token")) {
		redirect(302, "/home");
	} else {
		redirect(302, "/login");
	}
};
