// Footer year and the photo lightbox used on build pages.
document.getElementById('y').textContent = new Date().getFullYear();
const lb = document.getElementById('lb');
document.addEventListener('click', e => {
  const b = e.target.closest('[data-img]');
  if (b) {
    document.getElementById('lbimg').src = b.dataset.img;
    document.getElementById('lbcap').textContent = b.dataset.cap;
    lb.hidden = false;
    return;
  }
  if (!lb.hidden && e.target.closest('#lb')) lb.hidden = true;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
