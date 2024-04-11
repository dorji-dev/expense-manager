import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className='flex items-center h-20 px-4'>
      <div className='ml-auto flex space-x-4 items-center'>
        <Skeleton className='h-6 w-[100px]' />
        <Skeleton className='h-6 w-[100px]' />
        <Skeleton className='h-6 w-[100px]' />
      </div>
    </div>
  );
};

export default Loader;
