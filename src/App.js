import Footer from './components/Footer';
import Form from './components/Form';
import Result from './components/Result';
import './index.scss';

function App() {
  return (
    <div className="wrapper" style={{ backgroundImage: "url(img/red-fone.png)" }}>
      <div className="container">
        <header className="header d-flex">
          <h1>SkinCancer<span>Stop</span></h1>
        </header>
        <Form />
        {false && <Result />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
