import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
import { AnimationProps, ScrollTriggerProps } from "../../types/constantsType";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: Element | string,
  animationProps: AnimationProps,
  scrollProps?: ScrollTriggerProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: MutableRefObject<{ rotation: { y: number } }>,
  rotationState: number,
  firstTarget: gsap.TweenTarget,
  secondTarget: gsap.TweenTarget,
  animationProps: AnimationProps
): void => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
