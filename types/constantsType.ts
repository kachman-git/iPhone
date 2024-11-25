import { StaticImageData } from "next/image";

export type navListsProps = string[];

export type hightlightsSlidesProps = {
  id: number;
  textLists: string[];
  video: any;
  videoDuration: number;
}[];

export type modelsProps = {
  id: number;
  title: string;
  color: string[];
  img: string;
}[];

export type sizesProps = {
  label: string;
  value: string;
}[];

export type footerLinksProps = string[];

export type VideoSlide = {
  id: number;
  video: string;
  textLists: string[];
};

export type VideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
};

export type LoadedData = {
  duration: number;
};

export type ModelType = {
  title: string;
  color: string[];
  img: string;
};

export type AnimationProps = {
  duration?: number;
  ease?: string | gsap.EaseFunction;
  [key: string]: any;
};

export type ScrollTriggerProps = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  markers?: boolean;
  [key: string]: any;
};
