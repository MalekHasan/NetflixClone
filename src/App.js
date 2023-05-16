import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"
import Home from './components/Home.js';
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import Header from './components/Header';
import FavList from './components/FavList';

function App() {
  return (
    <HashRouter>
          <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favlist' element={<FavList/>}/>
        </Routes>
    </HashRouter>

  );
}

export default App;
