"use server";
import { revalidateTag } from "next/cache";
import { createNewWorkSpaceService } from "../service/create-new-work-space-service";

export default async function createNewWorkSpaceAction(formData) {
    const workSpaceName = formData.get("name");
    await createNewWorkSpaceService({workSpaceName});
    revalidateTag("workspace");
}

