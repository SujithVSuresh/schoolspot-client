import BoxSkelton from "../../../../../app/components/Loader/BoxSkelton";

const ProfileSkeleton = () => {
  return (
    <>
      {/* Profile Photo Skeleton */}
      <div className="w-full p-10 flex justify-center">
        <div className="w-52 h-56 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Grid of Skeleton Cards */}
      <BoxSkelton count={10}/>
    </>
  );
};

export default ProfileSkeleton;
