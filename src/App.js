import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Home from "./Pages/Home.js";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart.js";
import { useEffect } from "react";
import data from "./data";
import { useDispatch } from "react-redux";
import { setProducts } from "./Store/productSlice";
import Men from './Pages/Men';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='*' element={<div>404없는페이지임</div>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/men' element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
