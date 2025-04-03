"use client"
import { AddSquare, LoginCurve, More } from "iconsax-react";
import { Star } from "lucide-react";
import CreateNewWorkSpace from "./CreateNewWorkSpaceComponent";
import WorkSpace from "./sidebar_card/work-space";

const AppSideBar = () => {
  return (
    <>
      <ul className="space-y-2 font-medium mt-6">
        <div className="w-full">
          <div className="px-4">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-500 text-2xl font-bold">Work Space</h3>
              {/*  */}
              <CreateNewWorkSpace />
            </div>
            {/* CardSidebar */}
            <WorkSpace/>
          </div>
        </div>
        {/* Favorite */}
        <div className="w-full mt-6">
          <div className="px-4">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-500 text-2xl font-bold">Favorite</h3>
              <Star size="32" color="#94A3B8" />
            </div>
            {/* CardSidebar */}
            <div>
              <div className="flex justify-between mt-3 bg-slate-200 px-4 py-2 rounded-sm">
                <div className="flex justify-between gap-3 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div>HRD Design</div>
                </div>
                <More size="32" color="black" />
              </div>
            </div>
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
