import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import "./Cart_page.css";
import { DeleteIcon } from "@chakra-ui/icons";


function Cart_page() {
// const [indexss, setindexss] = useState()
// console.log(indexs,"indexs")
  let cart_data = JSON.parse(localStorage.getItem("cart")) || [];



const delete_handle = (indexss) => {

  let aaa = cart_data.filter((el,index) => index !== indexss);
  localStorage.setItem("cart", JSON.stringify(aaa))
  

  
}

  



  




  let totallength = cart_data.length;

  let totalSum = 0;

  const handle_sum = (cart_data) => {

    for (let i = 0; i < totallength; i++) {
      totalSum += cart_data[i].price;
    }

      
  };

  handle_sum(cart_data)
  


  // console.log(totalSum,"totalSum")

  return (
    <div className="Cart_page_BOX">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th isNumeric>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart_data?.map((el, index) => {
              return (
                <Tr key={index}>
                  <Td>{el.name}</Td>
                  <Td>₹{el.price}</Td>
                  <Td isNumeric >{el.quantity}</Td>
                </Tr>
              );
            })}
            <Tr>
              <Td></Td>
              <Td>Total ₹{totalSum}</Td>
              <Td isNumeric></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cart_page;
