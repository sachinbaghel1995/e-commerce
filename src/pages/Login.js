import { useContext, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Login.module.css'
import { AuthContextProvider } from '../components/Context/Login-context'

const Login=()=>{
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const [loginAccount, setCreateAccount] = useState(true)
    const loginCtx=useContext(AuthContextProvider)
    const navigate =useNavigate()

    const createAccountHandler = () => {
        setCreateAccount((previousState) => {
          return !previousState;
        });
      };

    const submitHandler= async (event)=>{
     event.preventDefault()
     const enteredEmail=emailInputRef.current.value
     const enteredPassword=passwordInputRef.current.value

     let url;

     if (loginAccount) {
       url =
         'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_3vLdPlpdihYMHPOHbeCzUErLKafqC2U';
     } else {
       url =
         'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_3vLdPlpdihYMHPOHbeCzUErLKafqC2U';
     }
    try {
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await res.json();
  
        if (res.ok) {
          navigate('/products');
          const convertedData = JSON.stringify(data);
          return res.json()
        } else {
          throw new Error(data.error.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    
    return (
        <section className={classes.auth}>
           <form className={classes.form} onSubmit={submitHandler}>
           <div className={classes.control}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email'  ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'> Password</label>
        <input type='password' id='password' minLength='6' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button type='submit'>{loginAccount ? 'Login' : 'Create Account'}</button>
      </div>
      <p onClick={createAccountHandler}>
          {loginAccount
            ? 'Create a new Account'
            : 'Login with existing account'}
        </p>
    </form>
        </section>
    )
}
export default Login