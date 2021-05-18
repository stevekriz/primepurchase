import http from './http';
import {
  generateProductQuery,
  getSingleProductView,
  getSearchView,
  getFeaturedView,
} from './clientHelpers';

const productTypeUrl = {
  default: 'https://api.bestbuy.com/v1/products',
  search: 'https://api.bestbuy.com/v1/products',
  featured: 'https://api.bestbuy.com/beta/products/mostViewed',
};

const viewType = {
  default: getSingleProductView,
  search: getSearchView,
  featured: getFeaturedView,
};

export const getProduct = async ({
  params,
  attributes,
  type = 'default',
} = {}) => {
  const response = await http.get(
    `${productTypeUrl[type]}${generateProductQuery(attributes)}`,
    { params: { format: 'json', ...params } }
  );
  return viewType[type](response.data);
};

export default {
  getProduct,
};
