export const load = async ({ locals, cookies }) => {
	const token = cookies.get("token");
	locals.token = token;

	const res = locals;
	return res;
};
