import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const CoursesList = () => {
  const { navigate } = useContext(AppContext);
  return (
    <React.Fragment>
      <div>
        <div>
          <h1>Course List</h1>
          <p className="text-gray-500">
            <span
              onClick={() => {
                navigate("/");
              }}
              className="text-blue-600 cursor-pointer">
              Home
            </span>
            / CourseList
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesList;
