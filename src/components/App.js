import { Link } from 'react-router-dom';
import '../styles/App.scss';

function App() {
  return (
    <>
      <header className='header'>
        <div className='header__logo'></div>
        <section className='header__menu'></section>
      </header>
      <main className="main">
        <section className='main__hero'>
          <div className="main__hero--img"></div>
          <div className="main__hero--text">
            <h1>Full-Stack developer specialising in Front-end development</h1>
            <h2>Welcome! I am María Sánchez, a passionate web developer based on Madrid (Spain).</h2>
            <p>
              Since 2022, I've been expanding my programming skills on my own with{' '}
              <a href='https://www.freecodecamp.org/mariasanchez' target='_blank' rel='noreferrer'>
                freeCodeCamp
              </a>
              , {}
              <a href='https://www.codewars.com/users/masarom' target='_blank' rel='noreferrer'>
                CodeWars
              </a>
              , and so on. In 2023, I attended the adalab full-stack web programming bootcamp.
            </p>
            <p>Check all my past and present projects below.</p>
          </div>
        </section>
        <section className='contact'>
          <a href='#linkedin'>LinkedIn</a>
          <a href='#github'>GitHub</a>
          <a href='mailto:romansanmaria@gmail.com'>Email</a>
        </section>
        <section className='projects'>
          <Link to={'/freecodecamp-projects'}>freeCodeCamp Projects (2022-2023)</Link>
          <Link to={'/adalab-projects'}>Adalab Web Programming Bootcamp Projects (2023)</Link>
          <Link to={'/current-project'}>Current Project (2023)</Link>
        </section>
      </main>
      <footer className="footer">
        <small>&copy;María Sánchez @masarom</small>
        <small>
          <a href='https://www.vecteezy.com/free-vector/web-developer'>Web Developer Vectors by Vecteezy</a>
        </small>
      </footer>
    </>
  );
}

export default App;
