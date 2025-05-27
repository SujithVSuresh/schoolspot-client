import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import TimetableList from '../../../../../app/components/Timetable/TimetableList';
import { DaySchedule } from '../../../../../app/types/Timetable';
import { fetchTimetableByClass } from '../../../api/api';

const TimeTable = ({classId}: {classId: string}) => {

 
  
    const [timetable, setTimetable] = useState<DaySchedule[]>([]);
  
    console.log("Class ID:", timetable, "this is the timetable");
  
    useEffect(() => {
      const fetchTimetable = async () => {
        if (!classId) return;
  
        const response = await fetchTimetableByClass(classId);
  
        if (response.success) {
          setTimetable(response.data.timetable);
        }
      };
  
      fetchTimetable();
    }, [classId]);

  return (
<div className="bg-white rounded-lg overflow-hidden border">
      <div className="px-6 py-5 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Class Timetable</h2>
          <div className="text-xs bg-indigo-50 text-indigo-600 py-1 px-2 rounded-full font-medium flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Today's Schedule
          </div>
        </div>
      </div>
    <div className='p-5'>
   <TimetableList timetable={timetable}/>
   </div>
    </div>
  )
}

export default TimeTable
