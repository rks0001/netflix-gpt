import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); 
const navigate = useNavigate(); 
const dispatch = useDispatch(); 

  const name = useRef(null); 
  const email = useRef(null); 
  const password = useRef(null); 

  const handleButtonClick =()=>{
    //  Validate the form data
    const message =  checkValidData(!isSignInForm ? name.current.value : null, email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return ; 

    if(!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/68643543?v=4"
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({
        uid:uid, email:email, displayName:displayName, photoURL:photoURL
      })); 
      navigate("/browse")
    }).catch((error) => {
     setErrorMessage(error.message); 
    });
    console.log(user);
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
    
  });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse"); 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +""+ errorMessage)
  });
    }
  }

  const toggleSignInForm =() =>{   
    setIsSignInForm(!isSignInForm);
  }

  
  return (
    <div >
       <Header/>
       <div className="absolute w-full h-full  ">
           <img className="w-full h-full bg-cover md:bg-contain" alt="netflix-bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
       </div>
       <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute w-4/12 bg-black mx-auto right-0 left-0 text-white my-36 bg-opacity-80 rounded-md'>
         <h1 className='font-bold text-3xl py-4 '>{isSignInForm? "Sign In" : "Sign Up" } </h1>
{!isSignInForm &&  <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-[#333] rounded-md'/>}

         <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <p className='text-red-500 font-bold text-md'>{errorMessage}</p>
         <button className='p-4 my-6 bg-[#e50914] w-full rounded-md font-bold text-md' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up" }</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already a User? Sign In" }</p>
       </form>
   </div>
   
 
   
  )
}

export default Login