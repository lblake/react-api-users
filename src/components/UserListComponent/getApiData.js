import axios from 'axios';

export default async function getApiData() {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
