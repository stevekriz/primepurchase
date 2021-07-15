import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Ratings = (props) => (
  <div>
    {[...Array(props.numberOfStars).keys()].map((s, index) => (
      <span
        key={index}
        className={classNames('fa fa-star review-stars', {
          'stars-checked': props.rating > index,
        })}
      ></span>
    ))}
    <span className='review-counts'>{`(${
      props.ratingCount || 0
    } Reviews)`}</span>
  </div>
);

Ratings.defaultProps = {
  numberOfStars: 5,
  rating: 0,
  ratingCount: 0,
};

Ratings.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
};

export default Ratings;
