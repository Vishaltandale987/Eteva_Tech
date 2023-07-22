import React from "react";
import "./Product_details_page.css"
import { Button } from "@chakra-ui/react";
function Product_details_page() {

  let data = JSON.parse(localStorage.getItem("Product_details"))


  let cart_data = JSON.parse(localStorage.getItem("cart")) || [];


  const handle_add_to_cart = () => {
    cart_data.push(data)

    localStorage.setItem("cart", JSON.stringify(cart_data))
    // window.location.reload(false);
  }

  return (
    <div id="Product_details_page_parent">
      <img src={data.image} alt="" className="images" />

      <div className="text">
        <p>
          {" "}
          <b> Name of product - </b> {data.name}
        </p>
        <p>
          {" "}
          <b>Price</b> - ₹{data.price}
        </p>
        <p>
          {" "}
          <b>Quantity</b> - {data.quantity}
        </p>
      </div>

      <Button colorScheme='whatsapp' className="button" onClick={handle_add_to_cart}>Add To Cart</Button>
    </div>
  );
}

export default Product_details_page;
