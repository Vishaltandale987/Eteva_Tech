import React, { useState } from 'react'
import  "./Products_list_page.css"


import products from'../../Product Data/Product_data.json'
import Product_Inventry from './Product_Inventry'
function Products_list_page() {
const [data, setdata] = useState(products.products)

  return (
    <div className='Products_list_page_parent'>
      {
        data.map((ele,index) => {
          return <div key={index} className='Products_list_page_chlid'>
          
          
          <Product_Inventry data={ele} />
          </div>
        })
      }
    </div>
  )
}

export default Products_list_page
