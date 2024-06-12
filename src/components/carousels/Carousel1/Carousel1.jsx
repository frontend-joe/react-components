import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";

const slides = [
  {
    title: "1 Series",
    image: image1,
  },
  {
    title: "2 Series",
    image: image2,
  },
  {
    title: "3 Series",
    image: image3,
  },
  {
    title: "4 Series",
    image: image4,
  },
  {
    title: "5 Series",
    image: image5,
  },
];

export const Carousel1 = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <a>explore</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
