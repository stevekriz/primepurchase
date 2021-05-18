import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import Truncate from 'react-truncate';
import { history } from '../../index';
import { getProduct } from '../../clients/product';
import { priceFormatter } from '../../utils/priceFormatter';
import './index.css';

import Rating from '../../components/Ratings';
import ProductImages from './ProductImages';

const initialState = {
  name: '',
  modelNumber: '',
  sku: '',
  images: [],
  activeProductImageIndex: null,
  rating: 0,
  truncated: false,
  expanded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const ProductDetails = ({ match }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const sku = match.params.id;
        const attributes = { sku };
        const productDetails = await getProduct({ attributes });
        dispatch({ type: 'update', payload: productDetails });
      } catch (err) {
        if (err.response && err.response.status === 404)
          history.replace('/not-found');
      }
    };
    fetchProduct();
  }, []);

  const regularPriceClass = classNames({
    'strike-through': state.currentPrice < state.regularPrice,
  });

  const salePriceClass = classNames('sale-price', {
    'no-display': state.currentPrice >= state.regularPrice,
  });

  const decodeHTML = html => {
    const el = document.createElement('textarea');
    el.innerHTML = html;
    return el.value;
  };

  const handleTruncate = truncated => {
    if (state.truncated !== truncated) {
      dispatch({ type: 'update', payload: { truncated } });
    }
  };

  const toggleExpand = e => {
    e.preventDefault();
    dispatch({ type: 'update', payload: { expanded: !state.expanded } });
  };

  return (
    <div className='product-details'>
      <div>
        <Button variant='link' onClick={history.goBack}>
          Back
        </Button>
      </div>
      <div className='product-container tile'>
        <div className='product-left'>
          <h1 title={state.name}>{state.name}</h1>
          <div className='product-model-sku'>
            <span>
              <b>Model:</b> {state.modelNumber}
            </span>
            <span>
              <b>SKU:</b> {state.sku}
            </span>
          </div>
          <Rating rating={state.rating} ratingCount={state.ratingCount} />
          <ProductImages name={state.name} images={state.images} />
        </div>
        <div className='product-right'>
          <div className='product-price'>
            <span className={salePriceClass}>
              {state.currentPrice && priceFormatter.format(state.currentPrice)}
            </span>
            <span className={regularPriceClass}>
              {state.regularPrice && priceFormatter.format(state.regularPrice)}
            </span>
          </div>
          <Truncate
            lines={!state.expanded && 5}
            ellipsis={
              <span className='read-more'>
                ...{' '}
                <button className='btn btn-link' onClick={toggleExpand}>
                  More
                </button>
              </span>
            }
            className='product-description'
            onTruncate={handleTruncate}
          >
            {state.description && decodeHTML(state.description)}
          </Truncate>
          <div>
            {state.expanded && (
              <button className='btn btn-link' onClick={toggleExpand}>
                Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
