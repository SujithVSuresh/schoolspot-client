// components/NotFound.tsx
import { Search } from "lucide-react";

const NotFound = ({ message = "No data found." }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
      <Search className="w-10 h-10 mb-3 text-gray-400" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default NotFound;
