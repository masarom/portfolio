import { Link } from 'react-router-dom';
import '../styles/layout/MainHero.scss';

const MainHero = () => {
  return (
    <section className='main__hero'>
      <div className='main__hero--text'>
        <h1 className='title'>
          <span className='title--accent'>Front-end developer</span> soon-to-be Full-Stack developer
        </h1>
        <h2 className='intro'>
          Welcome! I am <span className='intro--accent'>María Sánchez</span>, a passionate web developer based in Madrid
          (Spain).
        </h2>
      </div>
      <div className='main__hero--desc'>
        <p className='paragraph'>
          Since 2022, I've been expanding my programming skills on my own with{' '}
          <a className='desc--link' href='https://www.freecodecamp.org/mariasanchez' target='_blank' rel='noreferrer'>
            freeCodeCamp
          </a>
          , {}
          <a className='desc--link' href='https://www.codewars.com/users/masarom' target='_blank' rel='noreferrer'>
            CodeWars
          </a>
          , and so on. In 2023, I attended the{' '}
          <a className='desc--link' href='https://adalab.es/bootcamp-programacion/' target='_blank' rel='noreferrer'>
            Adalab full-stack web programming bootcamp
          </a>
          .
        </p>
        <p className='paragraph'>Check all my past and present projects below.</p>
      </div>
        <hr className='line--through'/>
      <div className='main__hero--projects'>
        <a href='#projects' className='link'>
          <p className='link__text'>
            <span className='link__text--decoration'>{'# '}</span>Projects
          </p>
          <i className='fa-solid fa-chevron-down'></i>
        </a>
      </div>
    </section>
  );
};

export default MainHero;
