import { Link } from 'react-router-dom';
import '../styles/layout/Main.scss';
import MainHero from './MainHero';
import Projects from './Projects';

const Main = () => {
  return (
    <main className='main'>
      <MainHero />
      <Projects />
    </main>
  );
};

export default Main;
