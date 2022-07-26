import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const[btnIsHighlighted,setBtnIsHighLighted]=useState(false)

  const {items}=cartCtx

  const numberOfCardItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const classButton=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(()=>{
    
    setBtnIsHighLighted(true);
    
    const timer=setTimeout(()=>{
      setBtnIsHighLighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
    
  },[items])



  return (
    <button className={classButton} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
