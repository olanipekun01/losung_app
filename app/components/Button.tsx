'use client'
import React from 'react'
import Link from 'next/link'

interface MyButtonProps {
    btnText: string; // Prop name with type string
    link: string; // Optional prop with type number (can be undefined)
    //handleClick: () => void; // Function prop with a void return type
  }

const ButtonComponent = (props: MyButtonProps) => {
  return (
    <>
    <div>
        <button className='hover-wider bg-[#FFC000] py-[7px] px-[10px] rounded-md text-[12px] text-[#0A0A0A] font-weight-700'>{props.btnText}</button>
    </div>
    </>
  )
}

export default ButtonComponent