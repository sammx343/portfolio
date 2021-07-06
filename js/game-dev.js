(function () {
  ScrollTrigger.defaults({
    toggleActions: "play reverse play reverse",
  });

  gsap.from(".game-dev__greetings", {
    scrollTrigger: ".game-dev__greetings", // start the animation when ".box" enters the viewport (once)
    x: -500,
    y: 300,
    duration: 1,
    start: "bottom bottom",
    ease: "power3.out",
    once: false,
  });

  gsap.from(".game-dev__title", {
    scrollTrigger: ".game-dev__title", // start the animation when ".box" enters the viewport (once)
    y: 300,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    start: "bottom bottom",
    ease: "power3.out",
  });

  gsap.from(".game-dev__subtitle", {
    scrollTrigger: ".game-dev__title", // start the animation when ".box" enters the viewport (once)
    y: 300,
    opacity: 0,
    delay: 0.25,
    duration: 2,
    start: "bottom bottom",
    ease: "power3.out",
  });

  gsap.utils.toArray(".game-dev__description").forEach((desc) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: desc,
        toggleActions: "play reverse play reverse",
        start: "top 95%",
        markers: true,
      },
    });

    tl.from(desc, {
      y: 300,
      opacity: 0,
      start: -300,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  gsap.from(".games_subtitle", {
    scrollTrigger: ".games_subtitle",
    start: "top bottom",
    scale: 0.75,
    duration: 1,
  });
})();
