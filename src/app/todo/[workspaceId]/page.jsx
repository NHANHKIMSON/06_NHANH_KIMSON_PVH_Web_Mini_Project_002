"use server";
import { Star } from "iconsax-react";
import { getWorkSpaceById } from "../../../../service/create-new-work-space-service";
import CardComponent from "@/components/card";
import {
  getTaskById,
  getTaskByWorkSpaceId,
} from "../../../../service/task-service";
export default async function Home({ params }) {
  const { workspaceId } = await params;
  const data = await getWorkSpaceById(workspaceId);
  const allTaskByWorkspaceId = await getTaskByWorkSpaceId(workspaceId);
  return (
    <>
      <div className="px-12 py-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{data?.payload?.workspaceName}</h2>
          <Star size={24} color="black" />
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {allTaskByWorkspaceId?.payload?.map((items) => {
            return <CardComponent key={items.taskId} {...items} />;
          })}
        </div>
      </div>
    </>
  );
}
