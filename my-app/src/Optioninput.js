import React from 'react'

function Optioninput({Icon, title,color}) {
  return (
    <div className='title_arrangement'>
      <Icon style={{color:color}}/>
      {title}
    </div>
  )
}

export default Optioninput
