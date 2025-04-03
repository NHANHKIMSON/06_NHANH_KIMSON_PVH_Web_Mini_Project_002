import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";

// taskId: '2b897425-5bc8-4e36-931a-4e12b078dc54',
//       taskTitle: 'Home work4',
//       taskDetails: 'Hello this is my homework...',
//       tag: 'DESIGN',
//       status: 'NOT_STARTED',
//       startDate: '2025-04-03T16:35:47.495+00:00',
//       endDate: '2026-04-03T16:31:05.269+00:00'

export default function CardComponent(items) {
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
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{items.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {items.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {items.tag}
          </p>

          {/* status */}
          <div className={`rounded-full w-8 h-8 bg-watermelon-red ${randomColor}`}></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5 z-50">
        <Select>
          <SelectTrigger
            className={`w-36 truncate border-watermelon-red text-watermelon-red`}
          >
            <SelectValue placeholder={"NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} />
          {new Date(items.endDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
