import { PixabayApiService } from './js/pixabay-api.js';
import { createMarkup, Loader, LoadMore } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  searchForm: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('button[data-load="load-more"]'),
};

const pixabayApiService = new PixabayApiService();

refs.searchForm.addEventListener('submit', handleSubmitForm);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

async function handleSubmitForm(event) {
  event.preventDefault();
  let inputValue = event.target.elements.query.value.trim();
  Loader.show();
  //Validate input
  if (inputValue === '') {
    iziToast.show({
      message: 'Поле не может быть пустым',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
    return;
  }
  if (inputValue.length > 100) {
    iziToast.show({
      message: 'Поле не может быть больше 100 символов',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
  }
  //End Validate

  inputValue = inputValue.split(' ')
    .join('+');
  pixabayApiService.query = inputValue;
  pixabayApiService.resetPage();
  refs.gallery.innerHTML = '';
  const articles = await pixabayApiService.fetchArticles();
  if (!articles.hits.length) {
    iziToast.show({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
  } else {
    Loader.hide();
    LoadMore.show();
    refs.gallery.insertAdjacentHTML('afterbegin', createMarkup(articles.hits));
    gallery.refresh();
  }
}

async function handleLoadMore() {
  Loader.show();
  LoadMore.disabled();
  const articles = await pixabayApiService.fetchArticles();
  if (articles.hits.length === 0) {
    Loader.hide();
    LoadMore.hide();
    iziToast.show({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
    return;
  }

  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(articles.hits));
  gallery.refresh();
  Loader.hide()
  LoadMore.activate();
}
