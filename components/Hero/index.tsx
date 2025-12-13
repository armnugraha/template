"use client";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [sliderHeader, setSliderHeader] = useState([
    {
      image: "/images/hero/hero-light.jpg",
      alt: "Hero",
    },
    {
      image: "/images/hero/studio-light.jpg",
      alt: "Studio",
    },
    {
      image: "/images/hero/studio-2-light.jpg",
      alt: "Studio 2",
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h1 className="mb-4.5 text-6xl font-medium text-black dark:text-white">
                Noora Photo
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Mengabadikan setiap momen cinta dengan penuh {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  makna
                </span>
              </h1>
              <p>
                Kami percaya setiap momen cinta adalah kisah berharga yang layak diabadikan. Dengan sentuhan profesional dan penuh rasa, kami hadir untuk mengabadikan detik-detik terindah dalam hidup Anda.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />

                {/* <!-- Slider main container --> */}
                {/* <!-- Additional required wrapper --> */}
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  // breakpoints={{
                  //   // when window width is >= 640px
                  //   0: {
                  //     slidesPerView: 1,
                  //   },
                  //   // when window width is >= 768px
                  //   768: {
                  //     slidesPerView: 2,
                  //   },
                  // }}
                >
                  {sliderHeader.map((review, i) => (
                    <SwiperSlide key={i}>
                      {/* <SingleTestimonial review={review} /> */}
                      <div className="relative aspect-700/444 w-full p-16">
                        <div className="p-16">
                          <Image
                            className="shadow-solid-l rounded-xl"
                            src={review.image}
                            alt={review.alt}
                            fill
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-xl"
                    src="/images/hero/hero-light.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-xl"
                    src="/images/hero/hero-light.jpg"
                    alt="Hero"
                    fill
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
