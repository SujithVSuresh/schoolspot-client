import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { classValidationSchema } from '../../validation/formValidation';

const AddClass = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(classValidationSchema),
    });



    const onSubmit = (data: {className: string, section: string, teacher: string}) => {
      console.log(data)
    }

  return (

        <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10 w-full">
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-4/12 mt-6 p-6 rounded-lg border border-gray-400"
          >

<h1 className="text-xl font-medium text-gray-800 text-center">Add Class</h1>

            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Class
              </label>
              <input
                {...register("className")}
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none"
              />
              {errors.className && <p className="text-red-500 text-xs mt-1">{errors.className.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Section
              </label>
              <input
                {...register("section")}
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none"
              />
              {errors.section && <p className="text-red-500 text-xs mt-1">{errors.section.message}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Class teacher
              </label>
              <input
                {...register("teacher")}
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none"
              />
              {errors.teacher && <p className="text-red-500 text-xs mt-1">{errors.teacher.message}</p>}
            </div>

            
            
            
            <div className="flex justify-end space-x-3">
              <button type='button' className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
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

  )
}

export default AddClass
