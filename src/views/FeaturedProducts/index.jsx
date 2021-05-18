import { useEffect, useState } from 'react';
import { getProduct } from '../../clients/product';
import './index.css';

import Product from './Product';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const featuredProducts = await getProduct({ type: 'featured' });
        setProducts(featuredProducts);
      } catch (err) {
        setError(
          err && err.message ? err.message : 'Failed to get featured products'
        );
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='main-content featured-products'>
      <h1>Featured Products</h1>
      <div className='product-container'>
        {!error ? (
          products.map(product => <Product key={product.sku} {...product} />)
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
