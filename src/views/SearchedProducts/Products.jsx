import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.sku} product={product} />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
