import './layout.css';

import Navigation from '../Navigation';

const Layout = props => (
  <div className='site-layout'>
    <Navigation />
    <div className='site-main-content'>{props.children}</div>
  </div>
);

export default Layout;
