import { Loader } from './render-functions.js';
import axios from 'axios';
import iziToast from 'izitoast';

const API_KEY = '41512134-7ce1694d07a59eb7d39c787c8';

export class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchArticles() {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horisontal&safesearch=true&per_page=15&page=${this.page}`;
    try {
      const responce = await axios.get(url);
      this.increasePage();
      return responce.data;
    }
    catch (error) {
      iziToast.show({
        message: error.message,
        backgroundColor: '#fc3d03',
        messageColor: '#fff',
        close: false,
        progressBarColor: '#fff',
        position: 'topRight',
        timeout: 1000,
      });
    }
  }

  increasePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

}