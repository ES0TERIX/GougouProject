import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel", {
  trigger: ".panel",
  markers: true,
  start: "top center",
});
