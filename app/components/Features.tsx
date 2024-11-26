"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featHead = useRef<HTMLHeadingElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const g_textRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      featHead.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: featHead.current,
          start: "-10% bottom",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "-10% bottom",
        toggleActions: "play restart play restart",
      },
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
    });
    gsap.fromTo(
      image1Ref.current,
      {
        scale: 1.2,
      },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "-10% bottom",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.fromTo(
      image2Ref.current,
      {
        scale: 1.2,
      },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "-10% bottom",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.fromTo(
      g_textRef.current,
      {
        y: 6,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: g_textRef.current,
          start: "top 25%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);
  return (
    <section className="bg-zinc">
      <div className="screen-max-width common-padding">
        <h2
          ref={featHead}
          className="text-4xl md:text-6xl text-gray mb-16 font-bold"
        >
          Explore the full story
        </h2>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>
        </div>

        <div className="grid justify-center items-center w-full grid-cols-1 md:grid-cols-2">
          <div className="relative md:col-span-2 h-[50vh] w-full flex items-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              ref={image1Ref}
              src={explore1Img}
              alt={"titanium"}
              fill
              objectFit="cover"
            />
          </div>
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              ref={image2Ref}
              src={explore2Img}
              alt={"titanium"}
              fill
              objectFit="cover"
            />
          </div>
        </div>

        <div
          className="w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5"
          ref={g_textRef}
        >
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray max-w-md text-lg md:text-xl font-semibold">
              iPhone 15 Pro is{" "}
              <span className="text-white">
                the first iPhone to feature an aerospace-grade titanium design
              </span>
              , using the same alloy that spacecrafts use for missions to Mars.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray max-w-md text-lg md:text-xl font-semibold">
              Titanium has one of the best strength-to-weight ratios of any
              metal, making these our{" "}
              <span className="text-white">lightest Pro models ever.</span>
              You'll notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
