import React from "react";
import { useNavigate } from "react-router-dom";

type CustomButtonProps = {
  icon: React.ElementType;
  label: string;
  navlink: string;
};

const AddButton = ({ icon: Icon, label, navlink }: CustomButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(navlink)}
      className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto"
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );
};

export default AddButton;
