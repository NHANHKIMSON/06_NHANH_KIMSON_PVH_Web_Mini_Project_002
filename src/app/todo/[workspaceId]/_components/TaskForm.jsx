
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import createNewTaskAction from "../../../../../action/task-action";

export default function TaskForm(params) {
  const { id } = params;
  console.log("id -> :"  ,id);
  return (
    <>
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
        <input type="hidden" name = "id" value={id} />
      </form>
    </>
  );
}
