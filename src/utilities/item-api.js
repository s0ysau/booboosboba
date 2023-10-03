// import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  // return sendRequest(BASE_URL);
  return BASE_URL;
}

export function getById(id) {
  // return sendRequest(`${BASE_URL}/${id}`);
  return `${BASE_URL}/${id}`;
}