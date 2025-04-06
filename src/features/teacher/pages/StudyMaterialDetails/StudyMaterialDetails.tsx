import { User, Calendar, Pencil } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

const StudyMaterialsDetails = () => {
  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Students", href: `/teacher/classes/dafdf/students` },
  ];
  return (
    <div className="p-5">
      <Breadcrumb items={breadcrumbItems}/>

    <div className="flex">
      <div className="overflow-hidden w-8/12 pr-5">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-medium text-gray-700">
              Photosynthesis: How Plants Make Their Own Food
            </h2>
          </div>

          <div>
            <h5 className="text-gray-900">
              Photosynthesis is one of the most important biological processes
              on Earth. It is the process by which green plants, algae, and some
              bacteria produce their own food using sunlight, carbon dioxide,
              and water. This process not only provides food for plants but also
              plays a crucial role in maintaining the balance of oxygen and
              carbon dioxide in the atmosphere. Without photosynthesis, life on
              Earth would not exist as we know it. How Photosynthesis Works
              Photosynthesis takes place in the leaves of plants, where tiny
              structures called chloroplasts contain a green pigment called
              chlorophyll. This pigment captures sunlight, which is the primary
              energy source for the process. The plant absorbs water (H₂O) from
              the soil through its roots and takes in carbon dioxide (CO₂) from
              the air through small openings in its leaves called stomata. When
              sunlight strikes the chlorophyll, it triggers a chemical reaction
              that combines water and carbon dioxide to produce glucose (a type
              of sugar) and oxygen (O₂). The glucose is used by the plant as
              food for growth, while the oxygen is released into the air as a
              byproduct. The process of photosynthesis can be written in the
              form of an equation: Sunlight + 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ This
              means that six molecules of carbon dioxide and six molecules of
              water, using sunlight, produce one molecule of glucose and six
              molecules of oxygen. Importance of Photosynthesis Photosynthesis
              is vital for life on Earth for several reasons: Production of
              Oxygen: The oxygen released during photosynthesis is what humans
              and animals need to breathe. Without it, life would not survive.
              Food for Plants and Other Organisms: Plants use the glucose they
              produce to grow and develop. Herbivores depend on plants for food,
              and in turn, carnivores depend on herbivores, making
              photosynthesis the foundation of the food chain. Regulation of
              Carbon Dioxide Levels: Plants absorb carbon dioxide from the
              atmosphere, reducing the amount of this greenhouse gas and helping
              to combat global warming. Source of Energy: The energy stored in
              plants through photosynthesis eventually supports all life forms,
              from small insects to large mammals, through the food chain.
            </h5>
          </div>

          <div className="flex mt-5 gap-5 justify-between">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-green-500" />
              <span className="text-sm">Created: April 21, 2025</span>
            </div>
            <div className="flex items-center text-gray-600">
              <button
                // onClick={handleEdit}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
              >
                <Pencil size={16} />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l sticky flex-1 p-5 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-700">Views</h2>

        <div className="rounded-xl border-2 w-full mt-5">
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Student Name</p>
                  <p className="font-medium">Emily Thompson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudyMaterialsDetails;
