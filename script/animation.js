let circle_design = document.querySelector(".circle_design");
let max_rotate = 360;

function rotateOn() {
  let rotate = circle_design.getAttribute("rotate_info");
  rotate++;
  circle_design.setAttribute("rotate", `${rotate}deg`);
}
