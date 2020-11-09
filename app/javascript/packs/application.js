// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener("DOMContentLoaded", function () {
  let img1 = document.getElementById("puzzle-img-1");
  let waldoP1 = document.getElementById("waldo-puzzle-1");
  let wizardP1 = document.getElementById("wizard-puzzle-1");
  let odlawP1 = document.getElementById("odlaw-puzzle-1");
  let wendaP1 = document.getElementById("wenda-puzzle-1");

  const getCoords = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x >= 882 && x <= 928 && y >= 299 && y <= 376) {
      waldoP1.style.backgroundColor = "green";
      console.log("FOUND WALDO");
    } else if (x >= 375 && x <= 420 && y >= 285 && y <= 337) {
      wizardP1.style.backgroundColor = "green";
      console.log("FOUND WIZARD WHITE BEARD");
    } else if (x >= 139 && x <= 181 && y >= 284 && y <= 354) {
      odlawP1.style.backgroundColor = "green";
      console.log("FOUND ODLAW");
    } else if (x >= 1107 && x <= 1153 && y >= 337 && y <= 384) {
      wendaP1.style.backgroundColor = "green";
      console.log("FOUND WENDA");
    }

    return [x, y];
  };

  img1.addEventListener("click", getCoords);
});
