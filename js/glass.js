/* Folds the floating header down to a slim bar once you scroll (iOS style).
   Styling lives in css/glass.css (#header.is-scrolled). Two thresholds
   (in at 80px, out at 20px) so it doesn't flicker around one point. */
(function () {
  var header = document.getElementById('header');
  if (!header) return;
  var scrolled = false;
  function update() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (!scrolled && y > 80) {
      scrolled = true;
      header.classList.add('is-scrolled');
    } else if (scrolled && y < 20) {
      scrolled = false;
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
