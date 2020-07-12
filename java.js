// function mixedColors() {
//   var colorRed = Math.floor(Math.random() * 256);
//   var colorBlue = Math.floor(Math.random() * 256);
//   var colorGreen = Math.floor(Math.random() * 256);
//   var colors = "rgb" + "(" + colorRed + ", " + colorBlue + ", " + colorGreen + ")";
//   document.body.style.backgroundColor = colors;
// }
//
//
//
// document.querySelector("button").addEventListener("click", mixedColors);

$("button").on("click", mixedColors)

function mixedColors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgbColors = "rgb(" + red + ", " + green + ", " + blue + ")";
  $("body").css("background-color", rgbColors);
}
