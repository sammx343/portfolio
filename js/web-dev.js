(function () {
  document.addEventListener("mousemove", mouseEvents);
  const webDevText = document.querySelector(".web-dev__title");
  const webDevCurrentYear = document.querySelector(".web-portfolio__current_year");

  function init(){
    changeWebDevCurrentYear();
  }

  function changeWebDevCurrentYear(){
    if (webDevCurrentYear) {
      webDevCurrentYear.innerText = (new Date().getFullYear()) + '';
    }
  }

  function mouseEvents(e) {
    changeTextBackgrundPosition(e);
    changeTextRotation(e);
  }

  function changeTextBackgrundPosition(e) {
    webDevText.style.backgroundPosition = `
    ${mouseScreenRatio(e).x * 100}% ${mouseScreenRatio(e).y * 100}%`;
  }

  function changeTextRotation(e) {
    const staticStyle = "translateY(-50%) perspective(100px)";
    const { x, y } = mouseScreenRatio(e);
    const transform = `${staticStyle} rotateX(${(1 - y) * 2}deg) rotateY(${
      5 + x * 2
    }deg)`;
    webDevText.style.transform = transform;
  }

  function mouseScreenRatio(e) {
    return {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }
})();
