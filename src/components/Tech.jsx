import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

function Tech() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "technologies");
