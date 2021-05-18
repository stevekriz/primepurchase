import PropTypes from 'prop-types';
import _ from 'lodash';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import '../views/SearchedProducts';

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const getPages = () => {
    const totalPages = Math.ceil(items / pageSize);
    let startPage;
    let endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    const pages = _.range(startPage, endPage + 1);
    return { pages, totalPages };
  };

  const { pages, totalPages } = getPages();

  const setPage = page => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <BootstrapPagination id='pagination'>
      <BootstrapPagination.First
        onClick={() => setPage(1)}
        disabled={currentPage === 1}
      />
      <BootstrapPagination.Prev
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pages.map(page => (
        <BootstrapPagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => setPage(page)}
        >
          {page}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <BootstrapPagination.Last
        onClick={() => setPage(totalPages)}
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  );
};

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  pageSize: 10,
};

export default Pagination;
