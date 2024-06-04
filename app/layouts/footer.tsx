import React, { useState } from 'react';
import Image from 'next/image';

import whiteLogo from '../../public/white_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const links = [
  {
    id: 0,
    title: "Home",
    link: "/"
  },
  {
    id: 1,
    title: "About Us",
    link: "/"
  },
  {
    id: 2,
    title: "Our Services",
    link: "/"
  },
  {
    id: 3,
    title: "Case Studies/Portfolio",
    link: "/"
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/"
  },
  {
    id: 5,
    title: "FAQs",
    link: "/"
  }
]


const Footer = () => {
  return (
    <>
        <footer className='bg-[#065CBA] text-[#fff] p-[35px] lg:px-[40px] xl:px-[70px] '>
          <div className=" flex flex-col lg:flex-row justify-center lg:justify-between items-center ">
            <div className="w-[173px] lg:w-[313px]">
              <Image src={whiteLogo} alt="" />
            </div>

            <div className="">
              <ul className="flex w-[331px] lg:w-[657px]  justify-end mt-[50px]">
                {links.map(link => (
                  <li key={link.id} className="lg:ml-6">
                    <Link className='text-[8px] lg:text-[15px]' href={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
              <hr className='mx-auto lg:mx-0  mt-[28px] lg:mt-[13px] w-[245px] lg:w-[661px] border-[#D9D9D9] border-[1px] lg:border-[2px] border-solid'/>
              <div className='flex flex-col-reverse lg:flex-row justify-center lg:justify-center items-center mt-3'>
                <div className='flex w-[51px] lg:w-[120px] justify-between'>
                  <i><FontAwesomeIcon className='w-[6px] h-[6px] lg:w-[17px] lg:h-[17px]' icon={faLinkedin as IconProp} /></i>
                  <i><FontAwesomeIcon className='w-[6px] h-[6px] lg:w-[17px] lg:h-[17px]' icon={faInstagram as IconProp} /></i>
                  <i><FontAwesomeIcon className='w-[6px] h-[6px] lg:w-[17px] lg:h-[17px]' icon={faFacebook as IconProp} /></i>
                  <i><FontAwesomeIcon className='w-[6px] h-[6px] lg:w-[17px] lg:h-[17px]' icon={faTwitter as IconProp} /></i>
                </div>
                <div className='text-[8px] ml-11'>
                  <i><FontAwesomeIcon icon={faEnvelope as IconProp} /></i>
                  <span className='ml-2'>info@losungconsult.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[8px] lg:text-[14px] text-center my-6 lg:my-11 lg:mt-[80px]">All Rights Reserved. Losung 2024</div>
        </footer>
    </>
  )
}

export default Footer