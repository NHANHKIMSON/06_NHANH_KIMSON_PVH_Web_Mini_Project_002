import { data } from "@/app/(work-space)/_components/AppSideBar";
import { auth } from "../auth";

export async function loginService({ email, password }) {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  return data;
}

export async function getCurrentUser() {
  const session = await auth();
  if (!session?.payload?.token) {
    throw new Error("No authentication token found");
  }

  const res = await fetch("http://96.9.81.187:8080/api/v1/user", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session?.payload?.token}`
    },
  });
  const data = await res.json();
  return data;
}
