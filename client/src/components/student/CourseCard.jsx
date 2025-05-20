import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);
  console.log(course, "day la course");
  console.log(course.coursePrice, "day la coursePrice");
  console.log(course.discount, "day la courseDiscount");

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>
        <div>
          <p>4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => {
              <img className="w-3.5 h-3.5" key={i} src={assets.star} alt="" />;
            })}
          </div>
          <p className="text-gray-500">22</p>
        </div>
        <p>
          {currency}
          {course.coursePrice -
            (
              (<course className="discount"></course> * course.coursePrice) /
              100
            ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
