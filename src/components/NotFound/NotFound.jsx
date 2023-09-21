import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='notfound'>
      <h2 className='notfound__text'>Oops! This page doesn't exist. Try going</h2>
      <Link to='/' className='notfound__link'>back home</Link>
    </section>
  );
};

export default NotFound;
