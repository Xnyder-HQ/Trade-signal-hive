"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Investor(){
    const testimonials = [
    {
      name: "Kathryn Murphy",
      role: "Owner of Fidelity Investments",
      text:
        "From real-time stock updates to intuitive charts, this app gives me everything I need to confidently monitor and grow my investments every day.",
      stars: 4,
      image: "/avatar1.jpg",
      highlight: false,
    },
    {
      name: "Brooklyn Simmons",
      role: "Owner of Robinhood",
      text:
        "This app completely transformed my trading experience! Real-time market updates, intelligent insights, and easy-to-use tools make investing simple, fast, and enjoyable every single day.",
      stars: 5,
      image: "/avatar2.jpg",
      highlight: true,
    },
    {
      name: "Cameron Williamson",
      role: "Owner of Plantio",
      text:
        "This app completely transformed my trading experience! With real-time market updates, actionable insights, and intuitive tools, investing has never been easier or more confident.",
      stars: 4,
      image: "/avatar3.jpg",
      highlight: false,
    },
     {
      name: "Brooklyn Simmons",
      role: "Owner of Robinhood",
      text:
        "This app completely transformed my trading experience! Real-time market updates, intelligent insights, and easy-to-use tools make investing simple, fast, and enjoyable every single day.",
      stars: 5,
      image: "/avatar2.jpg",
      highlight: true,
    },
  ];
    return(
        <div>
            <h2 className="text-xs font-bold text-primary ml-50 mt-40">TRUSTED BY INVESTORS</h2>
        <div className="flex justify-between items-center mt-10">
            <div className="ml-50 font-bold">
                <h2 className="text-4xl">Here What our<br />Users Are Saying Today.</h2>
            </div>
            <div className="mr-50">
                <p>Here directly from our users how app simplifies<br />
                   investing, provide real-time insights, and boosts<br />
                   confidence daily 
                </p>
            </div>
        </div>    
              <div className="mt-20">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <div
                className={`relative flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  item.highlight
                    ? "bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-sky-500/20 via-black to-black shadow-[0_0_40px_rgba(14,165,233,0.15)] ring-1 ring-sky-500/20"
                    : "bg-[#0b0b0b] ring-1 ring-white/5"
                }`}
              >
                <div>
                  <div className="mb-4 text-6xl font-serif leading-none text-white/20">
                    “
                  </div>

                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < item.stars ? "text-yellow-500" : "text-gray-700"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-800">
                    <img
                      src={`https://i.pravatar.cc/150?u=${item.name}`}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <span className="text-sm text-gray-400">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
    </div>
  );
}