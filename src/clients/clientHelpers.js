import _ from 'lodash';

export const generateProductQuery = (attributes) => {
  let productQuery = '';
  if (_.isPlainObject(attributes) && !_.isEmpty(attributes)) {
    for (const key in attributes) {
      productQuery += `${key}=${attributes[key]}&`;
    }
    productQuery = `(${productQuery.slice(0, -1)})`;
  }
  return productQuery;
};

export const getSingleProductView = (data) => {
  const { products } = data;
  const {
    alternateViewsImage,
    backViewImage,
    customerReviewAverage,
    customerReviewCount,
    image,
    leftViewImage,
    longDescription,
    modelNumber,
    name,
    regularPrice,
    rightViewImage,
    salePrice,
    sku,
    topViewImage,
  } = products[0];
  const images = [
    alternateViewsImage,
    backViewImage,
    image,
    leftViewImage,
    rightViewImage,
    topViewImage,
  ].reduce((acc, img) => {
    if (img) acc.push(img);
    return acc;
  }, []);
  return {
    currentPrice: salePrice,
    description: longDescription,
    images,
    modelNumber,
    name,
    rating: parseInt(customerReviewAverage),
    ratingCount: customerReviewCount,
    regularPrice,
    sku,
  };
};

export const getSearchView = (data) => {
  const { products, total } = data;
  const productShapes = products.map((p) => {
    const {
      customerReviewAverage,
      customerReviewCount,
      image,
      modelNumber,
      name,
      regularPrice,
      salePrice,
      shortDescription,
      sku,
    } = p;
    return {
      currentPrice: salePrice,
      description: shortDescription,
      image,
      modelNumber,
      name,
      rating: parseInt(customerReviewAverage),
      ratingCount: customerReviewCount,
      regularPrice: regularPrice,
      sku,
      total,
    };
  });
  return { total, products: productShapes };
};

export const getFeaturedView = (data) => {
  const { results } = data;
  return results.map((p) => {
    const { names, prices, images, descriptions, customerReviews, sku } = p;
    return {
      currentPrice: prices.current,
      description: descriptions.short,
      image: images.standard,
      name: names.title,
      rating: parseInt(customerReviews.averageScore),
      ratingCount: customerReviews.count,
      regularPrice: prices.regular,
      sku,
    };
  });
};
