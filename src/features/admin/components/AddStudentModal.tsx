// import { X } from 'lucide-react';



interface ModalProps {
  onClose: () => void;
}

const AddStudentModal = ({ onClose }: ModalProps) => {

  return (
    <div className="bg-white h-full w-4/12 fixed z-40 right-0">
    <div className="flex items-center w-full h-16">
      <h1 className="text-xl font-medium text-gray-800 pl-8">Add Student</h1>

    </div>

</div>
  )
}

export default AddStudentModal
