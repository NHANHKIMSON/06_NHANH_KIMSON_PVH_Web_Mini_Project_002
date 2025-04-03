"use server";
import { auth } from "../auth";

export async function createNewWorkSpaceService({ workSpaceName }) {
  const session = await auth();
  const token = session.payload.token;
  const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`, {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      workspaceName: workSpaceName,
    }),
  });
  return res;
}
