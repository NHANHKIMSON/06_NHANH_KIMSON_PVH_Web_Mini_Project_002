"use server"

import { createNewWorkSpaceService } from "../service/create-new-work-space-service";

export default async function createNewWorkSpaceAction(formData) {
    const workSpaceName = formData.get("name");
    const res = await createNewWorkSpaceService( {workSpaceName });
    console.log(res);
    return res;
}