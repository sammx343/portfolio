(function () {
  OnInit();
  let heroIntroEl = document.querySelector(".hero-intro");
  let scrollAnimationStates = {
    notCreated: "notCreated",
    created: "created",
  };
  scrollAnimationState = scrollAnimationStates.notCreated;

  gsap.to(".text-show-line", { top: "49%", duration: 1.5, ease: "back" });

  let introTimeLine = startTextHeroIntroAnimations();
  let scrollAnimationTl = null;

  function startTextHeroIntroAnimations() {
    let tl = gsap.timeline();
    tl.to(".showup-line--top", { opacity: 1, delay: 0.2, duration: 0 });
    tl.to(".showup-line--top", { left: "0%", width: "100%", duration: 0.5 });
    tl.to(".showup-line--vertical", { opacity: 1, duration: 0 });
    tl.to(".showup-line--vertical", { height: "100%", duration: 0.5 });
    tl.to(".showup-line--bottom", { opacity: 1, duration: 0 });
    tl.to(".box-line-container--outer .showup-line--bottom", {
      width: "100%",
      duration: 0.5,
    });
    tl.to(
      ".box-line-container--inner .showup-line--bottom.showup-line--inner",
      { width: "100%", duration: 0.5 },
      "-=0.5"
    );
    tl.to(".main-info__subtitle", { opacity: 1, duration: 0 });
    tl.to(".main-info__title", { opacity: 1, duration: 0 });
    tl.to(".main-info__subtitle", { left: 0, duration: 0.5 });
    tl.to(".main-info__title", { left: 0, duration: 0.5 }, "-=0.5");
    tl.to(".text-show-line__text-cover", { opacity: 0, duration: 0 });
    tl.to(".text-show-line", { height: "5px", duration: 0.5 });
    tl.to(".text-show-line", { width: "500px", duration: 0.5 });
    tl.to(".main-info__subtitle", { left: "50%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info__title", { left: "-50%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info--fallen-letter-first", {
      rotate: 0,
      translateX: 0,
      ease: "bounce",
    });
    tl.to(
      ".main-info--fallen-letter-last",
      { rotate: 0, translateX: 0, ease: "bounce" },
      "-=0.25"
    );
    tl.to(".scroll-prompt", { opacity: 1, duration: 1 });
    tl.to(".scroll-prompt--left-bar", { opacity: 1, duration: 0 });
    tl.to(".scroll-prompt--left-bar", { height: 40, duration: 0.25 });
    tl.to(".scroll-prompt--right-bar", { opacity: 1, duration: 0 });
    tl.to(".scroll-prompt--right-bar", {
      height: 40,
      top: "75%",
      duration: 0.25,
    });
    return tl;
  }

  window.onscroll = function () {
    scrollTransformSection();
  };

  function OnInit() {
    if (window.pageYOffset > screen.height && screen.width > 680) {
      document.querySelector(".hero-intro").style.transform =
        "translateY(-100vh)";
    }
  }

  function scrollTransformSection() {
    if (screen.width > 680) {
      const offsetScroll = 4000;
      const offSetHeroIntroTransform = 5000;
      const proportion =
        window.scrollY / (heroIntroEl.offsetHeight + offsetScroll);

      InstantiateScrollAnimationTimeLine(proportion);
      if (
        window.scrollY > offSetHeroIntroTransform &&
        window.scrollY < heroIntroEl.offsetHeight * 2 + offSetHeroIntroTransform
      ) {
        heroIntroEl.style.transform = `translateY(${
          -window.scrollY + offSetHeroIntroTransform
        }px)`;
      }
      if (window.scrollY < offSetHeroIntroTransform) {
        heroIntroEl.style.transform = `translateY(0px)`;
      }
    }
  }

  function InstantiateScrollAnimationTimeLine(proportion) {
    if (scrollAnimationState === scrollAnimationStates.notCreated) {
      scrollAnimationTl = ExitAnimationTimeLine();

      scrollAnimationState = scrollAnimationStates.created;
    }
    scrollAnimationTl.pause(scrollAnimationTl.totalDuration() * proportion);
  }

  function ExitAnimationTimeLine() {
    introTimeLine.pause(introTimeLine.totalDuration());

    let tl = gsap.timeline({ paused: true });
    tl.fromTo(".scroll-prompt", { opacity: 1 }, { opacity: 0, duration: 0.5 });
    tl.fromTo(
      ".main-info__subtitle",
      { left: "50%" },
      { left: "0%", duration: 0.5 }
    );
    tl.fromTo(
      ".main-info__title",
      { left: "-50%" },
      { left: "0%", duration: 0.5 },
      "-=0.5"
    );
    tl.fromTo(
      ".text-show-line",
      { width: "500px" },
      { width: "1px", duration: 0.5 }
    );
    tl.fromTo(
      ".text-show-line",
      { height: "5px" },
      { height: "200px", duration: 0.5 }
    );
    tl.fromTo(
      ".text-show-line__text-cover",
      { opacity: 0 },
      { opacity: 1, duration: 0 }
    );
    tl.to(".main-info__subtitle", { left: "100%", duration: 0.5 });
    tl.to(".main-info__title", { left: "-100%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info__subtitle", { opacity: 0, duration: 0 });
    tl.to(".main-info__title", { opacity: 0, duration: 0 });
    tl.to(".text-show-line", { height: 0, duration: 0.5 });
    tl.to(".text-show-line", { opacity: 0, duration: 0 });

    return tl;
  }
})();
