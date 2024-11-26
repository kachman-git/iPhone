"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);
const HowItworks = () => {
  const chipRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      chipRef.current,
      {
        opacity: 0,
        scale: 2,
      },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: chipRef.current,
          start: "top 5%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);

  return (
    <section className="common-padding screen-max-width">
      <div className="flex flex-col text-center w-full items-center justify-center">
        <div
          ref={chipRef}
          className="flex items-center justify-center w-full my-20"
        >
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <h2 className="text-7xl font-semibold">
          A17 Pro chip.
          <br /> A monster win for gaming.
        </h2>
        <p className="text-gray text-2xl font-semibold">
          It's here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>

      <div className="mt-10 md:mt-20 mb-14">
        <div className="relative h-full flex items-center justify-center">
          <div className="overflow-hidden">
            <img
              src={frameImg}
              alt="frame"
              className="bg-transparent relative z-10"
            />
          </div>
          <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
            <video
              className="pointer-events-none"
              playsInline
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src={frameVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p className="text-gray font-semibold text-center mt-3">
          Honkai: Star Rail
        </p>
      </div>

      <div
        className="flex md:flex-row flex-col justify-between items-start gap-24"
        ref={textRef}
      >
        <div className="flex flex-1 justify-center flex-col">
          <p className="text-gray text-xl font-normal md:font-semibold g_fadeIn">
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-white">best graphic performance by far</span>.
          </p>

          <p className="text-gray text-xl font-normal md:font-semibold g_fadeIn">
            Mobile{" "}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and characters.
          </p>
        </div>

        <div className="flex-1 flex justify-center flex-col g_fadeIn">
          <p className="text-gray text-xl font-normal md:font-semibold">New</p>
          <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
            Pro-class GPU
          </p>
          <p className="text-gray text-xl font-normal md:font-semibold">
            with 6 cores
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItworks;
