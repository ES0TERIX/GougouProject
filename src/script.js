import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      markers: true,
      trigger: section,
      start: "-5% top",
      end: "bottom 15%",
      snap: 3,
    },
  });
});
