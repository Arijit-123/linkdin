import React from 'react'
import { Avatar } from '@mui/material'
function Headeroption({Icon, title, avatar, onClick}) {
  return (
    <div className='headeroptions' onClick={onClick}>
      {Icon && <Icon />}
      {avatar && <Avatar src={avatar} />}
    <h6> {title && title }</h6> 
    </div>
  )
}

export default Headeroption
