import Image from "next/image";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import CardComponent from "@/components/card";
import createNewWorkSpaceAction from "../../../action/create-new-work-space";

export default async function Home() {

  return (
    <>
      <div className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
}
