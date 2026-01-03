"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

type Item = {
  title: string;
  desc: string;
  image: string;
};

const items: Item[] = [
  {
    title: "Coffee Shop",
    desc: "This is my portfolio website using Next.js and React.",
    image: "/asset/image/project-image/coffee_shop.png",
  },
  {
    title: "GreenCode",
    desc: "This is my portfolio website using Next.js and React.",
    image: "/asset/image/project-image/Cover-GreenCode.png",
  },
  {
    title: "Rent Car Design",
    desc: "This is my portfolio website using Next.js and React.",
    image: "/asset/image/project-image/rent-car-design.png",
  },
  {
    title: "School Profile",
    desc: "This is my portfolio website using Next.js and React.",
    image: "/asset/image/project-image/school-profile.png",
  },
  {
    title: "Class Profile Site",
    desc: "This is my portfolio website using Next.js and React.",
    image: "/asset/image/project-image/coffee_shop.png",
  },
];
export default function SeeProject() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <h1 className="text-center text-5xl font-bebas m-5">FEATURE PRORJECT</h1>
      <div
        className="w-full"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          slidesPerView="auto"
          spaceBetween={18}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {items.map((it, idx) => (
            <SwiperSlide key={idx} className="!w-[280px] sm:!w-[320px]">
              <Card item={it} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      {/* Image */}
      <div className="relative h-[210px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          loading="lazy"
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 280px, 320px"
          priority={false}
        />

        {/* Gradient gelap bawah biar teks kebaca */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
      </div>

      {/* Text area */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>

        {/* Teks detail muncul saat hover */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-300 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {item.desc}
        </p>

        <button className="mt-4 inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-blue-500">
          <a href="/project">Go To Project</a>
        </button>
      </div>

      {/* Border glow halus saat hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-zinc-700/80" />
    </div>
  );
}
