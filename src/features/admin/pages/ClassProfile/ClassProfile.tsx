import { useEffect, useState } from "react";
import { getClassById, deleteClass, getStudentsByClassId } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { dateFormatter } from "../../../../app/utils/formatter";
import ClassInfoCard from "./components/ClassInfoCard";
import { Outlet, useLocation } from "react-router-dom";
import {
  GraduationCap,
  User,
  Calendar,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";
import SectionButton from "./components/SectionButton";
import { useDispatch } from "react-redux";
import { setStudentList } from "../../redux/studentListAdminSlice";

const ClassProfile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id: classId } = useParams();
  const [classData, setClassData] = useState<{
    _id?: string;
    name: string;
    strength: number;
    section: string;
    teacher: string;
    attendance: {
      presentCount: number;
      absentCount: number;
      date: string;
    };
  } | null>(null);

  const urlSection = location.pathname.split("/")[5];

  useEffect(() => {
    const fetchClassProfileData = async () => {
      if (classId) {
        const response = await getClassById(classId);
        if (response.success) {
          setClassData(response.data?.data);
        }
      }
    };

    const fetchStudentsByClassId = async () => {
      const response = await getStudentsByClassId(classId as string);
      if (response.success) {
        dispatch(setStudentList(response.data));
      } else {
        console.log(response.error);
      }
    };

    fetchStudentsByClassId();

    fetchClassProfileData();
  }, [classId, dispatch]);

  const deleteClassHandler = async (classId: string) => {
    if (!classId) {
      return;
    }
    const response = await deleteClass(classId);

    if (response.success) {
      console.log(response, "this is the response... delete");
      navigate(`/dashboard/classes`);
    }
  };

  const classInfo = [
    {
      heading: "Class",
      data: `${classData?.name} ${classData?.section}`,
      icon: GraduationCap,
    },
    {
      heading: "Class Teacher",
      data: classData?.teacher as string,
      icon: User,
    },
    {
      heading: "Date",
      data: dateFormatter(classData?.attendance.date as string),
      icon: Calendar,
    },
    {
      heading: "Strength",
      data: String(classData?.strength),
      icon: Users,
    },
    {
      heading: "Present",
      data: String(classData?.attendance.presentCount),
      icon: UserCheck,
    },
    {
      heading: "Absent",
      data: String(classData?.attendance.absentCount),
      icon: UserX,
    },
  ];

  const sectionInfo = [
    {
      name: "Students",
      urlName: "students",
    },
    {
      name: "Subjects",
      urlName: "subjects",
    },
    {
      name: "Attendance",
      urlName: "attendance",
    },
    {
      name: "Exams",
      urlName: "exams",
    },
    {
      name: "Invoices",
      urlName: "invoices",
    },
    {
      name: "Timetable",
      urlName: "timetable",
    },
  ];

  return (
    <div className="pt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {classInfo.map((info) => (
          <ClassInfoCard
            heading={info.heading}
            data={info.data}
            Icon={info.icon}
          />
        ))}
      </div>

      <div className="mt-10">
        <div className="flex border-b pb-5 border-gray-200 justify-between">
         <div className="flex">
          {sectionInfo.map((section) => (
            <SectionButton
              classId={classId as string}
              section={section}
              urlSection={urlSection}
            />
          ))}
          </div>

            {/* <SectionButton
              classId={classId as string}
              section={section}
              urlSection={urlSection}
            />

                        <SectionButton
              classId={classId as string}
              section={section}
              urlSection={urlSection}
            /> */}
            <div className="flex">
          <div
            onClick={() => navigate(`/dashboard/classes/${classId}/update`)}
            className={`bg-gray-200 text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Edit Class
          </div>

          <div
            onClick={() => deleteClassHandler(classId as string)}
            className={`bg-gray-200 text-gray-800 px-4 py-3 rounded-full hover: cursor-pointer mr-3 text-sm`}
          >
            Delete Class
          </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <Outlet context={{ classId: classId }} />
      </div>
    </div>
  );
};

export default ClassProfile;
