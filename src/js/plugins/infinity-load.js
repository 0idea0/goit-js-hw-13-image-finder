import { galleryRef } from '../refs.js';

export default function infinityLoad(render) {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        render();
        observer.unobserve(galleryRef.lastElementChild); // продолжает следить
        //  observer.disconnect(galleryRef.lastElementChild); // отменяет слежение
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '50px',
  });

  observer.observe(galleryRef.lastElementChild);
}