import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface PropertyImageCarouselProps {
  images: string[];
}

export default function PropertyImageCarousel({ images }: PropertyImageCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  return (
    <div className="w-full">
      {/* Main carousel */}
      <Swiper
        style={{ height: "500px" }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="rounded-lg overflow-hidden shadow-sm shadow-gray-200 dark:shadow-gray-700"
        loop={true}
        onSwiper={setMainSwiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Property image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mt-4"
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onClick={(swiper, event) => {
          const clickedIndex = swiper.clickedIndex;
          if (mainSwiper && clickedIndex !== undefined) {
            mainSwiper.slideTo(clickedIndex);
          }
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img 
              src={src} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-24 object-cover cursor-pointer rounded-md hover:opacity-80 transition-opacity"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 