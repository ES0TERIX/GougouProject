import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Swiper from "swiper";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      scroller: "body",
      trigger: section,
      markers: "true",
      start: "top top",
      end: "bottom top",
      snap: {
        snapTo: 4,
        duration: 0.5,
        delay: 0.01,
      },
    },
  });
});

var tl = gsap.timeline();
const nexus = document.querySelector(".logo-nexus");
var test = 0;

nexus.addEventListener("click", () => {
  if (test == 0) {
    tl.to(".nexus", {
      left: "0%",
    });
    test = 1;
  } else {
    tl.to(".nexus", {
      left: "-100%",
    });
    test = 0;
  }
});

const swiper = new Swiper(".artist-swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
});

const loader = document.querySelector(".loader");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    loader.classList.add("display-none");
  }, 5000);
});
