"use client";
import Image from "next/image";
import { Star, StarFill } from "atd-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CarousalVariant2 = ({ reviews = [] }) => {
  return (
    <Swiper
      breakpoints={{
        769: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      centeredSlides={false}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="flex items-center justify-center w-full h-full"
    >
      <div className="mt-[40px] grid grid-cols-1 gap-y-[20px]  md:grid-cols-2 md:gap-[20px]  xl:grid-cols-3">
        {reviews?.map(
          ({ author_name, profile_photo_url, rating, text }, idx) => (
            <SwiperSlide
              className="border-[1px] border-[#D9D9D9] rounded-[10px] p-[24px] "
              key={idx}
            >
              <div className="flex flex-row items-stretch justify-between mb-[12px]">
                <Image
                  src={profile_photo_url}
                  alt={author_name}
                  width={400}
                  height={400}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < rating ? (
                      <StarFill key={i} className="w-6 h-6 text-gray-300" />
                    ) : (
                      <Star key={i} className="w-6 h-6 text-gray-300" />
                    ),
                  )}
                </div>
              </div>
              <div className="text-title-base">{author_name}</div>
              <div className="text-text-base mt-[12px]">{text}</div>
            </SwiperSlide>
          ),
        )}
      </div>
    </Swiper>
  );
};

export default CarousalVariant2;
