import axios from 'axios';

export default async function getApiData() {
  return await axios.get(`https://jsonplaceholder.typicode.com/users`);
}
