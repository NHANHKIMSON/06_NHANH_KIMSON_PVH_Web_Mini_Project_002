import { auth } from "../auth";

export async function getTaskByWorkSpaceId(id) {
    const session = await auth();
    console.log(session);
    const res = await fetch(`http://96.9.81.187:8080/api/v1/tasks/workspace/${id}`, {
        method: "GET",
        headers: {
            "accept": "*/*",
            "Authorization": `Bearer ${session?.payload?.token}`
        }
    });
    const data = await res.json();
    return data;
}