"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import "@/app/globals.css";

export default function HomePage() {
  return (
    <>
      <section className="z-10 w-full h-[400px]">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="min-h-[440px]">
          <SwiperSlide className="max-h-[400px]">
            <Image
              src={"/banner/RedDeadRedemption2-banner.png"}
              width={1920}
              height={400}
              alt="Red Dead Redemption 2 - Banner"
              className="w-full max-h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[400px]">
            <Image
              src={"/banner/RedDeadRedemption2-banner.png"}
              width={1920}
              height={400}
              alt="Red Dead Redemption 2 - Banner"
              className="w-full max-h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[400px]">
            <Image
              src={"/banner/RedDeadRedemption2-banner.png"}
              width={1920}
              height={400}
              alt="Red Dead Redemption 2 - Banner"
              className="w-full max-h-[400px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
