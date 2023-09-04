import { Link } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import '../styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Main />
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
