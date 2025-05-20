import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  console.log(allCourses, "day la allCourses");
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Tam Minh Rất Đẹp Trai
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover out top-rated coureses across various categories. From coding
        to blah blah blah
      </p>
      <div>
        {allCourses.slice(0, 4).map((course, index) => {
          return <CourseCard course={course} key={index} />;
        })}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded">
        Show All courses
      </Link>
    </div>
  );
};

export default CourseSection;
