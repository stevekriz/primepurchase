import classNames from 'classnames';
import PropTypes from 'prop-types';
import { priceFormatter } from '../../utils/priceFormatter';

const Product = ({
  sku,
  image,
  name,
  regularPrice,
  currentPrice,
  description,
}) => {
  const regularPriceClass = classNames({
    'strike-through': currentPrice < regularPrice,
  });

  const salePriceClass = classNames('sale-price', {
    'no-display': currentPrice >= regularPrice,
  });

  return (
    <div className='tile'>
      <a href={`/products/${sku}`} className='product-image'>
        <img alt={`${name}`} src={image} title={description} />
      </a>
      <div className='product-info'>
        <a href={`/products/${sku}`} className='product-name' title={name}>
          {name}
        </a>
        <div className='product-price'>
          <span className={salePriceClass}>
            {priceFormatter.format(currentPrice)}
          </span>
          <span className={regularPriceClass}>
            {priceFormatter.format(regularPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  sku: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  regularPrice: PropTypes.number,
};

export default Product;
