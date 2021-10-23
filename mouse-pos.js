// script that detects the mouse position and sets the variables in the CSS like (--mouseX and --mouseY); src= https://codepen.io/bramus/pen/eBZgPB

const root = document.documentElement;

document.addEventListener('mousemove', evt => {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;

  root.style.setProperty('--mouse-x', x);
  root.style.setProperty('--mouse-y', y);
});