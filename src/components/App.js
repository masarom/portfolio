import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/projects' element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
