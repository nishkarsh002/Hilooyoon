"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const Skiper49 = () => {
  const images = [
    { src: "/imgs/tshirts.jpeg", alt: "Premium Tee Collection" },
    { src: "/imgs/tshirts2.jpeg", alt: "Essential Tee" },
    { src: "/imgs/tshirt1.jpeg", alt: "Statement Graphic Tee" },
    { src: "/imgs/hoodies.jpeg", alt: "Oversized Fleece Hoodie" },
    { src: "/imgs/trouser.jpeg", alt: "Slim-Fit Chino Trouser" },
    { src: "/imgs/lowers.jpeg", alt: "Track Lower" },
    { src: "/imgs/set1.jpeg", alt: "Co-ord Set Classic" },
    { src: "/imgs/set2.jpeg", alt: "Co-ord Set Premium" },
    { src: "/imgs/shorts.jpeg", alt: "Utility Cargo Shorts" },
    { src: "/imgs/lower1.jpeg", alt: "Premium Jogger" },
    { src: "/imgs/tshirt2.jpeg", alt: "Branded Logo Tee" },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_003 images={images} showNavigation loop />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 480px;
    padding-bottom: 0px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 260px;
    height: 380px;
    border-radius: 12px;
    overflow: hidden;
  }

  .Carousal_003 .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }

  .Carousal_003 .swiper-button-next,
  .Carousal_003 .swiper-button-prev {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    top: 50%;
    transform: translateY(-60%);
  }

  .Carousal_003 .swiper-button-next::after,
  .Carousal_003 .swiper-button-prev::after {
    display: none;
  }

  .Carousal_003 .swiper-button-next svg,
  .Carousal_003 .swiper-button-prev svg {
    width: 20px;
    height: 20px;
    color: #111;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-0 mx-auto", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={showNavigation ? true : false}
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

/**
 * Skiper 49 Carousel_003 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
