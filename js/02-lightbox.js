import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));


  const lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
  });
