import { useParams } from "react-router-dom"
import classes from "./ProductDetail.module.css"

  const ProductDetail = (props) => {
    const { productId } = useParams();
    const productArr = [...props.products];
    const product = productArr.filter((item) => item.product === productId);
    const [...item] = product;
    console.log(item);
  
    return (
      <div className={classes.detail}>
        <div key={item.product}>
         
           
            <img className={classes.images} src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png'alt="album1" ></img>
         
          <div className={classes.det}>
          <h2 className={classes.heading}>Colors</h2>
          <div className={classes.productsdetails}>
            <span>$</span>
            <span>100</span>
          </div>
          </div>
        </div>
      </div>
    );
  };
export default ProductDetail