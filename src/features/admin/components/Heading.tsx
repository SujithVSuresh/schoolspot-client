import React from "react"

const Heading = ({children, headingValue}: {children: React.ReactNode, headingValue: string}) => {
  return (
<div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
  <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
    {headingValue}
  </h1>
  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
    {children}
  </div>
</div>
  )
}

export default Heading
