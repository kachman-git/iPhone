"use client";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./VideoCarousel";

function Highlight() {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef<HTMLHeadingElement | null>(null);

  const groupRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(
        groupRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.6,
          ease: "power2.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: groupRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <section
      id="highlight"
      className="w-screen overflow-hidden h-full sm:py-20 py-16 sm:px-10 px-5 bg-zinc"
    >
      <div className="screen-max-width">
        <div className="flex flex-col md:flex-row  md:items-70% md:justify-between mb-6 space-y-5 md:space-y-0">
          <h2
            ref={textRef}
            className="text-3xl mt:text-5xl font-semibold text-gray md:mt-0 mt-10"
          >
            Get the highlights.
          </h2>

          <div className="flex gap-4" ref={groupRef}>
            <div className=" flex items-center space-x-2">
              <Link href={"/"} className="text-blue text-lg hover:underline ">
                Watch the film
              </Link>
              <Image alt="watch" src={watchImg} width="18" height="18" />
            </div>
            <div className=" flex items-center space-x-2">
              <Link href={"/"} className="text-blue text-lg hover:underline ">
                Watch the film
              </Link>
              <Image alt="watch" src={rightImg} width="10" height="10" />
            </div>
          </div>
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
}

export default Highlight;
