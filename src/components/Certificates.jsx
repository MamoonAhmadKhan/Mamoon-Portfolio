import React, { useState } from "react";
import { certificates } from "../constants.js"; // Import the education data

const Certificates = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section
      id="certificates"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of credentials earned through consistent effort,
          skill-building, and professional growth
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Education Entries */}
        {certificates.map((course, index) => (
          <div
            key={course.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.school}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {course.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {course.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{course.date}</p>
                </div>
              </div>

              <p className="mt-4 mb-4 text-gray-400">{course.desc}</p>
              <button
                className="w-1/2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                onClick={() => handleOpenModal(course)}
              >
                Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto">
          <div className="bg-gray-900 scrollbar-hide rounded-xl shadow-2xl w-[90%] h-11/12 max-w-3xl overflow-y-scroll relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex flex-col space-y-4 justify-center bg-gray-900 py-4 px-4">
                <img
                  src={selectedCourse.cert}
                  alt={selectedCourse.degree}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />

                <a
                className="w-1/2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                
                href={selectedCourse.cert}
                download
              >
                Download Certificate
              </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
