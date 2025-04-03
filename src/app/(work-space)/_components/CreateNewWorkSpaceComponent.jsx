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
import createNewWorkSpaceAction from "../../../../action/create-new-work-space";

export default function CreateNewWorkSpace() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <AddSquare size="32" color="#94A3B8" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Create New WorkSpace</DialogTitle>
          </DialogHeader>
          <form action={createNewWorkSpaceAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  name="name"
                  id="name"
                  className="col-span-3"
                  placeholder="Please type your workspace name"
                />
              </div>
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
