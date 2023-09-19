import axios from 'axios';

const fetchProducts = async (query) => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  return response.data.results;
};

export default fetchProducts;
