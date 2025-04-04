"use server";

import { addNewTask } from "../service/task-service";

export default async function createNewTaskAction(formData) {
  const id = formData.get("id");
  console.log("id in task Action - > ", id);
  const title = formData.get("title");
  const detail = formData.get("detail");
  const tag = formData.get("tag");
  await addNewTask({ title }, { detail }, { tag }, {id});
}
// {
//     "taskTitle": "string",
//     "taskDetails": "string",
//     "tag": "DESIGN",
//     "endDate": "2025-04-04T04:00:33.911Z"
//   }
