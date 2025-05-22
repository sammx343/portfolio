(function () {
  function init() {
    if (screen.width > 680) {
      scrollTriggers();
    }
    haloBackgroundTimeLine();
  }

  init();

  function scrollTriggers() {
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

    gsap.utils.toArray(".game-dev__description").forEach((desc) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: desc,
          toggleActions: "play reverse play reverse",
          start: "start bottom",
        },
      });

      tl.from(desc, {
        y: 300,
        opacity: 0,
        start: -300,
        duration: 1,
        ease: "power3.out",
      });
    });
  }

  function haloChangingBackground(deg, x, y) {
    const colorsPercentage = `
    #699aad,
    #bbd6d8 15%,
    #206c90 25%,
    #bbd6d8 35%,
    #206c90 45%, 
    #bbd2d4 50%,
    #c2e0e4 60%,
    #206c90 70%,
    #9dc6cd 75%,
    #547788 80%,
    #c2e0e4 85%, 
    #206c90 90%, 
    #699aad
    `;

    return `conic-gradient(from ${deg}deg at ${x}% ${y}%, ${colorsPercentage})`;
  }

  function haloBackgroundTimeLine() {
    var tl = gsap.timeline({ repeat: -1 });
    tl.to(".games_subtitle", {
      background: haloChangingBackground(360, 100, 0),
      duration: 20,
    });
    tl.to(".games_subtitle", {
      background: haloChangingBackground(0, 100, 100),
      duration: 20,
    });
    tl.to(".games_subtitle", {
      background: haloChangingBackground(360, 0, 100),
      duration: 20,
    });
    tl.to(".games_subtitle", {
      background: haloChangingBackground(0, 0, 0),
      duration: 20,
    });
  }
})();
