export function createMarkup(articles) {
  return articles.map(el => {
    return `
  <li class="gallery-item">
   <a href="${el.largeImageURL}">
   <img src="${el.webformatURL}"
        loading="lazy"
        alt="${el.tags}"
            >
       <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${el.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${el.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${el.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${el.downloads}</p>
         </li>
       </ul>
       </a>
  </li>`;
  })
    .join('');
}

export class Loader {
  static spinner = document.querySelector('.loader-backdrop');

  static show() {
    Loader.spinner.classList.remove('hidden');
  }

  static hide() {
    Loader.spinner.classList.add('hidden');
  }
}

export class LoadMore {
  static button = document.querySelector('button[data-load="load-more"]');

  constructor() {
  }

 static show() {
    LoadMore.button.classList.remove('hidden');
  }

 static hide() {
    LoadMore.button.classList.add('hidden');
  }

  static disabled() {
    LoadMore.button.disabled = true;
    LoadMore.button.classList.add('load-more_disabled');
  }
  static activate() {
    LoadMore.button.classList.remove('load-more_disabled');
    LoadMore.button.disabled = false;
  }
}