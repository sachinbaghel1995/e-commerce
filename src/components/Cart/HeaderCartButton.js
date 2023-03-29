
import { useContext } from "react"
import CartContext from "../Context/cart-context"
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext)
    const numberOfCartItems=cartCtx.products.reduce((currNum,product)=>{
        return currNum+product.amount
    },0)
    return (
        
        <>
        <button className={classes.btn} onClick={props.onClick}>Cart
        <span >{numberOfCartItems}</span>
        </button>
        </>
        
        
    )
}
export default HeaderCartButton