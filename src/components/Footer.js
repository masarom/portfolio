import { NavLink } from 'react-router-dom';
import '../styles/layout/Footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__arrow'>
        <Link className='footer__arrow--link' to='#home'><i className='fa-solid fa-arrow-up'></i></Link>
      </div>
      <section className='footer__menu'>
        <nav>
          <ul className='footer__menu--list'>
            <li className='item'>
              <NavLink className='item__contact' to={'/contact'}>
                Contact <i className='item__icon fa-solid fa-envelope'></i>
              </NavLink>
            </li>
            <li className='item'>
              <a href='https://github.com/masarom' className='item__link' target='_blank' rel='noreferrer'>
                <span className='item__link--text'>GitHub</span> <i className='item__icon fa-brands fa-github-alt'></i>
              </a>
            </li>
            <li className='item'>
              <a
                href='https://www.linkedin.com/in/maria-sanchez-roman/'
                className='item__link'
                target='_blank'
                rel='noreferrer'
              >
                <span className='item__link--text'>LinkedIn</span>{' '}
                <i className='item__icon fa-brands fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className='footer__copy'>
        <small>
          &copy; María Sánchez{' '}
          <a href='https://github.com/masarom' className='footer__copy--link author'>
            @masarom
          </a>
        </small>
        <small>
          <a
            className='footer__copy--link ref'
            href='https://www.vecteezy.com/free-vector/web-developer'
            target='_blank'
            rel='noreferrer'
          >
            Web Developer Vectors by Vecteezy
          </a>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
