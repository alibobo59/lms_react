import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateCourseRating } = useContext(AppContext);
  // console.log(course, "day la course");
  // console.log(course.coursePrice, "day la coursePrice");
  // console.log(course.discount, "day la courseDiscount");

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">Tam Minh</p>
        {/*rating */}
        <div className="flex items-center gap-x-1">
          <p>{calculateCourseRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => {
              return (
                <img
                  className="w-3.5 h-3.5"
                  key={i}
                  src={
                    i < Math.floor(calculateCourseRating(course))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                />
              );
            })}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
