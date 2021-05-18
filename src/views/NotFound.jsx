import { history } from '../index';
import { Jumbotron, Button } from 'react-bootstrap';

const NotFound = () => (
  <Jumbotron id='not-found'>
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <p>Sorry, an error has occurred. The requested page was not found!</p>
    <Button variant='primary' size='lg' onClick={() => history.push('/')}>
      <i className='fa fa-home' /> Take Me Home{' '}
    </Button>{' '}
    <Button href='mailto:steve.kriz@gmail.com' variant='outline-dark' size='lg'>
      <i className='fa fa-envelope' /> Contact Support{' '}
    </Button>
  </Jumbotron>
);

export default NotFound;
