import { useEffect, useState } from "react";
import { updateAnnouncement, fetchAnnouncementById } from "../../api/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementSchema } from "../../validation/formValidation";
import { useOutletContext } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { AnnouncementType } from "../../types/types";
import toast from "react-hot-toast";
import { announcementSocket } from "../../../../app/socket/socket";

const UpdateAnnouncement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { classId }: { classId: string } = useOutletContext();
  const announcementId = location.pathname.split("/")[5];

  const [loading, setLoading] = useState(false);
  const [announcement, setAnnouncement] = useState<AnnouncementType | null>(
    null
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(announcementSchema),
  });

  useEffect(() => {
    const updateAnnouncementHandler = async (announcementId: string) => {
      const response = await fetchAnnouncementById(announcementId);
      console.log(response, "annn respppp")
      if (response.success) {
        setAnnouncement(response.data);
        const data = response.data;
        setValue("title", data.title);
        setValue("content", data.content);
      }
    };
    updateAnnouncementHandler(announcementId);
  }, [announcementId, setValue]);



  const onSubmit = async (data: { title: string; content: string }) => {
    setLoading(true);
    const announcementData = {
      ...data,
      sendTo: [classId],
    };
    const response = await updateAnnouncement(
      announcement?._id as string,
      announcementData
    );

    if (response.success) {
        announcementSocket.emit("edit-announcement", {
            roomId: `room-${classId}`,
            message: response.data,
          });
        toast("Announcement updated successfully", {
            duration: 2000,
            position: "bottom-right",
            style: {
              backgroundColor: "#E7FEE2",
              border: "2px, solid, #16A34A",
              minWidth: "400px",
              color: "black",
            },
          });
      navigate(`/teacher/classes/${classId}/announcements`);
    }
    setLoading(false);
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl p-6 w-5/12 sm:p-8 border"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Update Announcement
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
                placeholder="Enter announcement title"
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
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <textarea
                {...register("content")}
                id="content"
                name="content"
                rows={4}
                placeholder="Enter announcement content"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200"
              />
              {errors.content && (
                <span className="text-red-500 text-sm">
                  {errors.content.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAnnouncement;
