import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'

function Sidebar() {
const user=useSelector(selectUser);
const displayitem=(item)=>(
  <>
  <div className='items'>
  <span>#</span>
  <span>{item}</span>
  </div>
  </>
)

  return (
    <div className='sidebar'>
    
      <div className='sidebar_top'>
      <img src={user.photoUrl}/>
      <Avatar className='sidebar_avatar'/>
      <h3 id='name'>{user.displayName}</h3>
      <h6 id='email'>{user.email}</h6>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
         <p id='view'>Who viewed me</p>
        <p className='sidebar_number'>4000</p>
        </div>
        <div className='sidebar_stat' >
          <p className='post_views'> views on post</p>
          <p className='sidebar_number'>4000</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
      Recent
      {
displayitem("reactjs")}
{displayitem("job update")}
{displayitem("job update")}
{displayitem("job update")}
      
      </div>
    </div>
  )
}

export default Sidebar
