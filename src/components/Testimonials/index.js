import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiping from "./Swiping";
import {
  testimonialObj1,
  testimonialObj2,
  testimonialObj3,
  testimonialObj4,
  testimonialObj5,
  testimonialObj6,
  testimonialObj7,
  testimonialObj8,
  testimonialObj9,
  testimonialObj10,
  testimonialObj11,
  testimonialObj12,
  testimonialObj13,
  testimonialObj14,
  testimonialObj15,
} from "./Data";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../styles/Swiping.css";

import {
  TestimonialsContainer,
  TestimonialsH1,
  TestimonialsWrapper,
} from "./TestimonialsElements";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsH1>Testimonials</TestimonialsH1>
      <TestimonialsWrapper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Swiping {...testimonialObj1} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj2} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj3} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj4} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj5} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj6} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj7} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj8} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj9} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj10} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj11} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj12} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj13} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj14} />
          </SwiperSlide>
          <SwiperSlide>
            <Swiping {...testimonialObj15} />
          </SwiperSlide>
        </Swiper>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
