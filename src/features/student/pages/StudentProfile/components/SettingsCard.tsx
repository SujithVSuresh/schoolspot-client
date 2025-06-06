import React from "react";

const SettingsCard = ({heading, info, icon: Icon, action, linkText}: {
    heading: string,
    info: string,
    icon: React.ElementType,
    action?: () => void,
    linkText?: string
}) => {

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-secondary rounded-full mr-3">
          <Icon className="h-5 w-5 text-primaryText" />
        </div>
        <h2 className="text-lg font-medium text-primaryText">{heading}</h2>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        {info}
      </p>
{action && (
      <div className="mt-4">
        <span
          className="text-primaryText underline hover:cursor-pointer"
          onClick={() => action()}
        >
          {linkText}
        </span>
      </div>
)}

    </div>
  );
};

export default SettingsCard;
