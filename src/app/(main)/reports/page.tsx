import Budgets from "../../../components/budgets";
import SpendingReport from "../../../components/spending-report";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <main>
      <Tabs defaultValue='account' className='w-full'>
        <TabsList>
          <TabsTrigger value='report' className='w-[10vw]'>
            Reports
          </TabsTrigger>
          <TabsTrigger value='budget' className='w-[10vw]'>
            Budgets
          </TabsTrigger>
        </TabsList>
        <TabsContent value='report'>
          <SpendingReport />
        </TabsContent>
        <TabsContent value='budget'>
          <Budgets />
        </TabsContent>
      </Tabs>
    </main>
  );
}
