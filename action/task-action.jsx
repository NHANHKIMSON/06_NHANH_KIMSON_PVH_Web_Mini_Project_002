"use server";
export default async function createNewTaskAction(formData) {
    const title = formData.get("title");
    const details = formData.get("detail");
    const tag = formData.get("tag");
    console.log(title, details, tag);


    
}





// {
//     "taskTitle": "string",
//     "taskDetails": "string",
//     "tag": "DESIGN",
//     "endDate": "2025-04-04T04:00:33.911Z"
//   }