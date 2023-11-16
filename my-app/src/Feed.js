import React,{useEffect} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import Optioninput from './Optioninput';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Posts from './Posts';
import { useState } from 'react';
import { db } from './firebase';
import { selectUser } from './features/counter/userSlice';
import {useSelector} from 'react-redux'
function Feed() {
  const user=useSelector(selectUser); 
  const [posts, setPost]=useState([]);
  const [input,setInput]=useState("");
useEffect(() => {
db.collection("posts").onSnapshot(snapshot=>(
  setPost(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data(),
  })))
))
}, [])

  const sendpost=e=>{
 e.preventDefault();
 db.collection('posts').add({
  name:user.displayName,
  description:user.email,
  photoUrl:user.photoUrl,
  message:input
 })
 setInput("");
  }
  function dataadder(e){
setInput(e.target.value);

  }
  return (
    <div className='feed'>
     
      <div className='feed_inputcontainer'>
    <div className='feed_input'>
    <CreateIcon/>
    <form>
        <input type='text' value={input} onChange={dataadder}/>
        <button type='submit' onClick={sendpost}>Send</button>
      </form>
      </div>
      <div className='feed_optioninput'>
      <Optioninput Icon={ImageIcon} title="photos" color="blue"/>
      <Optioninput Icon={SubscriptionsIcon} title="video" color="gold"/>

      <Optioninput Icon={EventNoteIcon} title="write an article" color="gray"/>
      <Optioninput Icon={CalendarMonthIcon} title="events" color="yellow"/>
      </div>
      </div>
      {
        posts.map(({id, data:{name,description,message,photoUrl}})=>(
<Posts
  key={id}
  name={name}
  description={description}
  message={message}
  photoUrl={photoUrl}
/>
        ))
      }
    
    </div>
  )
}

export default Feed
