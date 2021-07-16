(function () {
  ScrollTrigger.defaults({
    toggleActions: "play reverse play reset",
  });

  gsap.from(".contact__start", {
    scrollTrigger: ".contact-container", // start the animation when ".box" enters the viewport (once)
    y: "100%",
    opacity: 0,
    delay: 0.5,
    duration: 2,
    start: "center bottom",
    ease: "power3.out",
  });
})();
