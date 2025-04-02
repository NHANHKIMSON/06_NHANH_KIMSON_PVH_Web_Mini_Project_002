"use server";

import { registerService } from "../service/register-service";

export async function registerAction(formData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await registerService({username, email, password});
    return res;
}