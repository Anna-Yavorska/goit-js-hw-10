import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const URL = 'https://api.thecatapi.com/v1/images/search';
const KEY ='live_toQAWj8TOm7NfhqHy6zCvDrT8oYjEhfAugXikFlB3vDZJQCY9tlAGCoEe7b1jXd4';
  
axios.defaults.headers.common['x-api-key'] = KEY;

export function fetchBreeds() {
  return axios.get(BASE_URL);
};

export function fetchCatByBreed(breedId) {
  return axios.get(`${URL}?breed_ids=${breedId}`);
};
