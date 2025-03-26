
import { Loader } from "lucide-react";

export const InfiniteLoader = () => {
  return (
    <div className="flex items-center justify-center py-4 w-full">
      <div className="animate-spin text-primary/80">
        <Loader className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

