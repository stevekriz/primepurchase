import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { history } from '../../index';
import { getProduct } from '../../clients/product';
import './index.css';

import Header from './Header';
import Products from './Products';
import Pagination from '../../components/Pagination';

const SearchedProducts = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const search = params.get('search');
  const page = params.get('page');
  const sort = params.get('sort');
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState('bestMatch');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [location.search]);

  const getUrlSearchParams = () => {
    setCurrentPage(Number(page) || 1);
    setCurrentSort(sort || 'bestMatch');
    return { search, page, sort };
  };

  const fetchProducts = async () => {
    try {
      const { search, page, sort } = getUrlSearchParams();
      const attributes = { search };
      const params = { page, sort };
      const searchResults = await getProduct({
        params,
        attributes,
        type: 'search',
      });
      setProducts(searchResults.products);
      setIsLoading(false);
      if (total !== searchResults.total) setTotal(searchResults.total);
    } catch (err) {
      // TO DO: Handle Error
    }
  };

  const handlePageChange = page => {
    const params = new URLSearchParams(location.search);
    if (params.has('page')) params.delete('page');
    if (page && page !== 1) params.set('page', page);
    const url = `${location.pathname}?${params.toString()}`;
    history.push(url);
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleSort = name => {
    const params = new URLSearchParams(location.search);
    if (params.has('page')) params.delete('page');
    if (name && name !== 'bestMatch') params.set('sort', name);
    else params.delete('sort');
    const url = `${location.pathname}?${params.toString()}`;
    history.push(url);
    setCurrentPage(1);
    setCurrentSort(name);
  };

  return (
    <div>
      {total ? (
        <div className='searched-products'>
          <Header
            total={total}
            currentSort={currentSort}
            handleSort={handleSort}
          />
          <Products products={products} search={search} />
          <Pagination
            items={total}
            pageSize={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        !isLoading && <div>{`No products found for ${search}`}</div>
      )}
    </div>
  );
};

SearchedProducts.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchedProducts;
