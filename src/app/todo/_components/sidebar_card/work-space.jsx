import { More } from "iconsax-react";
import Link from "next/link";

export default function WorkSpace(items) {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-gray-500",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <Link href={`/todo/${items.workspaceId}`}>
        <div>
          <div className="flex justify-between mt-3 px-4 py-2 rounded-sm">
            <div className="flex justify-between gap-3 items-center">
              <div className={`w-3 h-3 rounded-full ${randomColor}`}></div>
              <div>{items.workspaceName}</div>
            </div>
            <div>
              <More size="32" color="black" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
