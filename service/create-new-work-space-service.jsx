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
    next: { tags: ["workspace"] },
  });
  return res;
}

export async function getWorkSpaceById(id) {
  const session = await auth();
  const token = session.payload.token;
  try{
      const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${id}`, {
          method: "GET",
          headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data;
    }catch(e){
        console.log(e);
    }
}
