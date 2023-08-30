let box = document.getElementById('animatedBox');
let pos = 0;
let id = setInterval(frame, 10);

function frame() {
  if (pos === 350) {
    clearInterval(id);
  } else {
    pos++;
    box.style.top = pos + 'px';
    box.style.left = pos + 'px';
  }
}
