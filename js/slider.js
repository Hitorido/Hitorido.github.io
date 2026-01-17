// SLIDER FUNCTION
document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');
  let index = 0;

  // Create dots
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function updateSlider(){
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  next.addEventListener('click', ()=> {
    index = (index + 1) % images.length;
    updateSlider();
  });

  prev.addEventListener('click', ()=> {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  });

  // Auto slide every 7s
  setInterval(()=>{
    index = (index + 1) % images.length;
    updateSlider();
  },7000);
});


// SCROLL REVEAL
window.addEventListener('scroll', reveal);
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
}
reveal();
