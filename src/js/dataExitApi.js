import axios from 'axios';
import { pagination } from './pagination.js';
import { reportError } from './reports.js';
import { hideLoadMessage } from './loader.js';

// getting API and key

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38329464-2d1c971fb60ebb53783c84d62';
// //   amount imgs per one page
const totalPerPage = pagination[0];

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: `${API_KEY}`,
    // q: `${inputData}`,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    // page: `${page}`,
    per_page: totalPerPage,
  },
});

export async function getTrending(page = 1, inputData, refs) {
  try {
    const options = { params: { ...api.defaults.params, q: inputData, page } };
    const response = await api.get('/', options);
    return response.data;
  } catch (error) {
    throw reportError;
    hideLoadMessage(refs);
  }
}
