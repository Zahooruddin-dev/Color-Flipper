const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function () {
  let colur = '#';
  for (let i = 0; i < 6; i++) {
    colur += colors[getRandomNUmber()];
  }
  color.textContent = colur;
  document.body.style.backgroundColor = colur;
  
});
function getRandomNUmber() {
  return Math.floor(Math.random() * colors.length);
}
