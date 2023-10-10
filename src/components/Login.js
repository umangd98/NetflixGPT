import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        //validate form data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        //signin /signup
        if(message) return 

        //sign in / sign up user 
        if(!isSignInForm){
            //signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/43090317?v=4"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}))
                    navigate("/browse")

                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                    // ...
                  });
              
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + '-' +  errorMessage)
            });

        }else{
            //signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' +  errorMessage)

                });
        }
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg' />
        </div>
        <div>
            <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-1/4 mt-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
                {!isSignInForm&&<input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' ref={name}/>}
                
                <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700 rounded-lg' ref={email}
                />
                <input type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-700 rounded-lg'  ref={password}/>
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700  w-full rounded-lg'>{isSignInForm?'Sign In':'Sign Up'}
                </button>
                <p className='py-6 cursor-pointer' onClick={toggleSigninForm}> {isSignInForm?'New to Netflix? Signup Now':'Already Registered? Signin Now'}</p>
            </form>
        </div>
    </div>
  )
}

export default Login