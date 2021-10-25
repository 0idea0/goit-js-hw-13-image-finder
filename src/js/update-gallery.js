import galleryTpl from '../templates/gallery-item.hbs';
import { galleryRef } from './refs.js';

function updateGallery(hits) {
    const markup = galleryTpl(hits);

    galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default updateGallery;

