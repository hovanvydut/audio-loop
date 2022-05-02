var x = window.matchMedia('(max-width: 768px)');
function noScroll() {
  window.scrollTo(0, 0);
}
function loading() {
  (document.getElementById('hideAll').style.opacity = '0'),
    setTimeout(() => {
      document.getElementById('hideAll').style.display = 'none';
    }, 300),
    window.removeEventListener('scroll', noScroll);
}
activeIconStep(x),
  x.addListener(activeIconStep),
  window.addEventListener('resize', () => {
    animateBoxBorder();
  }),
  (document.getElementById('hideAll').style.display = 'flex'),
  window.addEventListener('scroll', noScroll);
