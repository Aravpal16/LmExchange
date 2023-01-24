
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Login from './login/Login';
import ProductList from './productlist/ProductList';

function App() {
  return (
      <Routes>
           <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/productlist" element={<ProductList/>} />
          
      </Routes> 
  );
}

export default App;
