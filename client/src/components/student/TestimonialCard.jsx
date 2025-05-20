import React from "react";
import { assets } from "../../assets/assets";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black-5 overflow-hidden">
      {/*header div*/}
      <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
        <img
          className="h-16 w-16 rounded-full"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div>
          <h1 className="text-lg font-serif text-gray-900">
            {testimonial.name}
          </h1>
          <p className="text-gray-800/80">{testimonial.role}</p>
        </div>
      </div>
      <div className="p-5 pb-7">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={
                i < Math.floor(testimonial.rating)
                  ? assets.star
                  : assets.star_blank
              }
              alt="star"
              className="h-5 w-5"
            />
          ))}
        </div>
        <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
