import React from "react";
import Products_list_page from "../components/Products list page/Products_list_page";
import Product_details_page from "../components/Product details page/Product_details_page";
import Cart_page from "../components/Cart Page/Cart_page";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products_list_page />}></Route>
        <Route path="/product_details_page" element={<Product_details_page />}></Route>
        <Route path="/cart_page" element={<Cart_page />}></Route>     
      </Routes>
    </div>
  );
}

export default AllRoutes;
