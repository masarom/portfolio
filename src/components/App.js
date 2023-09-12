import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      {/* <Route path='/Projects' element={<Projects />}></Route> */}
    </Routes>
      <Header />
      
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
