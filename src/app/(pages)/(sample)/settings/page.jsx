"use client"
import CardSwitch from "@/components/classic/cardSwitch";
import { Separator } from "@/components/(shadcn components)/ui/separator";
import {
     Tabs,
     TabsContent,
     TabsList,
     TabsTrigger,
} from "@/components/(shadcn components)/ui/tabs"
import { Button } from "@/components/(shadcn components)/ui/button"
// icons
import { MdOutlineSave } from "react-icons/md";

function SettingsPage() {
     return (
          <div className="w-full pt-3 px-3 dark:bg-zinc-900 h-[94vh] bg-zinc-100">
               <div className="flex items-center gap-2 mt-2 justify-between">
                    <h1 className="text-2xl dark:text-white">Finances</h1>
                    <Button variant="Save" className="bg-black text-white text-xs flex items-center gap-1"><MdOutlineSave className="text-xl"/> Save</Button>
               </div>
               {/*  */}
               <Tabs defaultValue="All" className="w-full mt-4" >
                    <TabsList className="grid w-fit grid-cols-5 dark:text-white mb-5">
                         <TabsTrigger value="All" className="flex gap-2"> All</TabsTrigger>
                         <TabsTrigger value="Submitted" className="flex gap-2"> Submitted</TabsTrigger>
                         <TabsTrigger value="Comments" className="flex gap-2"> Comments</TabsTrigger>
                    </TabsList>

                    <TabsContent value="All">
                         <div className="flex flex-col">
                              <h2 className="font-semibold text-lg">All settings</h2>
                              <p className="font-normal text-sm">We may still send you important notifications your outside of you All settings</p>
                              <Separator className="w-full h-[1px] bg-zinc-300/70 my-4" />
                              {/* switchs */}
                              <CardSwitch
                                   titlecard="More Activity About You"
                                   textCard="These are notifications for post on your profile, likes and other reactions to your post."
                                   labelSwitch="Active comment"
                              />
                              <CardSwitch
                                   titlecard="Comments"
                                   textCard="These are notifications for comments on your posts and replies"
                                   labelSwitch="Active comment"
                              />
                              <CardSwitch
                                   titlecard="Security emails"
                                   textCard="Receive emails about your account security. "
                                   labelSwitch="Active"
                              />
                              <CardSwitch
                                   titlecard="Tags"
                                   textCard="These are notifications to remind you of upadte you might have missed."
                                   labelSwitch="Push"
                              />
                         </div>
                    </TabsContent>
                    <TabsContent value="Submitted">
                         <div className="flex flex-col">
                              <h2 className="font-semibold text-lg">Notification Submit</h2>
                              <p className="font-normal text-sm">Active private email notifications </p>
                              <Separator className="w-full h-[1px] bg-zinc-300/70 my-4" />
                              {/* switchs */}
                              <CardSwitch
                                   titlecard="Email reseved"
                                   textCard="These are notifications for comments on your posts and replies"
                                   labelSwitch="Active comment"
                              />

                         </div>
                    </TabsContent>

                    <TabsContent value="Comments">
                         <div className="flex flex-col">
                              <h2 className="font-semibold text-lg">Notification settings</h2>
                              <p className="font-normal text-sm">We may still send you important notifications your outside of you notification settings</p>
                              <Separator className="w-full h-[1px] bg-zinc-300/70 my-4" />
                              {/* switchs */}
                              <CardSwitch
                                   titlecard="Comments"
                                   textCard="These are notifications for comments on your posts and replies"
                                   labelSwitch="Active comment"
                              />
                              <CardSwitch
                                   titlecard="Security emails"
                                   textCard="Receive emails about your account security. "
                                   labelSwitch="Active"
                              />
                              <CardSwitch
                                   titlecard="Tags"
                                   textCard="These are notifications to remind you of upadte you might have missed."
                                   labelSwitch="Push"
                              />
                         </div>
                    </TabsContent>
               </Tabs>

          </div>
     );
}

export default SettingsPage;