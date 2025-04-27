import { useEffect, useState } from "react";
import { getAllClasses } from "../../api/api";
import { ClassType } from "../../types/types";
import { createAnnouncement } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementSchema } from "../../validation/formValidation";

const AddAnnouncement = () => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState<ClassType[] | []>([]);

  const [sendTo, setSendTo] = useState<string[]>([])
  const [sendToError, setSendToError] = useState<string>("")

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(announcementSchema),
    });

  useEffect(() => {
    const getClasses = async () => {
      const response = await getAllClasses();

      if (response.success) {
        setClasses(response.data.data);
      }
    };

    getClasses();
  }, []);

const updateClassFilter = (value: string) => {
  if(sendTo.includes(value)){
    const arr = [...sendTo]
    arr.splice(arr.indexOf(value), 1);
    setSendTo(arr);
  }else{
    setSendTo([...sendTo, value])
  }
}


const onSubmit = async (data: { title: string; content: string }) => {
  console.log(data, sendTo, sendToError)
  if(sendTo.length == 0){
    setSendToError("Choose atleast one class")
    return
  }
  setSendToError("")

  const response = await createAnnouncement({title: data.title, content: data.content, sendTo})

  if(response.success){
    navigate('/dashboard/announcement')
  }
};

  return (
    <div className="pt-10 px-6 flex justify-center w-full">
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-5/12 mt-6 p-8 rounded-lg border border-gray-400"
      >
        <h1 className="text-xl font-medium text-gray-800 text-center">
          Create Announcement
        </h1>
        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Title
          </label>
          <input
            {...register("title")}
            
            type="text"
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
                       {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
          </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Content
          </label>
          <textarea 
          {...register("content")}
          className="w-full p-2 border border-gray-400 rounded outline-none"></textarea>

          {errors.content && (
                <span className="text-red-500 text-sm">
                  {errors.content.message}
                </span>
              )}
        </div>

        <div className="flex mt-5 flex-col gap-2">
        <label className="hover: cursor-pointer"> Sent to</label>
        <div className="flex">
          {classes.map((value, index) => (
          <div key={index} className="bg-gray-100 px-2 rounded-lg mr-2">
          <input className="hover: cursor-pointer" checked={sendTo.includes(value._id as string) ? true : false} onClick={() => updateClassFilter(value._id as string)} type="checkbox" id={value._id} value={value._id}/>
          <label className="hover: cursor-pointer" htmlFor={value._id}> {value.name} {value.section}</label>
          </div>
          ))}
          </div>
       
                <span className="text-red-500 text-sm">
                  {sendToError}
                </span>
      


        </div>

        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnouncement;
