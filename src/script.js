import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  console.log(test);
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
