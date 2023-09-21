import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/projects' element={<Main />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
