import { Label } from "@/components/(shadcn components)/ui/label";
import { Switch } from "@/components/(shadcn components)/ui/switch";

function CardSwitch({titlecard,textCard,labelSwitch}) {
     return (
          <div className="flex p-3 py-5 w-full rounded-lg shadow-lg bg-white mt-4 justify-between">
               <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-font-medium">{titlecard}</h3>
                    <p className="font-normal text-xs text-zinc-700">{textCard}</p>
               </div>
               <div className="flex items-end space-x-2 flex-col-reverse gap-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode" className="text-xs text-zinc-400 font-light">{labelSwitch}</Label>
               </div>
          </div>
     );
}

export default CardSwitch;