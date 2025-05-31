import Breadcrumb from "../../components/Breadcrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOutletContext, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { chapterValidationSchema } from "../../validation/formValidation";
import { createChapter, updateChapter } from "../../api/api";
import { findChapter } from "../../api/api";
import { useEffect } from "react";

const UpdateChapter = () => {
  const navigate = useNavigate();
  const {chapterId} = useParams()

  const { subjectId, classId }: { subjectId: string; classId: string } = useOutletContext();

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Chapters", href: `/teacher/classes/${classId}/chapters` },
    { label: "Add", href: `/teacher/classes/${classId}/chapters/add` },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(chapterValidationSchema),
  });


  useEffect(() => {
    const fetchChapterHandler = async (chapterId: string) => {
        const response = await findChapter(chapterId)

        console.log(response, "chapter by id")

        if(response.success){
            const data = response.data
            setValue("title", data.title);
            setValue("description", data.description);
            setValue("chapterNumber", data.number)
        }
    }

    fetchChapterHandler(chapterId as string)

  }, [chapterId])

  const onSubmit = async (data: {
    title: string,
    chapterNumber: number,
    description: string
  }) => {
    const response = await updateChapter(chapterId as string, {
        title: data.title,
        number: data.chapterNumber,
        description: data.description
    })

    if(response.success){
        navigate(`/teacher/classes/${classId}/chapters`)
    }
  };

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
            Update Chapter
          </h2>
          <div className="space-y-6">
                        <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Number
              </label>
              <input
                {...register("chapterNumber")}
                type="number"
                id="chapterNumber"
                name="chapterNumber"
                placeholder="Enter chapter number"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
              {errors.chapterNumber && (
                <span className="text-red-500 text-sm">
                  {errors.chapterNumber.message}
                </span>
              )}
            </div>

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

export default UpdateChapter;
