import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Header = ({ total, currentSort, handleSort }) => {
  const getTitle = () => {
    if (currentSort === 'bestMatch') return 'Best Match';
    if (currentSort === 'salePrice.asc') return 'Price Low to High';
    return 'Price High to Low';
  };

  const title = getTitle();

  const handleClick = (name) => {
    if (name === currentSort) return;
    handleSort(name);
  };

  return (
    <div className='d-flex justify-content-between align-items-center m-2'>
      <div>{total} products</div>
      <div className='searched-products-header-sort'>
        Sort By:
        <DropdownButton id='dropdown-basic-button' title={title}>
          <Dropdown.Item
            onClick={(e) => handleClick(e.currentTarget.name)}
            name={'bestMatch'}
            active={currentSort === 'bestMatch'}
          >
            Best Match
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => handleClick(e.currentTarget.name)}
            name={'salePrice.asc'}
            active={currentSort === 'salePrice.asc'}
          >
            Price Low to High
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => handleClick(e.currentTarget.name)}
            name={'salePrice.desc'}
            active={currentSort === 'salePrice.desc'}
          >
            Price High to Low
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

Header.propTypes = {
  total: PropTypes.number,
  currentSort: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
};

export default Header;
