import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCards from "./Articles";
import {
  articleObj1,
  articleObj2,
  articleObj3,
  articleObj4,
  articleObj5,
} from "./Data";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../styles/Articles.css";

import {
  ArticlesContainer,
  ArticlesH1,
  ArticlesWrapper,
} from "./ArticlesElements";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Articles = () => {
  return (
    <ArticlesContainer id="articles">
      <ArticlesH1>Articles</ArticlesH1>
      <ArticlesWrapper>
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
          pagination={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <ArticleCards {...articleObj1} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCards {...articleObj2} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCards {...articleObj3} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCards {...articleObj4} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCards {...articleObj5} />
          </SwiperSlide>
        </Swiper>
      </ArticlesWrapper>
    </ArticlesContainer>
  );
};

export default Articles;
