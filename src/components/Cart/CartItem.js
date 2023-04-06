const CartItem=(props)=>{
    const price=`$${props.price}`;

    return (
        <li>
<div>
    <img src={props.imageUrl}/>
    <span>{props.product} {price} {props.amount}</span>
    
</div>

        </li>
    )
}
export default CartItem