import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

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
  const calculateCourseRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return (totalRating / course.courseRatings.length).toFixed(1);
  };

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => {
      time += lecture.lectureDuration;
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateLectureDuration = (lecture) => {
    return humanizeDuration(lecture.lectureDuration * 60 * 1000, {
      units: ["h", "m"],
    });
  };

  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) => {
      return chapter.chapterContent.map((lecture) => {
        time += lecture.lectureDuration;
      });
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateNumberOfLectures = (course) => {
    let numberOfLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        numberOfLectures += chapter.chapterContent.length;
      }
    });
    return numberOfLectures;
  };
  useEffect(() => {
    fetchAllCourses();
  }, []); // Empty dependency array means this runs once on mount

  const value = {
    calculateLectureDuration,
    calculateNumberOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    isEducator,
    setIsEducator,
    calculateCourseRating,
    navigate,
    currency: currency,
    allCourses,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
