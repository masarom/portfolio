import '../styles/layout/MainHero.scss';
import { HashLink as Link } from 'react-router-hash-link';

const MainHero = () => {
  return (
    <section className='main__hero'>
      <section className='main__hero--text'>
        <h1 className='title'>
          <span className='title--accent'>Front-end developer</span> learning a bit more everyday
        </h1>
        <h2 className='intro'>
          Welcome! I am <span className='intro--accent'>María Sánchez</span>, a passionate web developer based in Madrid
          (Spain).
        </h2>
      </section>
      <section className='main__hero--desc'>
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
        <p className='paragraph'>
          Check all my past and present projects{' '}
          <Link to='/#projects' className='paragraph--link'>
            below
          </Link>{' '}
          🚀
        </p>
      </section>
      <section className='technologies'>
        <section className='main__hero--tech'>
          <h2 className='tech__title'>
            <span className='tech__title--decoration'>{'# '}</span>My Tech stack:
          </h2>
          <div className='container stack'>
            <div className='tech__icon--1' title='HTML5'></div>
            <div className='tech__icon--2' title='CSS3'></div>
            <div className='tech__icon--3' title='Sass'></div>
            <div className='tech__icon--4' title='Git'></div>
            <div className='tech__icon--5' title='Gulp'></div>
            <div className='tech__icon--6' title='JavaScript ES6'></div>
            <div className='tech__icon--7' title='React'></div>
            <div className='tech__icon--8' title='Jest'></div>
            <div className='tech__icon--9' title='Bootstrap'></div>
            <div className='tech__icon--10' title='MySql'></div>
            <div className='tech__icon--11' title='NodeJS'></div>
            <div className='tech__icon--12' title='express'></div>
            <div className='tech__icon--13' title='Postman'></div>
            <div className='tech__icon--14' title='mongoDB'></div>
            <div className='tech__icon--15' title='Figma'></div>
          </div>
        </section>
        <section className='main__hero--learn'>
          <h2 className='learn__title'>
            <span className='learn__title--decoration'>{'# '}</span>Currently improving:
          </h2>
          <div className='container learn'>
            <div className='learn__icon--1' title='TypeScript'></div>
            <div className='learn__icon--2' title='Jest'></div>
            <div className='learn__icon--3' title='React'></div>
          </div>
        </section>
      </section>
      <hr className='line--through' />
    </section>
  );
};

export default MainHero;
