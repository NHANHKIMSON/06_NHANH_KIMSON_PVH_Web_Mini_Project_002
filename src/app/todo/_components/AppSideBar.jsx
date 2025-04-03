"use server";
import { AddSquare, LoginCurve, More } from "iconsax-react";
import { Star } from "lucide-react";
import CreateNewWorkSpace from "./CreateNewWorkSpaceComponent";
import WorkSpace from "./sidebar_card/work-space";
import { getWorkSpace } from "../../../../service/get-all-work-space";
import FavoriteWorkSpace from "./sidebar_card/favorite-work-space";

const AppSideBar = async () => {
  const workSpace = await getWorkSpace();
  const workSpaceData = workSpace.payload;
  return (
    <>
      <ul className="space-y-2 font-medium mt-6">
        <div className="w-full h-50 overflow-y-scroll">
          <div className="px-4 border border-gray-200/20">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-500 text-2xl font-bold">Work Space</h3>
              <CreateNewWorkSpace />
            </div>
            {/* CardSidebar */}
            {workSpaceData.map((items) => (
              <WorkSpace key={items.workspaceId} {...items} />
            ))}
          </div>
        </div>
        {/* Favorite */}
        <div className="w-full mt-6 h-50 overflow-y-scroll">
          <div className="px-4">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-500 text-2xl font-bold">Favorite</h3>
              <Star size="32" color="#94A3B8" />
            </div>
            {/* CardSidebar */}
            {workSpaceData.map((items) =>
              items.isFavorite ? (
                <FavoriteWorkSpace key={items.workspaceId} {...items} />
              ) : null
            )}
          </div>
        </div>

        {/* nav items */}
        <li className="mt-8">
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <LoginCurve size="32" color="#009990" />
            <span className="flex-1 ms-3 whitespace-nowrap text-[#009990] font-bold text-xl">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};
export default AppSideBar;
