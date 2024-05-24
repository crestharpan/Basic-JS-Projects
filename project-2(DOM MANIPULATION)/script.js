'use script';
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn');
const overLay = document.querySelector('.overlay');
const container = document.querySelectorAll('.box');
//console.log(container);
function removalPart() {
  overLay.classList.remove('hidden');
  modal.classList.remove('hidden');
}
function hide() {
  overLay.classList.add('hidden');
  modal.classList.add('hidden');
}
for (let i = 0; i < container.length; i++) {
  console.log(container[i]);
  container[i].addEventListener('click', removalPart);
}
overLay.addEventListener('click', hide);
btnClose.addEventListener('click', hide);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    hide();
  }
});
