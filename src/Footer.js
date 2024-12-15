import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='Footer'>
        <h1>CopyRight &copy; {year} </h1>
    </footer>
  )
}

export default Footer