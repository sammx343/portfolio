(function () {
  let stripWordsCounter = 7;
  let newCounter = 0;

  const wordStripLeft = document.querySelector(
    ".word-strip.word-stip--left-orientation"
  );

  const wordStripRight = document.querySelector(
    ".word-strip.word-stip--right-orientation"
  );

  const words = [
    "CREATIVE",
    "INNOVATIVE",
    "LEADERSHIP",
    "TALKATIVE",
    "PASSIONATE",
    "RELIABLE",
    "GOODLISTENER",
    "LEARNER",
    "READER",
  ];

  for (let index = 0; index < stripWordsCounter; index++) {
    wordStripLeft.append(createWordStripGroup());
  }

  document
    .querySelectorAll(".word-strip__group")
    .forEach(function (wordGroup, index) {
      addStripWithAnimation(wordGroup, index);
    });

  function addStripWithAnimation(wordGroup, index) {
    const startingDistance = wordGroup.offsetWidth * (index + 1);
    const factor = 20;
    const time = factor + (index * factor) / 2;
    // console.log((wordGroup.offsetWidth + startingDistance) / time);

    wordGroup.style.left = startingDistance;
    let x = -startingDistance - wordGroup.offsetWidth;
    console.log("x : " + x);
    console.log("time :" + time);
    console.log("speed :" + x / time);
    gsap.to(wordGroup, {
      x,
      duration: time,
      ease: "none",
      onComplete: function () {
        let newWordStripGroup = createWordStripGroup();
        wordStripLeft.append(newWordStripGroup);
        addStripWithAnimation(newWordStripGroup, 5);
      },
    });
  }

  function createWordStripGroup() {
    let wordGroup = words.reduce((wordStripInner, word) => {
      const newWord = wordStripInner + `<p>${word}</p>`;
      return newWord;
    }, "");

    let wordStripGroup = document.createElement("div");
    wordStripGroup.classList.add("word-strip__group");
    wordStripGroup.innerHTML = wordGroup;
    return wordStripGroup;
  }
})();
