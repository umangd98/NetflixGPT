import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import {addUser, removeUser} from '../utils/userSlice'
import { LANGUAGES, LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  const handleGPTClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()

  }, []);
  return (
    <div className='w-[100%] absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center md:justify-between '>
        <img className='w-44' src={LOGO}
        alt='logo' />
         {user && ( <div className='flex p-2'>
          { <select className='p-2 bg-purple-500 text-white m-2' onChange={handleLanguageChange}>
            {LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select>}
          <button onClick={handleGPTClick} className='py-2 px-4 mx-4 my-2 text-white bg-slate-500 rounded-lg cursor-pointer'>{showGPTSearch? "Home":"GPT Search"}</button>
        <img src={user?.photoURL}
          alt='user icon' className='hidden md:inline-block w-12 h-12'/>
          <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header