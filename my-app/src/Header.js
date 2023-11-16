import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Headeroption from './Headeroption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import {logout} from './features/counter/userSlice';
import { auth } from './firebase';
function Header() {
  const dispatch=useDispatch();
  
const logoutofapp=()=>{
  dispatch(logout());
  auth.signOut();
}

  return (
    <div className='header'>
   
      
      <div className='header_left'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png'/>
      <div className='header_search'>
<SearchIcon/>
<input type='text' />
      </div>
      </div>
      <div className='header_right'>
      <Headeroption Icon={HomeIcon} title="Home"/>
      <Headeroption Icon={SupervisorAccountIcon} title="My Network"/>
      <Headeroption Icon={BusinessCenterIcon} title="My job"/>
      <Headeroption Icon={ChatIcon} title="Messaging"/>
      <Headeroption Icon={NotificationsIcon} title="My job"/>
      <Headeroption avatar="https://media.licdn.com/dms/image/D5603AQGj1au11LoGAA/profile-displayphoto-shrink_400_400/0/1681989112195?e=1704326400&v=beta&t=G8ptFQ_QZ0NRTCf_bhMSuapk2lSkJ4dEvZIlDwBpoGk" title="Me" onClick={logoutofapp}/>
      </div>
    </div>
  )
}

export default Header
