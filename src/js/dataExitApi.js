import axios from 'axios';
import { pagination } from './pagination.js';
import { reportError } from './reports.js';
import { hideLoadMessage } from './loader.js';

// getting API and key

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38329464-2d1c971fb60ebb53783c84d62';
let searchQuery = '';
let currentPage = 1;
let total = null;
let firstSearch = true;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: `${API_KEY}`,
    q: `searchQuery`,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    page: `1`,
    per_page: 40,
  },
});

export async function getTrending(page = 1, inputData, refs) {
  try {
    const options = { params: { ...api.defaults.params, q: inputData, page } };
    const response = await api.get('/', options);
    return response.data;
  } catch (error) {
    throw reportError;
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
}
