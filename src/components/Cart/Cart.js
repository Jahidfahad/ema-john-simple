import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price, 0);


  let shipping = 0
  if(total>35){
    shipping = 0;
  }else if(total>15){
      shipping = 4.99
  }else if(total>0){
      shipping = 12.99
  }
  const tax = total/10;
  const formatNumber = num =>{
      const precision = num.toFixed(2)
      return precision
  }
  return (
      
    <div>
      <h3>Order summary</h3>
      <h5>Items Ordered: {cart.length}</h5>
      <p>Product Price: ${formatNumber(total)}</p>
      <p><small>Shipping: ${formatNumber(shipping)}</small></p>
      <p>Tax + VAT: ${formatNumber(tax)}</p>
      <h4>Total Price: ${formatNumber(total+shipping+tax)}</h4>
    </div>
  );
};

export default Cart;
