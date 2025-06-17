const BoxSkelton = ({ count }: { count: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 py-4 px-4 rounded-lg overflow-hidden border animate-pulse"
        >
          <div className="bg-gray-200 p-3.5 rounded-full">
            <div className="w-5 h-5 rounded-full bg-gray-300" />
          </div>
          <div className="space-y-1">
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxSkelton;
