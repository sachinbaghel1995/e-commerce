import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

const MainNavigation=()=>{
return (
    
<header className={classes.header}>
    <nav>
      <h3 className={classes.logo}>E-commerce</h3>
        <ul className={classes.list}>
        <li><NavLink to='/products'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/store'>Store</NavLink></li>
          <li><NavLink to='/contactus'>Contact Us</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
    </nav>
</header>
   
)
}
export default MainNavigation