import React from "react";

import { Link } from "react-router-dom";

import {
  TestimonialsCard,
  TestimonialsH2,
  TestimonialsP,
  TestimonialsPraise,
} from "./TestimonialsElements";

const Swiping = ({ pic_url, profile_url, name, description, praise }) => {
  return (
    <Link to={{ pathname: profile_url }} target="_blank">
      <TestimonialsCard>
        <img src={pic_url} alt={name} className="t-pic" />
        <TestimonialsH2>{name}</TestimonialsH2>
        <TestimonialsP>{description}</TestimonialsP>
        <TestimonialsPraise>"{praise}"</TestimonialsPraise>
      </TestimonialsCard>
    </Link>
  );
};

export default Swiping;
