"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "../TextSplitter/TextSplitter";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  useGSAP(() => {
    const intro = gsap.timeline();
    intro
      .set("#heading", { opacity: 1 })
      .from("#heading", {
        scale: 3,
        opacity: 0,
        ease: "power1.in",
        //   delay: 0.1,
        stagger: 1,
      })
      .from(
        "#sub_heading",
        {
          opacity: 0,
          y: 30,
          //   ease: "power1.in",
        },
        "+=.001",
      )
      .from("#sub_body", {
        opacity: 0,
        y: 30,
      })
      .from("#body_btn", {
        opacity: 0,
        y: 30,
      });

    const scrollT = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollT
      .fromTo(
        "body",
        {
          backgroundColor: "#fde047",
        },
        {
          backgroundColor: "#d9f99d",
          overwrite: "auto",
        },
      )
      .from(".split-char", {
        scale: 1.2,
        y: 40,
        rotate: -25,
        opacity: 0,
        ease: "back.out(3)",
        duration: 0.5,
        stagger: 0.1,
      })
      .from("#second_body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <div className="w-full">
      {/* First Section - Live Gutsy */}
      <section className="py-20 px-4 md:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1
              id="heading"
              className="text-6xl md:text-[13rem] font-bold"
              style={{ color: "#f97216" }}
            >
              LIVE
              <br />
              GUTSY
            </h1>

            <h2
              id="sub_heading"
              className="text-3xl md:text-5xl font-bold text-blue-900"
              style={{ color: "#00333b" }}
            >
              Soda Perfected
            </h2>

            <p
              id="sub_body"
              className="text-2xl text-gray-700 max-w-md"
              style={{ color: "#00333b" }}
            >
              3-5g sugar, 0g fiber, 5 delicious flavors.
            </p>

            <button
              id="body_btn"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition-colors"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Second Section - Try All Five Flavors */}
      <section className="py-20 px-4 md:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-start justify-center space-y-6">
            <TextSplitter
              //   id="all_flavors"
              text={"TRYALL FIVE FLAVORS"}
              wordDisplayStyle="block"
              className="text-5xl md:text-8xl font-bold"
            />
            <p
              id="second_body"
              className="text-lg text-gray-800 max-w-lg leading-relaxed"
            >
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
