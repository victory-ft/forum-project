import { redirect } from "@sveltejs/kit";
import { user } from "$lib/stores/store";
import { get } from "svelte/store";

export async function load({ cookies }) {
	if (!cookies.get("token")) {
		redirect(302, "/login");
	}
	if (cookies.get("token")) {
		const token = cookies.get("token");
		return user.set(token);

		console.log(get(user));
	}
}
