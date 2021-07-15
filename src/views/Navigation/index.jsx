import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { history } from '../../index';
import logo from '../../assets/img/logo.png';
import './navigation.css';

const Navigation = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) history.push(`/products?search=${search}`);
  };

  return (
    <Navbar
      variant='dark'
      expand='sm'
      id='primepurchase-navbar'
      className='primary-color'
    >
      <Navbar.Brand>
        <a href='/'>
          <img height='180' width='180' alt='PrimePurchase Logo' src={logo} />
          PrimePurchase
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' />
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            className='mr-sm-2'
            type='text'
            placeholder='Find a product'
            aria-label='product search'
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Button type='submit' variant='outline-light'>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
