import ProductForm from "./ProductForm";
import { useContext } from "react";
import CartContext from "../Context/cart-context";
import classes from "./ProductItem.module.css"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductItem=(props)=>{
    const cartCtx = useContext(CartContext);
   
    const addToCartHandler = amount => {
              cartCtx.addProduct({
                product: props.product,
                amount: amount,
                price: props.price,
                imagrUrl:props.imagrUrl
              });
            };
return (
        
    <>
  
  <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Img className={classes.image} src={props.imageUrl}/>
          <Card.Body>
          
              <Card.Text>
           <h3 className={classes.products}>{props.product}</h3>
           <div className={classes.amount}>{props.amount}</div>
           <div className={classes.price}>{props.price}</div>

        <ProductForm onAddToCart={addToCartHandler}/>
        </Card.Text>
            
        </Card.Body>
       </Card>
        </Col>
      ))}
    </Row>
        
       
        
    
 </>
)
}
export default ProductItem

