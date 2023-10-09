import React from 'react'
import logo from './../assets/image/logo.png'
import {HiHome,
    HiPuzzle,
    HiUser,
    HiOutlineSearch,
    HiOutlineQrcode
} from "react-icons/hi";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
function Header() {
    const menu=[
        {
            name:'HOME',
            Icon:HiHome
        },
        {
            name:'PROBLEMSSOLUTION',
            Icon:HiPuzzle
        },
        {
            name:'CONTACTS',
            Icon:HiUser
        },
        {
            name:'SEARCH',
            Icon:HiOutlineSearch
        },
        {
            name:'CODES',
            Icon:HiOutlineQrcode
        }
    ]
}
const Header = () => {
  return (
    <div className='flex'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover ' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <Headeritem key={item.name} name={item.name} Icon={item.Icon}/>
        ))}
        </div>
        <div className='flex gap-8'>
        {menu.map((item)=>(
            <Headeritem key={item.name} name={item.name} Icon={item.Icon}/>
        ))}
        </div>
    </div>
  )
}

export default Header