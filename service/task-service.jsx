import { auth } from "../auth";

export async function getTaskByWorkSpaceId(id) {
  const session = await auth();
  console.log(session);
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/tasks/workspace/${id}`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
    }
  );
  const data = await res.json();
  return data;
}

export async function addNewTask(params) {
  const session = await auth();
  console.log(session);
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/workspace/${params.id}`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      body: JSON.stringify({
        taskTitle: params.title,
        taskDetails: params.detail,
        tag: "DESIddGN",
        endDate: "2026-04-04T04:00:33.911Z",
      }),
    }
  );
}
