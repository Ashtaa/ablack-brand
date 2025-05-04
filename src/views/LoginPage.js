// import Loader from '../components/FullPageLoader.js';
import {useState} from 'react';
import { auth } from '../firebase/config.js';
import {  createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from '../store/usersSlice.js';
import './login.css'

function LoginPage() {

  

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials,setuserCredentials] = useState({})
  const [error,seterror] =useState('')

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({id:user.uid, email:user.email}))
      
    } else {
      dispatch(setUser(null))
    }
    if(isLoading){setIsLoading(false)}
  });

function handleCredential(e){
  setuserCredentials({...userCredentials,[e.target.name]: e.target.value})
 
}

function handleSignup(e){
  e.preventDefault();
  seterror("")
  createUserWithEmailAndPassword(auth, userCredentials.email,userCredentials.password)
  
  .catch((error) => {
   
    seterror(error.message)
    
    // ..
  });

}
function handlelogin(e){
  e.preventDefault();
  signInWithEmailAndPassword(auth, userCredentials.email,userCredentials.password)
  .catch((error) => {
   
  seterror(error.message)
  
  // ..
});

} 
function handlepasswordreset(){
  const email = prompt('please enter your email')
  sendPasswordResetEmail(auth,email)
  alert('email sent chake youre inpox for reset')
}
    return (
      <>
        {/* { isLoading && <Loader></Loader> } */}
        
        <div className="form">
  <section className="login-page">
    <h1>Welcome to the ABLACK</h1>
    <p>Login or create an account to continue</p>
    <div className="login-type">
      <button
        className={`btn ${loginType == 'login' ? 'selected' : ''}`}
        onClick={() => setLoginType('login')}
      >
        Login
      </button>
      <button
        className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
        onClick={() => setLoginType('signup')}
      >
        Signup
      </button>
    </div>
    <form className="add-form login">
      <div className="form-control">
        <label>Email *</label>
        <input
          onChange={(e) => handleCredential(e)}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-control">
        <label>Password *</label>
        <input
          onChange={(e) => handleCredential(e)}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      {loginType == 'login' ? (
        <button onClick={(e) => handlelogin(e)} className="active btn btn-block">
          Login
        </button>
      ) : (
        <button onClick={(e) => handleSignup(e)} className="active btn btn-block">
          Sign Up
        </button>
      )}
      {error && <div className="error">{error}</div>}

      <p onClick={handlepasswordreset} className="forgot-password">
        Forgot Password?
      </p>
    </form>
  </section>
</div>

      </>
    )
  }
  
  export default LoginPage
  