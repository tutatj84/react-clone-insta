import React, { useState } from 'react'

function NavItem(props) {
  function handleClickItem() {

  }
  return(
     <li
      style={props.style}
      onClick={handleClickItem} //continue
     >{props.item.name}</li>
   )
}

function Nav(props) {
  const [clickedItem, useClickedItem] = useState('home');
  const data = [
    {
      name: 'Home',
      key: 'home',
      icon: ''
    },
    {
      name: 'Direct',
      key: 'direct',
      icon: ''
    },
    {
      name: 'Profile',
      key: 'profile',
      icon: ''
    }
  ]

  function handleChangeItem(key) {
    useClickedItem(key)
  }

  const navItems = data.map(item =>
    <NavItem 
      key={item.key}
      item={item}
      style={{fontWeight: item.key === clickedItem ? 'bold' : 'normal'}}
      onClick={key => handleChangeItem(key)}
    />)
  return (
    <ul>
      {navItems}
    </ul>
  )
}

function Header(props) {
  return (
    <div className="Header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
      <Nav />
    </div>
  )
}

export default Header

