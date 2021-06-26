(function () {
  var heroIntroEl = document.querySelector(".hero-intro");
  gsap.to(".text-show-line", { top: "49%", duration: 1.5, ease: "back" });
  startTextHeroIntroAnimations();
  welcomeAnimationText();

  function startTextHeroIntroAnimations() {
    let tl = gsap.timeline();
    tl.to(".showup-line--top", { opacity: 1, delay: 0.2, duration: 0 });
    tl.to(".showup-line--top", { left: "0%", width: "100%", duration: 0.5 });
    tl.to(".showup-line--vertical", { opacity: 1, duration: 0 });
    tl.to(".showup-line--vertical", { height: "100%", duration: 0.5 });
    tl.to(".showup-line--bottom", { opacity: 1, duration: 0 });
    tl.to(".box-line-container--outer .showup-line--bottom", { width: "100%", duration: 0.5 });
    tl.to(".box-line-container--inner .showup-line--bottom.showup-line--inner", { width: "100%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info__subtitle", { opacity: 1, duration: 0 });
    tl.to(".main-info__title", { opacity: 1, duration: 0 });
    tl.to(".main-info__subtitle", { left: 0, duration: 0.5 });
    tl.to(".main-info__title", { left: 0, duration: 0.5 }, "-=0.5");
    tl.to(".text-show-line__text-cover", { opacity: 0, duration: 0 });
    tl.to(".text-show-line", { height: "5px", duration: 0.5 });
    tl.to(".text-show-line", { width: "500px",  duration: 0.5 });
    tl.to(".main-info__subtitle", { left: "50%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info__title", { left: "-50%", duration: 0.5 }, "-=0.5");
    tl.to(".main-info--fallen-letter-first", { rotate: 0, translateX: 0, ease: "bounce"});
    tl.to(".main-info--fallen-letter-last", { rotate: 0, translateX: 0, ease: "bounce"}, "-=0.25");
    tl.to(".scroll-prompt", { opacity: 1, duration: 1 });
    tl.to(".scroll-prompt--left-bar", { opacity: 1, duration: 0});
    tl.to(".scroll-prompt--left-bar", { height: 40, duration: 0.25});
    tl.to(".scroll-prompt--right-bar", { opacity: 1, duration: 0, });
    tl.to(".scroll-prompt--right-bar", { height: 40, top: "75%", duration: 0.25});
  }

  function welcomeAnimationText(){
    let tl = gsap.timeline();
    tl.to(".invitation__text", { opacity: 1, delay: 1, duration: 0.5 });
    tl.to(".invitation", { rotate: 8, duration: 2});
  }

  window.onscroll = function () {
    const offsetScroll = 1000;
    if (window.scrollY > offsetScroll && window.scrollY < (heroIntroEl.offsetHeight + offsetScroll)) {
      console.log(window.scrollY);
      heroIntroEl.style.transform = `translateY(${-window.scrollY + offsetScroll}px)`;
    }
    if (window.scrollY < offsetScroll) {
      heroIntroEl.style.transform = `translateY(0px)`;
    }
  }
})();