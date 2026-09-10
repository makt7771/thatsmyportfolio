(() => {
  'use strict';
  const viewer = document.querySelector('.lightbox');
  const preview = viewer.querySelector('img');
  const caption = viewer.querySelector('figcaption');
  let opener;
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      preview.src = button.dataset.lightbox;
      preview.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.caption;
      viewer.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  viewer.querySelector('.lightbox-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.style.overflow = '';
    preview.removeAttribute('src');
    opener?.focus({preventScroll:true});
  });
})();
