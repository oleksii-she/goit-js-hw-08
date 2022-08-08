// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//! бібліотека  "simplelightbox"
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryCards = document.querySelector('.gallery');

// добавляємо фотокартки в нашу галерею
const imgConteiner = creatImgCards(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', imgConteiner);

// функція імпортує зображення galleryItems, в штмл
function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`;
    })
    .join('');
}

let galleryItems = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
