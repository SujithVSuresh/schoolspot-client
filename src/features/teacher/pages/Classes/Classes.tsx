import ClassCard from "./components/ClassCard"

const classes = [
  { id: 1, className: "1", section: "A", strength: 30 },
  { id: 2, className: "1", section: "B", strength: 28 },
  { id: 3, className: "2", section: "A", strength: 32 },
  { id: 4, className: "2", section: "B", strength: 29 },
  { id: 5, className: "3", section: "A", strength: 31 },
  { id: 6, className: "3", section: "B", strength: 30 },
  { id: 7, className: "4", section: "A", strength: 35 },
  { id: 8, className: "4", section: "B", strength: 33 },
  { id: 9, className: "5", section: "A", strength: 34 },
  { id: 10, className: "5", section: "B", strength: 32 },
];




const TeacherClasses = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {classes.map((classData) => (
        <ClassCard classData={classData}/>
      ))}
      </div>

  )
}

export default TeacherClasses
