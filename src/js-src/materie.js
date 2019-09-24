// Accordion
const toggle = (idx) => {
  document.querySelectorAll('.expandable-item')[idx].classList.toggle('active');
};


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#Login');

  const modal = document.getElementById('MyModal');
  const span = document.getElementsByClassName('close')[0];
  // document.querySelector('#Login').addEventListener('click', () => {
  btn.onclick = function () {
    modal.style.display = 'block';
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});
