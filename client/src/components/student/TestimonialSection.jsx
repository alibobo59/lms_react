import React from "react";
import { dummyTestimonial } from "../../assets/assets";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    //container div
    <div className="pb-14 px-8 md:px-20">
      <h2 className="text-3xl font-medium text-gray-800">Testimonial</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto molestias ipsam quo,
        <br /> quasi exercitationem libero amet repellendus corrupti ea? Quod
        sequi iste optio totam repellendus aut natus illum autem?
      </p>
      {/*cards section container div*/}
      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => {
          return <TestimonialCard testimonial={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
