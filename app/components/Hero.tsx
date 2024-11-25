"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-heading", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 3,
      ease: "sine",
    });
  }, []);

  return (
    <section className="w-full relative">
      <div className="flex items-center justify-center flex-col h-5/6">
        <h2
          id="hero-heading"
          className="text-center text-gray mt-14 opacity-0 font-semibold text-4xl hidden md:block"
        >
          Iphone 15 pro
        </h2>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="text-center opacity-0 mt-10 pb-10 absolute bottom-10 left-0 right-0 md:relative transition-colors space-y-5 w-full "
      >
        <Link
          href={"#highlight"}
          className="bg-blue py-2 px-4 rounded-full hover:text-blue border-[.5px] border-blue hover:bg-transparent "
        >
          Buy
        </Link>
        <h3 className="font-semibold text-xl">From $199/month or $999</h3>
      </div>
    </section>
  );
};

export default Hero;
