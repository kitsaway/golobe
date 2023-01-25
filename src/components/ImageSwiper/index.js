import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  {
    id: "cole-keister",
    src: "https://ik.imagekit.io/xe8oxb5c5l/Golobe/cole-keister.jpg",
    alt: "palms",
  },
  {
    id: "kelsey-curtis",
    src: "https://ik.imagekit.io/xe8oxb5c5l/Golobe/kelsey-curtis.jpg",
    alt: "tropical view",
  },
  {
    id: "alevision",
    src: "https://ik.imagekit.io/xe8oxb5c5l/Golobe/alevision.jpg",
    alt: "nature",
  },
];
const ImageSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        type: "bullets",
        bulletActiveClass: "bullet-active",
      }}
      autoplay={{ delay: 2000 }}
      speed={1000}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={image.src}
            className="swiper-img"
            width={600}
            height={800}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
