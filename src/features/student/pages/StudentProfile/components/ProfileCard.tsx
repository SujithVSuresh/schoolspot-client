import React from "react";

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const ProfileCard = ({ label, value, icon: Icon }: InfoCardProps) => {
  return (
    <div className="flex items-center gap-3 py-4 rounded-lg overflow-hidden">
      <div className="bg-secondary p-3.5 rounded-full">
        <Icon className="w-5 h-5 text-primaryText" />
      </div>
      <div>
        <p className="text-sm text-secondaryText">{label}</p>
        <p className="text-primaryText">{value}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
