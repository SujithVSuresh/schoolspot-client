import { Loader2 } from "lucide-react"; 

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-64 w-full">
      <Loader2 className="w-6 h-6 text-gray-600 animate-spin" />
    </div>
  );
};

export default Spinner;
