import './App.css';
import Home from './views/public/home/Home';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
