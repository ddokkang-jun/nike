import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Home from "./Pages/Home.js";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart.js";
import { useEffect } from "react";
import data from "./data";
import { useDispatch } from "react-redux";
import { setKidsCloth, setKidsShoes, setMenCloth, setMenShoes, setProducts, setWomenCloth, setWomenShoes } from "./Store/productSlice";
import Men from './Pages/Men';
import menShoesData from './Data/menShoesData';
import menClothData from './Data/menClothData';
import womenShoesData from './Data/womenShoesData';
import womenClothData from './Data/womenClothData';
import kidsShoesData from './Data/kidsShoesData';
import kidsClothData from './Data/kidsClothData';
import ProductAll from './Pages/ProductAll';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
    dispatch(setMenShoes(menShoesData));
    dispatch(setMenCloth(menClothData));
    dispatch(setWomenShoes(womenShoesData));
    dispatch(setWomenCloth(womenClothData));
    dispatch(setKidsShoes(kidsShoesData));
    dispatch(setKidsCloth(kidsClothData));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productAll/:id' element={<ProductAll />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='*' element={<div>404없는페이지임</div>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/men' element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
