import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  const navigate = useNavigate();

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //Function to calculate the rating ò course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return (totalRating / course.courseRatings.length).toFixed(1);
  };
  useEffect(() => {
    fetchAllCourses();
  }, []); // Empty dependency array means this runs once on mount

  const value = {
    isEducator,
    setIsEducator,
    calculateRating,
    navigate,
    currency: currency,
    allCourses,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
