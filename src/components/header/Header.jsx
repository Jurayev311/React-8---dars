import React from 'react'
import {LINKS} from '../../static/index'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header id='header' >
        <div className='container mx-auto max-w-[1280px]'>
            <nav className='flex items-center justify-between h-[67px]'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex items-center gap-10 capitalize text-[16px font-medium text-[#525560]'>
                    {
                        LINKS?.map((item, inx) => {
                            return <li key={inx}><span><NavLink to={item.path}>{item.name}</NavLink></span></li>
                        })
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header