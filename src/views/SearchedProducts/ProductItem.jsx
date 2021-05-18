import React from 'react';
import classNames from 'classnames';
import { priceFormatter } from '../../utils/priceFormatter';

const ProductItem = ({ product }) => {
  const regularPriceClass = classNames({
    'strike-through': product.currentPrice < product.regularPrice,
  });

  const salePriceClass = classNames('sale-price', {
    'no-display': product.currentPrice >= product.regularPrice,
  });

  return (
    <div className='item'>
      <div className='item-image'>
        <img alt={`${product.name}`} src={product.image} />
      </div>
      <div className='item-info'>
        <div className='item-name'>
          <a href={`products/${product.sku}`}>{product.name}</a>
        </div>
        <div className='item-model-sku'>
          <span>
            <b>Model: </b>
            {product.modelNumber}
          </span>
          <span>
            <b>SKU: </b>
            {product.sku}
          </span>
        </div>
      </div>
      <div className='item-price'>
        <span className={salePriceClass}>
          {priceFormatter.format(product.currentPrice)}
        </span>
        <span className={regularPriceClass}>
          {priceFormatter.format(product.regularPrice)}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
