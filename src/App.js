
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Login from './login/Login';
import ProductList from './productlist/ProductList';
import MainPage from './main/MainPage';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/main" element={<MainPage/>} />
      <Route exact path="/productlist" element={<ProductList />} />
    </Routes>
  );
}

export default App;
