import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CustomerSupport from "./components/CustomerSupport";
import Footer from "./components/Footer";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

import HomePage from "./pages/HomePage";

import Product from "./pages/Product";
import Head from "./components/Head";
import Profile from "./pages/Profile";
import Homepagel from "./pages/Homepagel";
import Signup from "./pages/Signup";
import ArcOfRings from "./components/ArcOfRings";
import Whislist from "./pages/Whislist";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Buyp from "./pages/Buyp";
import Rings from "./pages/Rings.js";
import Necklaces from "./pages/Necklaces.js";
import Earrings from "./pages/Earrings.js";
import Bracelets from "./pages/Bracelets.js";
import ForgetPass from "./pages/ForgetPass.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/products/rings" element={<Rings />}></Route>
        <Route path="/products/necklaces" element={<Necklaces />}></Route>
        <Route path="/products/earrings" element={<Earrings />}></Route>
        <Route path="/products/bracelets" element={<Bracelets />}></Route>
        <Route path="/products/:productId" element={<Product />}></Route>

        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/Homepagel" element={<Homepagel />}></Route>
        <Route path="/Whislist" element={<Whislist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/Buyp" element={<Buyp />}></Route>
        <Route path="login/resetpassword" element={<ForgetPass />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
