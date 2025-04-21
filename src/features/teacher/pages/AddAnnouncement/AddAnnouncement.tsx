import { useState } from "react";
import { addAnnouncement } from "../../api/api";

const AddAnnouncement = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <form
          //   onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 w-5/12 sm:p-8 border"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Add Announcement
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
                type="text"
                id="title"
                name="title"
                placeholder="Enter announcement title"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
              />
              {/* {errors.title && (
            <span className="text-red-500 text-sm">
              {errors.title.message}
            </span>
          )} */}
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <textarea
                //   {...register("description")}
                id="content"
                name="content"
                rows={4}
                placeholder="Enter announcement content"
                className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200"
              />
              {/* {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )} */}
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
                  Changing Password...
                </span>
              ) : (
                "Change Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnnouncement;
