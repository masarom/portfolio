import { Link } from "react-router-dom";
import '../styles/layout/Main.scss';
import MainHero from "./MainHero";

const Main = () => {
  return (
    <main className='main'>
      <MainHero />
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
  );
}

export default Main;