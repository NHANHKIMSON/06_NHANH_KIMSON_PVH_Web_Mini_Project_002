import { auth } from "../auth";

export async function getTaskByWorkSpaceId(id) {
  const session = await auth();
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

export async function addNewTask({ title }, { detail }, { tag }, { id }) {
  console.log();
  const session = await auth();
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/workspace/${id}`,
    {
      method: "POST",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      body: JSON.stringify({
        taskTitle: title,
        taskDetails: detail,
        tag: tag,
        endDate: new Date().toISOString(),
      }),
    }
  );
}

export async function updateNewTask(
  { title },
  { detail },
  { tag },
  { id },
  { idTask }
) {
  const session = await auth();
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/workspace/${id}`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      body: JSON.stringify({
        taskTitle: title,
        taskDetails: detail,
        tag: tag,
        endDate: new Date().toISOString(),
      }),
    }
  );
}
