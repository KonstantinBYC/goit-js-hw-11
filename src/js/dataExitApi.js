import axios from 'axios';
import { pagination } from './pagination.js';
import { notifyError } from './reports.js';
import { hideLoadMessage } from './loader.js';

const totalPerPage = pagination[0].totalPerPage;

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38329464-2d1c971fb60ebb53783c84d62';
let searchQuery = '';
let currentPage = 1;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    q: searchQuery,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: 'true',
    page: '1',
    per_page: `${totalPerPage}`,
  },
});

export async function getTrending(page = 1, inputData, refs) {
  try {
    const options = { params: { ...api.defaults.params, q: inputData, page } };
    const response = await api.get('/', options);
    console.log(response.data);
    return response;
  } catch (error) {
    notifyError(error, refs);
    hideLoadMessage(refs);
  }
}
// функція для оновлення пошукового запиту
export function setSearchQuery(newQuery) {
  searchQuery = newQuery;
}

// Функція для переходу до наступної сторінки
export function nextPage() {
  currentPage = currentPage + 1;
  return getImages();
}

// Функція для скидання номера сторінки до 1
export function resetPage() {
  currentPage = 1;
  hideLoadMessage();
}
