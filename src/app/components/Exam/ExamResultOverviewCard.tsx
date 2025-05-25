import { Award, BarChart3, Bookmark, TrendingUp } from "lucide-react";


const ExamResultOverviewCard = () => {
      const statCards = [
    {
      title: "Average",
      value: `70%`,
      icon: <TrendingUp className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Overall Grade",
      value: "A",
      icon: <Award className="w-5 h-5" />,
      color: `bg-opacity-20`,
    },
    {
      title: "Total Marks",
      value: `400/500`,
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Subjects",
      value: 8,
      icon: <Bookmark className="w-5 h-5" />,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border p-4 flex items-center"
          >
            <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className={`text-xl font-bold `}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ExamResultOverviewCard
