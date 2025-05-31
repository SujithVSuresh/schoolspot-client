import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SchoolProfileType } from "../../types/types";
import { fetchAllSchools } from "../../api/api";

const Schools = () => {
  const navigate = useNavigate();


  const [schools, setSchools] = useState<SchoolProfileType[]>([])

  useEffect(() => {
    const schoolDataHandler = async () => {
        const response = await fetchAllSchools()
        console.log(response)

        if(response.data){
            setSchools(response.data)
        }
    }

    schoolDataHandler()
  }, [])

   
  return (
    <div className="p-5">
      <div className="w-full mb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Schools</h1>

          <div className="flex-none">
            {/* <button onClick={() => navigate('/superadmin/plans/add')} className="px-4 py-2 bg-blue-600 text-white rounded-sm shadow hover:bg-blue-700 transition duration-200">
        Add Plan
      </button> */}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">School Name</th>
              <th className="py-2 px-4 border">Phone no</th>
              <th className="py-2 px-4 border">Reg no</th>
              <th className="py-2 px-4 border">Principal</th>
              <th className="py-2 px-4 border">Board</th>
             <th className="py-2 px-4 border">Location</th> 
             <th className="py-2 px-4 border"></th> 
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={school._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{school.schoolName}</td>
                <td className="py-2 px-4 border">{school.phoneNumber}</td>
                <td className="py-2 px-4 border">{school.regNumber}</td>
                <td className="py-2 px-4 border">{school.principalName}</td>
                <td className="py-2 px-4 border">{school.board}</td>
                <td className="py-2 px-4 border">{school.address.city}, {school.address.state}</td>
                <td className="py-2 px-4 border">
                    <button className="underline text-blue-800" onClick={() => navigate(`/superadmin/schools/${school._id}`)}>View</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schools;
