import { More } from "iconsax-react";

export default function WorkSpace() {
  return (
    <>
      <div>
        <div className="flex justify-between mt-3 bg-slate-200 px-4 py-2 rounded-sm">
          <div className="flex justify-between gap-3 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div>HRD Design</div>
          </div>
          <div>
            <More size="32" color="black" />
          </div>
        </div>
      </div>
    </>
  );
}
