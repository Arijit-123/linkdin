import React, { useState } from 'react'
import { auth } from './firebase';
import {useDispatch, userDispatch, useSelector} from 'react-redux'; 
import { login } from './features/counter/userSlice';
import { selectUser } from './features/counter/userSlice';
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [profilepic,setProfilepic]=useState("");
  

  const dispatch=useDispatch();
  const logintoapp=(e)=>{
e.preventDefault();
auth.signInWithEmailAndPassword(email,password)
.then((userAuth)=>{

  dispatch(login({
    email:userAuth.user.email,
    uid:userAuth.user.uid,
    displayName:userAuth.user.displayName,
    photourl: userAuth.user.photourl,
  }));
})
.catch(error=>alert(error));
  };
  const register=()=>{
if(!name){
  return alert("Please enter full name")

}
auth.createUserWithEmailAndPassword(email,password)
.then((userauth) =>{
userauth.user.updateProfile({
  displayName:name,
  photoURL:profilepic
})
.then(userAuth=>{
  dispatch(login({
    email:userAuth.user.email,
    uid:userAuth.user.uid,
    displayName:name,
    photoURL:profilepic
  }))
})
})
.catch((error)=>alert(error.message));
  }
  return (
    <div className='login'>
    <img src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"/>
 
     <form>
        <input placeholder='full name registration' value={name} onChange={(e)=>setName(e.target.value)} ></input>
        <input placeholder='your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
        <input placeholder='profilepicture' value={profilepic} onChange={(e)=>setProfilepic(e.target.value)}></input>
        <button  onClick={logintoapp}>Sign in</button>
     </form>
     <p>Not a member<span className='login_register' onClick={register}>Sign up</span></p>
    </div>
  )
}

export default Login
