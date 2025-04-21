import { Calendar } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { assignmentValidationSchema } from "../../validation/formValidation";
import { useOutletContext } from "react-router-dom";
import { AddAssignmentType } from "../../types/types";
import { addAssignment } from "../../api/api";
import { useNavigate } from "react-router-dom";

const AddAssignment = () => {
  const navigate = useNavigate()
  const {subjectId, classId}: {subjectId: string, classId: string} = useOutletContext()

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Assignments", href: `/teacher/classes/asdf/assignments` },
    { label: "Add", href: `/teacher/classes/asfd/assignments/add` },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(assignmentValidationSchema),
  });

  const onSubmit = async (data: AddAssignmentType) => {
    const response = await addAssignment({...data, subjectId, classId})

    if(response.success){
      navigate(`/teacher/classes/${classId}/assignments`)
    }
  }

  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex justify-center">
        <form
        method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 w-5/12 border p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Add Assignment
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
              {...register("title")}
                type="text"
                id="title"
                name="title"
                placeholder="Enter assignment title"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
                       {errors.title && (
            <span className="text-red-500 text-sm">
              {errors.title.message}
            </span>
          )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
              {...register("description")}
                id="description"
                name="description"
                rows={4}
                placeholder="Enter assignment description"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200"
              />
                       {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
            </div>

            <div>
              <label
                htmlFor="submissionType"
                className="block text-sm font-medium text-gray-700"
              >
                Submission Type
              </label>
              <div className="mt-1 relative">
                <select
                  {...register("submissionType")}
                  id="submissionType"
                  name="submissionType"
                  className="block w-full px-4 py-3 bg-white rounded-lg border border-gray-200  text-gray-900 pr-10"
                >
                  <option value="file">File Upload</option>
                  <option value="link">Link Submission</option>
                  <option value="text">Text Submission</option>
                </select>
              </div>
              {errors.submissionType && (
            <span className="text-red-500 text-sm">
              {errors.submissionType.message}
            </span>
          )}
            </div>

            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>
              <div className="mt-1 relative">
                <input
                {...register("dueDate")}
                  type="datetime-local"
                  id="dueDate"
                  name="dueDate"
                  className="block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              {errors.dueDate && (
            <span className="text-red-500 text-sm">
              {errors.dueDate.message}
            </span>
          )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;
