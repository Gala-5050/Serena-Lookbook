// Simple parallax: move the .hero__bg a fraction of the page scroll
(function() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;

  // read speed from data-speed attribute (0 = fixed to viewport; >0 moves)
  const speed = parseFloat(bg.dataset.speed) || 0.4;
  let ticking = false;

  function update() {
    // distance from top of viewport to the hero's top
    const heroRect = bg.parentElement.getBoundingClientRect();
    // We'll move the bg by heroRect.top * speed
    const offset = heroRect.top * speed;
    // small smoothing: round to reduce tiny subpixel jitters
    bg.style.transform = `translateY(${Math.round(offset)}px)`;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // run once to set initial position
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
})();

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
