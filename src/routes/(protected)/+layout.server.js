import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
	if (!cookies.get("token")) {
		redirect(302, "/login");
	}
}
