import { NavLink } from 'react-router-dom';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <NavLink to='/'>
          <div className='header__logo'></div>
        </NavLink>
        <section className='header__menu'>
          <ul className='header__menu--list'>
            <li className='item'>
              <NavLink className='item__contact' to={'/contact'}>
                Contact <i className='item__icon fa-solid fa-envelope'></i>
              </NavLink>
            </li>
            <li className='item'>|</li>
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
        </section>
      </div>
    </header>
  );
};

export default Header;
