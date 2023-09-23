import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div >
       <Header/>
       <div className="w-full h-full absolute">
           <img className="w-full h-full " alt="netflix-bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
       </div>
       <form className='p-12 absolute w-4/12 bg-black mx-auto right-0 left-0 text-white my-36 bg-opacity-80 rounded-md'>
         <h1 className='font-bold text-3xl py-4 '>{isSignInForm? "Sign In" : "Sign Up" } </h1>
{!isSignInForm &&  <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-[#333] rounded-md'/>}

         <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <button className='p-4 my-6 bg-[#e50914] w-full rounded-md font-bold text-md'>{isSignInForm? "Sign In" : "Sign Up" }</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already a User? Sign In" }</p>
       </form>
   </div>
   
 
   
  )
}

export default Login