import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import {addUser, removeUser} from '../utils/userSlice'
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
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
    <div className='w-[100%] absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO}
        alt='logo' />
         {user && ( <div className='flex p-2'>
        <img src={user?.photoURL}
          alt='user icon' className='w-12 h-12'/>
          <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header