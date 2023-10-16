import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((section) => {
	gsap.to(section, {
		scrollTrigger: {
			markers: true,
			trigger: section,
			start: "-5% top",
			end: "bottom 5%",
			snap: 3,
		},
	});
});

var tl = gsap.timeline();

const nexus = document.querySelector(".logo-nexus");
// tl.to(".nexus-link", {
//   translateY: "100%",
//   duration: 0.5,
// });
//
// tl.to(".nexus", {
//   width: "0",
// });

nexus.addEventListener("click", () => {
	console.log("test");
	tl.to(".nexus", {
		left: "0%",
	});
});
