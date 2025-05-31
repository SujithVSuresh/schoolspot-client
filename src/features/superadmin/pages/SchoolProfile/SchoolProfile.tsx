import { useState, useEffect } from "react"
import { fetchSchoolProfile } from "../../api/api"
import { useParams } from "react-router-dom"
import { SchoolProfileType } from "../../types/types"
import { AdminProfileType, SubscriptionType } from "../../../admin/types/types"
import { dateFormatter } from "../../../../app/utils/formatter"
import { School, User, CircleDollarSign } from "lucide-react"

const SchoolProfile = () => {
    const {schoolId} = useParams()

      const [schools, setSchools] = useState<{
        schoolProfile: SchoolProfileType,
        schoolAdmin: AdminProfileType,
        subscription: SubscriptionType
      } | null>(null)
    
      useEffect(() => {
        const schoolDataHandler = async (schoolId: string) => {
            const response = await fetchSchoolProfile(schoolId)
            console.log(response)
    
            if(response.data){
                setSchools(response.data)
            }
        }
    
        schoolDataHandler(schoolId as string)
      }, [schoolId])

  return (
     <div className="p-6 space-y-6">
      <div className="border p-4 rounded-xl bg-white">
        <div className="flex">
        <School className="w-6 h-6 mr-2"/>
        <h2 className="text-xl font-semibold mb-2">School Profile</h2>
        </div>
        <p><strong>Name:</strong> {schools?.schoolProfile.schoolName}</p>
        <p><strong>Phone:</strong> {schools?.schoolProfile.phoneNumber}</p>
        <p><strong>Reg No:</strong> {schools?.schoolProfile.regNumber}</p>
        <p><strong>Principal:</strong> {schools?.schoolProfile.principalName}</p>
        <p><strong>Website:</strong> <a href={schools?.schoolProfile.websiteUrl} className="text-blue-600 underline" target="_blank">{schools?.schoolProfile.websiteUrl}</a></p>
        <p><strong>Established:</strong> {schools?.schoolProfile.yearEstablished}</p>
        <p><strong>Board:</strong> {schools?.schoolProfile.board}</p>
        <p><strong>Total Students:</strong> {schools?.schoolProfile.totalStudents}</p>
        <p><strong>Total Teachers:</strong> {schools?.schoolProfile.totalTeachers}</p>
        <p><strong>Address:</strong> {schools?.schoolProfile.address.city}, {schools?.schoolProfile.address.state}, {schools?.schoolProfile.address.country} - {schools?.schoolProfile.address.postalCode}</p>
      </div>

      <div className="border p-4 rounded-xl bg-white">
         <div className="flex">
        <User className="w-6 h-6 mr-2"/>
        <h2 className="text-xl font-semibold mb-2">Admin Details</h2>
        </div>
        <p><strong>Name:</strong> {schools?.schoolAdmin.fullName}</p>
        <p><strong>Phone:</strong> {schools?.schoolAdmin.phoneNumber}</p>
        {/* <p><strong>Email:</strong> {schools?.schoolAdmin?.user.email}</p> */}
        {/* <p><strong>Status:</strong> {schools?.schoolAdmin.user.status}</p> */}
      </div>

      <div className="border p-4 rounded-xl bg-white">
         <div className="flex">
        <CircleDollarSign className="w-6 h-6 mr-2"/>
        <h2 className="text-xl font-semibold mb-2">Subscription</h2>
        </div>
        {/* <p><strong>Plan:</strong> {schools?.subscription.planId.name}</p> */}
        {/* <p><strong>Price:</strong> ₹{schools?.subscription.planId.price}</p> */}
        {/* <p><strong>Duration:</strong> {schools?.subscription.planId.durationInDays} days</p> */}
        <p><strong>Start:</strong> {dateFormatter(String(schools?.subscription.startDate))}</p>
        <p><strong>End:</strong> {dateFormatter(String(schools?.subscription.endDate))}</p>
        <p><strong>Status:</strong> <span className="text-green-600 font-semibold">{schools?.subscription.status}</span></p>
      </div>
    </div>
  )
}

export default SchoolProfile
