import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, stock, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>Price: ${price}</p>
        <br />
        <p>Only {stock} left in stock - order soon</p>
        <button onClick={()=>props.handleAddProduct(props.product)} className="add-to-cart-button"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
