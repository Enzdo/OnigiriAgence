import { useState } from 'react';
import Image from 'next/image';

export default function CardProject(props) {
  const { titre, description, image } = props.data; 
  console.log(image)

  return (
    <div className="lg:max-w-sm w-full bg-white rounded-lg   shadow-lg transition-all hover:scale-105">
      <a href="#" className='w-full'>
        <Image width={500} height={300} className="rounded-t-lg w-full" src={image} alt={titre} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-black">{titre}</h5>
        </a>
        <p className="mb-3 font-normal text-slate-700 ">{description}</p>
        <a href="#contact" className="flex flex-row items-center rounded-tl-md w-fit md:text-xs text-xs text-white   rounded-bl-xl rounded-br-md rounded-tr-xl  bg-gradient-to-r from-black to-[#E8375B] py-2 px-4 transition-all hover:scale-105">
          <span className='text-xs'>En savoir plus</span>
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}
