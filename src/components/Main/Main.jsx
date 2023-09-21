import './Main.scss';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Main = () => {
  return (
    <main className='main' id='home'>
      <Hero />
      <Projects />
    </main>
  );
};

export default Main;
