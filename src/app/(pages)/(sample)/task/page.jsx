

import CardTask from "@/components/classic/cardTask";


function TaskPage() {
     return (
          <div className="w-full pt-3 px-3 dark:bg-zinc-900 h-[94vh]">
               <div className="flex items-center gap-2 mt-2">
                    <h1 className="text-2xl dark:text-white">Task</h1>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">4 Tasks - 2 Completed</span>
               </div>
               {/* high Priority */}
               <div className="mt-5">
                    <h3 className="font-semibold text-xl dark:text-white">High Priority <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">2 Tasks - 1 Completed</span></h3>
                    <CardTask
                         textHead="Accept terms and conditions"
                         textContent="You agree to our Terms of Service and Privacy Policy."
                         icon="https://avatars.githubusercontent.com/u/45484907?s=80&v=4"
                         statusColor="bg-red-300 text-red-700"
                         statusText="Alert"
                    />
                    <CardTask
                         textHead="Develop prototypes for new feature flag"
                         textContent="Halvorson Group"
                         icon="https://themesbrand.com/velzon/html/master/assets/images/logo-sm.png"
                         statusColor="bg-emerald-300 text-emerald-700"
                         statusText="Completed"
                    />
               </div>
               {/* Medium Priority */}
               <div className="mt-5">
                    <h3 className="font-semibold text-xl dark:text-white">Medium Priority <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">1 Tasks - 0 Completed</span></h3>
                    <CardTask
                         textHead="Build drag and drop file uploader for user facing product"
                         textContent="Mayer Inc."
                         icon="https://avatars.githubusercontent.com/u/45484907?s=80&v=4"
                         statusColor="bg-orange-300 text-orange-700"
                         statusText="Pedding"
                    />
                    
               </div>
                {/* Low Priority */}
                <div className="mt-5">
                    <h3 className="font-semibold text-xl dark:text-white">Low Priority <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">1 Tasks - 1 Completed</span></h3>
                    <CardTask
                         textHead="Complete onboarding for new project"
                         textContent="Hailvorson Group"
                         icon="https://themesbrand.com/velzon/html/master/assets/images/companies/img-5.png"
                         statusColor="bg-emerald-300 text-emerald-700"
                         statusText="Completed"
                    />
                    
               </div>
          </div>
     );
}

export default TaskPage;

