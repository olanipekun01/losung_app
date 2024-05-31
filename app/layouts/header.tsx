'use client'
import React, { useState } from 'react'
import Logo from "../../public/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './header.css';
import ButtonComponent from '../components/Button';

const Header = () => {
    const [navActive, setNavActive] = useState(false);
  return (
    <>
    <header className='pb-[30px] pt-[80px] lg:py-[30px] px-[20px] lg:px-[30px] flex justify-between items-center'>
        <div className='w-[20px] lg:hidden' onClick={() => setNavActive(!navActive)}>
            <FontAwesomeIcon icon={navActive ? faTimes as IconProp : faBars as IconProp}  />
        </div>

        <div className="logo">
            <Image src={Logo} alt="" className="logo_img w-[100px]" />
        </div>

        <nav className="flex justify-between items-center list-none lg:w-[750px]">
            <ul className={navActive ? "w-[100%] top-[134px] left-[0] absolute flex flex-col justify-between items-center list-none lg:w-[700px] font-weight-700 text-[12px] text-[#373737] bg-[hsl(0,0%,100%)] text-left px-[40px] py-[20px]" : "hidden lg:flex relative lg:w-[650px] lg:text-[12px]"}>
                <li className='header-active hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px]  leading-[14.4px]" href="/">Home</Link>
                </li>

                <li className='hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px] leading-[14.4px]" href="/">About Us</Link>
                </li>

                <li className='hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px] leading-[14.4px]" href="/">Our Services</Link>
                </li>

                <li className='hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px]  leading-[14.4px]" href="/">Case Studies/Portfolio</Link>
                </li>

                <li className='hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px] leading-[14.4px]" href="/">Contact Us</Link>
                </li>

                <li className='hover-wider text-left w-[100%] lg:w-auto lg:px-[15px] py-[20px]'>
                    <Link className="w-[100%]  px-[15px] lg:px-[5px] leading-[14.4px]" href="/">FAQs</Link>
                </li>
            </ul>

            <ButtonComponent btnText='Let&apos;s Talk' link='/' />
        </nav>

       
       
       
    </header>
    </>
  )
}

export default Header