import apiService from '../apiService.js';
import { galleryRef } from '../refs.js';

// Scroll to top of content (for loadmore button)
export default function scrollToNext() {
  if (galleryRef.children.length > apiService.perPage) {
    const { scrollTop, clientHeight } = document.documentElement;

    window.scrollTo({
      top: scrollTop + clientHeight,
    });
  }
}