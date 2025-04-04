"use client";
import { AddSquare } from "iconsax-react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import TaskForm from "./TaskForm";


export default function CreateNewTask() {

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <AddSquare size="32" color="#94A3B8" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Create New New task</DialogTitle>
          </DialogHeader>
          <TaskForm/>
        </DialogContent>
      </Dialog>
    </>
  );
}

// {
//     "taskTitle": "string",
//     "taskDetails": "string",
//     "tag": "DESIGN",
//     "endDate": "2025-04-04T04:00:33.911Z"
//   }
