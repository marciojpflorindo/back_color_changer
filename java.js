function mixedColors() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColors = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.backgroundColor = rgbColors;
  let title = document.querySelector('.title');
  title.style.backgroundColor = rgbColors;
}