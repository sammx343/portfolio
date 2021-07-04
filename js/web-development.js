(function () {
  document.addEventListener("mousemove", mouseEvents);
  const webDevText = document.querySelector(".web-dev__title");

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

  // let constrain = 20;
  // let mouseOverContainer = document.querySelector(".web-dev_title-container");

  // function transforms(x, y, el) {
  //   let box = el.getBoundingClientRect();
  //   let calcX = -(y - box.y - box.height / 2) / constrain;
  //   let calcY = (x - box.x - box.width / 2) / constrain;

  //   return (
  //     "perspective(100px) " +
  //     "   rotateX(" +
  //     calcX +
  //     "deg) " +
  //     "   rotateY(" +
  //     calcY +
  //     "deg) "
  //   );
  // }

  // function transformElement(el, xyEl) {
  //   el.style.transform = transforms.apply(null, xyEl);
  // }

  // mouseOverContainer.onmousemove = function (e) {
  //   let xy = [e.clientX, e.clientY];
  //   let position = xy.concat([webDevText]);

  //   window.requestAnimationFrame(function () {
  //     transformElement(webDevText, position);
  //   });
  // };
})();
