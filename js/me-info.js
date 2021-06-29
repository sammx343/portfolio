window.onload = function () {
  (function () {
    let stripWordsCounter = 7;
    const factor = 50;

    const wordStripLeft = document.querySelector(
      ".word-strip.word-strip--left-orientation"
    );

    const wordStripRight = document.querySelector(
      ".word-strip.word-strip--right-orientation"
    );

    const words = [
      "CREATIVE",
      "INNOVATIVE",
      "LEADERSHIP",
      "TALKATIVE",
      "PASSIONATE",
      "RELIABLE",
      "GOODLISTENER",
      "FAST LEARNER",
      "AVID READER",
    ];

    createInitialWordsForStrip(wordStripLeft);
    createInitialWordsForStrip(wordStripRight);

    //A word strip has word groups, and each word group has words
    document
      .querySelectorAll(".word-strip--left-orientation .word-strip__group")
      .forEach(function (wordGroup, index) {
        addStripWithAnimation(wordStripLeft, wordGroup, index);
      });

    document
      .querySelectorAll(".word-strip--right-orientation .word-strip__group")
      .forEach(function (wordGroup, index) {
        console.log(wordGroup.offsetWidth);
        addStripWithAnimationRight(wordStripRight, wordGroup, index);
      });

    function addStripWithAnimationRight(wordStripEl, wordGroup, index) {
      //This calculates the distance for each initial wordGroup inside the wordStrip
      //it is different from left to right
      const startingDistance = wordGroup.offsetWidth * index;
      const time = ((index + 1) * factor) / 2;

      wordGroup.style.right = startingDistance;
      let x = startingDistance + wordGroup.offsetWidth;

      //Gsap does not have a direct attribute for velocity, so you have to calculate it
      //manually according to the distance and the time, which changes depending on the
      //index of the word group
      //Important: the speed should always be the same for each word group, and can change
      //if the initial distance changes
      // console.log("x : " + x);
      // console.log("time :" + time);
      // console.log("speed :" + x / time);
      animateStrip(wordGroup, wordStripEl, x, time, addStripWithAnimationRight);
    }

    function addStripWithAnimation(wordStripEl, wordGroup, index) {
      const startingDistance = wordGroup.offsetWidth * index;
      console.log(startingDistance);
      const time = ((index + 1) * factor) / 2;

      wordGroup.style.left = startingDistance;
      let x = -startingDistance - wordGroup.offsetWidth;
      animateStrip(wordGroup, wordStripEl, x, time, addStripWithAnimation);
    }

    //Creates the animation for each word group, on the OnComplete callback
    //the current word group is deleted, and a new one is created with a recursive function
    function animateStrip(wordGroup, wordStripEl, x, time, stripCallback) {
      gsap.to(wordGroup, {
        x,
        duration: time,
        ease: "none",
        onComplete: function () {
          let newWordStripGroup = createWordStripGroup();
          wordStripEl.append(newWordStripGroup);
          stripCallback(wordStripEl, newWordStripGroup, 5);
          wordGroup.remove();
        },
      });
    }

    function createInitialWordsForStrip(wordStripEl) {
      for (let index = 0; index < stripWordsCounter; index++) {
        wordStripEl.append(createWordStripGroup());
      }
    }

    function createWordStripGroup() {
      let wordGroup = words.reduce((wordStripInner, word) => {
        const newWord =
          wordStripInner + `<p class="word-strip__word">${word}</p>`;
        return newWord;
      }, "");

      let wordStripGroup = document.createElement("div");
      wordStripGroup.classList.add("word-strip__group");
      wordStripGroup.innerHTML = wordGroup;
      return wordStripGroup;
    }
  })();
};
