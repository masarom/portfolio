import '../styles/layout/Main.scss';
import MainHero from './MainHero';
import Projects from './Projects';

const Main = () => {
  return (
    <main className='main' id='home'>
      <MainHero />
      <Projects />
    </main>
  );
};

export default Main;
