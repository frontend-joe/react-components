import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Carousel3.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";

const slides = [
  {
    name: "India",
    src: image1,
  },
  {
    name: "Japan",
    src: image2,
  },
  {
    name: "Scotland",
    src: image3,
  },
  {
    name: "Norway",
    src: image4,
  },
  {
    name: "France",
    src: image5,
  },
];

export const Carousel3 = () => {
  return (
    <section className="page carousel-3-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={3}
        speed={600}
        effect="coverflow"
        loop
        loopAdditionalSlides
        mousewheel
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.name}
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            >
              <div>
                <h2>{slide.name}</h2>
                <a>explore</a>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};
