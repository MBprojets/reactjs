import './App.css';
import Home from './views/public/home/Home';
import Article from './views/public/article/Article';
import Actualite from './views/public/actualite/Actualite';
import Navigation from './components/navigation/Navigation';
import Contact from './views//public/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/actualite" element={<Actualite/>}/>
        <Route exact path="/article" element={<Article/>}/>
        <Route exact path="/contact" element={<Contact/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
