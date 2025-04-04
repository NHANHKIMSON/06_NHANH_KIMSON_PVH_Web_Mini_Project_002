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
import createNewTaskAction from "../../../../../action/task-action";

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
          <form action={createNewTaskAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input name="title" id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input name="detail" id="username" className="col-span-3" />
              </div>
              <select name="tag" required>
                <option value="DESIGN">Choose Option</option>
                <option value="DESIGN">DESIGN</option>
                <option value="HOMEWORK">HOMEWORK</option>
                <option value="ASSIGNMENT">ASSIGNMENT</option>
                <option value="DEPLOYMENT">DEPLOYMENT</option>
                <option value="GIT">GIT</option>
                <option value="DATABASE">DATABASE</option>
                <option value="MINI_PROJECT">MINI_PROJECT</option>
                <option value="DOCUMENTATION">DOCUMENTATION</option>
                <option value="FEATURE">FEATURE</option>
              </select>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
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
