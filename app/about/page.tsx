import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AboutHero from '../../public/AboutHero.png'

import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <section className="about_section ">
            <div>
                <h3 className="text-[#0A0A0A] text-[20px] lg:text-[30px] font-bold text-center">Brief Introduction:</h3>
                <hr className="mx-auto w-[50px] lg:w-[60px] border-[#FFC102] border-[2px] border-solid"/>
            </div>

            <div className="bg-[#065CBA] mt-7">

                <div className="w-[100%] p-0">
                    <Image className='m-0' src={AboutHero} alt="" />
                </div>

                <div className="">
                    <h3 className='text-[30px] text-center text-[#fff]'>We are a team of 
                    <span className='text-[#FFC000]'> expert leaders...</span></h3>
                    <p>...with extensive experience consulting across various industries, empowering businesses to thrive in today's dynamic landscape.</p>

                    <p>Our diverse expertise spans cybersecurity, product management, digital transformation, startup advisory , technology consulting, cloud service management, Big data, DevOps and lots more.  
                        Committed to driving tangible results, we partner closely with our clients to understand their unique challenges and goals, delivering tailored solutions that unlock growth, efficiency, and innovation.
                    </p>
                </div>

                
            </div>
        </section>
    </>
  )
}

export default page