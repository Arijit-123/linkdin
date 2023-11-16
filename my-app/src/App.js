import React,{useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from './features/counter/userSlice'; 
import Login from './Login';
import { auth } from './firebase';
import { login,logout } from './features/counter/userSlice';
function App() {
  const user=useSelector(selectUser); 
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  
    return () => {
      // Unsubscribe or detach the listener when the component unmounts
      unsubscribe();
    };
  }, []);
  // console.log("user",user.uid);
  return (
    <>
     

       {/* header */}
       <Header/>
       {
        user ? (
          <div className='app_body'>
<Sidebar/>
<Feed/>
       </div>
        ): <Login/>
       }
      
       {/* App body */}
       {/* sidebar */}
       {/* feed */}
       {/* widgets */}
   
    </>
  );
}

export default App;
