import {Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Productspage from "./Pages/ProductsPage/ProductList";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import MockApi from "./Pages/MockApi/MockApi";

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productspage" element={<Productspage />} />
        <Route path="/singleproductpage" element={<SingleProductPage />} />
        <Route path="/mock" element={<MockApi/>} />
      </Routes>
    </div>
  );
}

export default App;
