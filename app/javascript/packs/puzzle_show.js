document.addEventListener("turbolinks:load", () => {
  let title = document.getElementById("puzzle-show-title");
  let puzzleTitle = title.textContent;
  let img1 = document.getElementById("puzzle-img");
  let waldoP1 = document.getElementById("waldo-puzzle");
  let wizardP1 = document.getElementById("wizard-puzzle");
  let odlawP1 = document.getElementById("odlaw-puzzle");
  let wendaP1 = document.getElementById("wenda-puzzle");
  let startBtn = document.getElementById("puzzle-start-btn");
  let startDiv = document.getElementById("start-game-div");

  startBtn.addEventListener("click", () => {
    startDiv.style.display = "none";
  });

  let puzzleCoords = {
    puzzle1: {
      waldo: { xMin: 882, xMax: 928, yMin: 229, yMax: 376 },
      wizard: { xMin: 375, xMax: 420, yMin: 285, yMax: 337 },
      odlaw: { xMin: 139, xMax: 181, yMin: 284, yMax: 354 },
      wenda: { xMin: 1107, xMax: 1153, yMin: 337, yMax: 384 },
    },
    puzzle2: {
      waldo: { xMin: 1211, xMax: 1282, yMin: 642, yMax: 719 },
      wizard: { xMin: 81, xMax: 701, yMin: 667, yMax: 731 },
      odlaw: { xMin: 443, xMax: 484, yMin: 562, yMax: 619 },
      wenda: { xMin: 697, xMax: 735, yMin: 352, yMax: 427 },
    },
    puzzle3: {
      waldo: { xMin: 386, xMax: 437, yMin: 186, yMax: 246 },
      wizard: { xMin: 878, xMax: 923, yMin: 670, yMax: 744 },
      odlaw: { xMin: 853, xMax: 892, yMin: 477, yMax: 542 },
      wenda: { xMin: 351, xMax: 390, yMin: 546, yMax: 593 },
    },
  };

  const detectHit = (obj, x, y) => {
    let waldo = obj.waldo;
    let wizard = obj.wizard;
    let odlaw = obj.odlaw;
    let wenda = obj.wenda;

    if (
      x >= waldo.xMin &&
      x <= waldo.xMax &&
      y >= waldo.yMin &&
      y <= waldo.yMax
    ) {
      waldoP1.style.backgroundColor = "green";
      console.log("FOUND WALDO");
    } else if (
      x >= wizard.xMin &&
      x <= wizard.xMax &&
      y >= wizard.yMin &&
      y <= wizard.yMax
    ) {
      wizardP1.style.backgroundColor = "green";
      console.log("FOUND WIZARD WHITE BEARD");
    } else if (
      x >= odlaw.xMin &&
      x <= odlaw.xMax &&
      y >= odlaw.yMin &&
      y <= odlaw.yMax
    ) {
      odlawP1.style.backgroundColor = "green";
      console.log("FOUND ODLAW");
    } else if (
      x >= wenda.xMin &&
      x <= wenda.xMax &&
      y >= wenda.yMin &&
      y <= wenda.yMax
    ) {
      wendaP1.style.backgroundColor = "green";
      console.log("FOUND WENDA");
    }
  };

  const getCoords = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (puzzleTitle === "Waldo at the beach") {
      detectHit(puzzleCoords.puzzle1, x, y);
    } else if (puzzleTitle === "Waldo goes skiing") {
      detectHit(puzzleCoords.puzzle2, x, y);
    } else if (puzzleTitle === "Waldo at the Olympics") {
      detectHit(puzzleCoords.puzzle3, x, y);
    } else {
      console.log("ERROR");
    }

    return [x, y];
  };

  img1.addEventListener("click", getCoords);
});
