"use server";
import { ArrowRight2, Notification } from "iconsax-react";
import { getCurrentUser } from "../../../../service/login-service";
import Account from "./Account";
const AppHeader = async () => {
  const data = await getCurrentUser();
  const user = data.payload;
  return (
    <>
      <div className="w-full px-8 py-2 bg-white flex justify-between">
        <div className="flex items-center gap-3">
          <p>Workspace </p>
          <ArrowRight2 size="16" color="black" />
          <p className="text-blue-600 underline decoration-2 underline-offset-4">
            HRD Design{" "}
          </p>
        </div>
        <div>
            <Account 
            username={user?.username} 
            email={user?.email} 
            profile={user?.profile}
             />
        </div>
      </div>
    </>
  );
};

export default AppHeader;
