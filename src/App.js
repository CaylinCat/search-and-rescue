// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './Title';
import Selection from './Selection';
import SearchPage from './SearchPage';
import GamePage from './Game';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Title/>} />
          <Route path="/selection" element={<Selection/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/game" element={<GamePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
