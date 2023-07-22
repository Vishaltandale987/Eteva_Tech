import React from 'react'
import  "./Products_list_page.css"
import { NavLink } from 'react-router-dom';
function Product_Inventry({data}) {

    let jsonData = JSON.stringify(data);

  return (
    <NavLink to="/product_details_page">

    <div className='Product_Inventry_box' onClick={() => {
        localStorage.setItem("Product_details",jsonData)
    }}>
      <img src={data.image} alt="" className='images' />

      <div className='text'>

      <p> <b>  Name of product - </b> {data.name}</p>
      <p> <b>Price</b> - ₹{data.price}</p>

      </div>
    </div>
  </NavLink>
  )
}

export default Product_Inventry
