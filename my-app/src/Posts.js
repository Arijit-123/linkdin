import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import Optioninput from './Optioninput'
import CreateIcon from '@mui/icons-material/Create';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function Posts({key,name,description,message,photourl}) {

  return (
    <div className='post'>
      <div className='post_header'>
    <Avatar/>
    <div className='post_info'>
   <h2> {name}</h2>
   <p>Description</p>
    </div>
      </div>
      <div className='post_body'>
{message}
      </div>
      <div className='post_buttons'>
      <Optioninput Icon={ThumbUpIcon} title="photos" color="blue"/>
      <Optioninput Icon={MessageIcon} title="comment" color="gold"/>

      <Optioninput Icon={EventNoteIcon} title="write an article" color="gray"/>
      <Optioninput Icon={ShareIcon} title="events" color="gray"/>
      </div>
    </div>
  )
}

export default Posts
