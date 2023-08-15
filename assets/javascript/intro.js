const btn = document.querySelector('.intro-btn');
const btnEnd = document.querySelector('.intro-btn-end')
const dc = document.querySelector('.intro-suite');

btn.addEventListener('click', () => {
  btn.style.display = 'none';         // Cache btn
  dc.style.display = 'block';         // Affiche dc
  btnEnd.style.display = 'block';     // Affiche btnEnd
});

btnEnd.addEventListener('click', () => {
  btn.style.display = 'block';        // Affiche btn
  dc.style.display = 'none';          // Cache dc
  btnEnd.style.display = 'none';      // Cache btnEnd
});
