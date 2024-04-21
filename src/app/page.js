'use client'
import { useEffect, useState } from 'react'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Header from '@/components/header'
import Image from 'next/image';
import image from "../Ellipse14.png";
import svg from "../TickSquare.svg";
import Footer from '@/components/footer';
import CardProject from '@/components/card/card';
import JsonData from './data/JsonCardClient.json'
import CardCompetence from '@/components/card/cardCompetence';
import JsonDataCompetence from './data/JsonCardCompetence.json'
import sendMail from '../service/mailservice';
import ReCAPTCHA from "react-google-recaptcha";


export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const [captcha, setCaptcha] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(captcha){
      console.log(" le captcha a était verifier ! ")
      console.log(formData);
      sendMail(formData)
        .then(() => {
          // Réinitialiser le formulaire après la soumission si nécessaire
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            subject: '',
            message: ''
          });
        })
        .catch((error) => {
          console.error("Error while sending mail:", error);
        });
    }else{
      console.log("le captha n'a pas était fait ")
    }
    // Vous pouvez maintenant utiliser les données stockées dans formData comme vous le souhaitez
   
  };




  
  return (
    <main className="flex w-screen  flex-col items-center  bg-white ">
        <Header></Header>
        <div className='flex flex-row md:justify-center justify-center items-center xl:px-20 lg:px-20 md:px-20 px-8 w-full pt-20'>
          <div className='flex flex-col gap-y-10 md:w-8/12  w-full ' data-aos="fade-right">
              <h1 className='text-black xl:text-[54px] lg:text-[52px]  md:text-[38px]  text-2xl font-bold  leading-relaxed 	 w-full	md:text-center text-center'>Concevons ensemble des sites web <span className='text-[#E8375B]'>exceptionnels</span>, taillés sur mesure.</h1>
              <p className='text-[#131629b5]  xl:text-lg lg:text-base md:text-sm text-xs md:text-center text-center '>Nous ne nous contentons pas de concevoir un site web, nous forgeons une présence en ligne convaincante, bien au-delà d une simple vitrine. Notre mission est de vous apporter de nouveaux clients grâce à une expérience digitale exceptionnelle.</p>
              <div className='flex md:flex-row flex-col md:gap-y-0 gap-y-4 gap-x-10 md:justify-center justify-center items-center'>
                  <a href="#contact" className="text-[#ffffff] bg-[#E8375B] transition-all hover:scale-105 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Prendre contact</a>
                  <p className='text-black font-bold text-xs'>30+ entreprises propulsées 🚀</p>
              </div>
          </div>
            <Image
              priority
              src={image}
              className=" z-0 absolute right-0 left-0 top-0 w-screen"
              alt="Follow us on Twitter"
            />
        </div>
        <div className='flex flex-col md:justify-start justify-center  xl:px-20 lg:px-20 md:px-20 px-8 w-full py-48'>
            <div id='service' className='flex flex-col gap-y-4 '>
                <h3 className='text-[#E8375B] font-normal md:text-3xl text-lg tracking-[0.2em]  md:text-left text-center  '>SERVICE</h3>
                <h2  className='text-black xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-bold md:text-left text-center  '>🎨 Notre expertise</h2>
                <p  className='text-[#131629b5]  xl:text-lg lg:text-base md:text-sm text-sm md:text-left text-center '>Nous ne sommes pas juste une autre agence, nous sommes votre chemin vers des projets web exceptionnels.</p>
            </div>
            <div className='flex flex-wrap  items-center pt-10 gap-5 '>
              {JsonDataCompetence.map((item, index) => (
                  <CardCompetence key={index} data={item}></CardCompetence>
                
              ))}
              
            </div>
        </div>
        <div className='flex flex-col md:justify-start justify-center items-center xl:px-20 lg:px-20 md:px-20 px-4 w-full gap-y-20 '>
            <div className='flex flex-col gap-y-4 w-full'>
                <h3 id='offre' className='text-[#E8375B] font-normal md:text-3xl text-lg tracking-[0.2em]  md:text-left text-center  '>OFFRE</h3>
                <h2  className='text-black xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-bold md:text-left text-center  '>👨‍🔧 L’offre qui vous propulse</h2>
                <p className='text-[#131629b5]  xl:text-lg lg:text-base md:text-sm text-sm md:text-left text-center '>Une offre pour aller à l’essentiel avec un résultat clé en main.</p>
            </div>
            <div className=' w-fit grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 items-center lg:gap-10 md:gap-y-40 gap-y-40 pt-10'>
              <div class="w-full flex flex-col items-center max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 border-[#E8375B] md:border-4  border-2">
                  <p className='p-6 md:border-4  border-2 border-[#E8375B] bg-white rounded-full w-fit text-6xl -mt-20'>🛩️</p>
                  <h5 class="text-gray-500 text-xl  text-left py-4">Plan No-code</h5>
                  <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl text-[#E8375B] font-extrabold tracking-tight">20€</span>
                    <span  class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mois</span>
                  </div>
                  <p className='text-slate-500 font-medium w-10/12 md:text-center text-center'>500€ HT de frais de création</p>
                  <ul role="list" class="space-y-5 my-7">
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3"> Site vitrine - 1 page</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Site responsive</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">3 retouches par mois incluse</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Direction artistique personnalisé</span>
                  </li>
                  <li class="flex items-center ">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Optimisation de la
structure du site 
pour le référencement</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Site sous Webflow</span>
                  </li>
                  </ul>
                  <a href='#contact' class="rounded-tl-md w-full md:text-base text-sm  rounded-bl-xl rounded-br-md rounded-tr-xl text-center  bg-gradient-to-r text-white from-black to-[#E8375B] py-4 px-6 transition-all hover:scale-105">Prendre contact</a>
              </div>
              <div class="w-full flex flex-col items-center max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 border-[#E8375B] md:border-4  border-2">
                  <p className='p-6 md:border-4  border-2 border-[#E8375B] bg-white rounded-full w-fit text-6xl -mt-20'>🚀</p>
                  <h5 class="text-gray-500 text-xl  text-left py-4">Plan Standard</h5>
                  <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl text-[#E8375B] font-extrabold tracking-tight">49€</span>
                    <span id='offre' class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mois</span>
                  </div>
                  <p className='text-slate-500 font-medium w-10/12 md:text-center text-center'>700€ HT de frais de création</p>
                  <ul role="list" class="space-y-5 my-7">
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Site web modulable avec 2 à 5 pages</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Site responsive</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Achat de thèmes</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">3 retouches par mois incluse</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Direction artistique personnalisé</span>
                  </li>
                  <li class="flex items-center ">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Optimisation de la
structure du site 
pour le référencement</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Site sous WordPress</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Formation vidéo du cms</span>
                  </li>
                  </ul>
                  <a href='#contact' class="rounded-tl-md w-full md:text-base text-sm  rounded-bl-xl rounded-br-md rounded-tr-xl text-center text-white  bg-gradient-to-r from-black to-[#E8375B] py-4 px-6 transition-all hover:scale-105">Prendre contact</a>
                  <a href="https://capable-kringle-b637be.netlify.app" className='text-sm pt-5 text-slate-700 transition-all hover:text-slate-950 '>Voir une démo</a>
              </div>
              <div class="w-full flex flex-col items-center max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 border-[#E8375B] md:border-4  border-2">
                  <p className='p-6 md:border-4  border-2 border-[#E8375B] bg-white rounded-full w-fit text-6xl -mt-20'>🛸</p>
                  <h5 class="text-gray-500 text-xl  text-left py-4">Devis personnalisé</h5>
                  <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl text-[#E8375B] font-extrabold tracking-tight">xx€</span>
                    <span id='offre' class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mois</span>
                  </div>
                  <p className='text-slate-500 font-medium w-10/12 md:text-center text-center'>xxx€ HT de frais de création</p>
                  <ul role="list" class="space-y-5 my-7">
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Site web selons vos besoins</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800  ms-3">Site responsive</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Direction artistique personnalisé</span>
                  </li>
                  <li class="flex items-center ">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Optimisation de la
structure du site 
pour le référencement</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Site sous wordpress</span>
                  </li>
                  <li class="flex items-center">
                  <svg class="flex-shrink-0 w-4 h-4 text-[#E8375B] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-800 ms-3">Formation vidéo du cms</span>
                  </li>
                  </ul>
                  <a href='#contact' class="rounded-tl-md w-full md:text-base text-sm text-white  rounded-bl-xl rounded-br-md rounded-tr-xl text-center  bg-gradient-to-r from-black to-[#E8375B] py-4 px-6 transition-all hover:scale-105">Obtenir un devis</a>
                 
              </div>
          
        
            </div>
            <div className='flex flex-col gap-y-10 md:w-6/12 w-10/12  items-center -mt-10'>
                      
                      <p className='w-full text-center text-[#131629b5] md:text-sm text-xs '>D autres suppléments tels que la création de designs pour vos flyers, 
cartes de visite, etc., sont disponibles à partir de 10 à 50 euros, selon le support demandé.</p>
                  </div>
        </div>
        <div className='flex flex-col md:justify-start justify-center  xl:px-20 lg:px-20 md:px-20 px-8 w-full py-48'>
            <div id='portfolio' className='flex flex-col gap-y-4 '>
                <h3 className='text-[#E8375B] font-normal md:text-3xl text-lg tracking-[0.2em]  md:text-left text-center  '>PORTFOLIO</h3>
                <h2 className='text-black xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-bold md:text-left text-center  '>🚧 Nos derniers travaux</h2>
            </div>
            <div className='w-full pt-10 flex flex-wrap items-center gap-8'>
            {JsonData.map((item, index) => (
                <CardProject key={index} data={item}></CardProject>
              
            ))}
            </div>
        </div>
        <div className='flex flex-col md:justify-start justify-center  xl:px-20 lg:px-20 md:px-20 px-8 w-full '>
            <div className='flex flex-col gap-y-4 items-center '>
                <h3 className='text-[#E8375B] font-normal md:text-3xl text-lg tracking-[0.2em]  md:text-left text-center  '>CONTACT</h3>
                <h2 id='contact' className='text-black xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-bold md:text-left text-center  '>Prendre contact</h2>
            </div>
            <form class="w-full py-10" onSubmit={handleSubmit}>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#E8375B] focus:outline-none focus:ring-0 focus:border-[#E8375B] peer"
                      
                      required
                    />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#E8375B] peer-focus:dark:text-[#E8375B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="lastName"
                      value={formData.lastName}
                      onChange={handleChange} id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-[#E8375B] focus:outline-none focus:ring-0 focus:border-[#E8375B] peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#E8375B] peer-focus:dark:text-[#E8375B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange} id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-[#E8375B] focus:outline-none focus:ring-0 focus:border-[#E8375B] peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#E8375B] peer-focus:dark:text-[#E8375B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre numéro</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="email"
                      value={formData.email}
                      onChange={handleChange} id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-[#E8375B] focus:outline-none focus:ring-0 focus:border-[#E8375B] peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#E8375B] peer-focus:dark:text-[#E8375B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre mail</label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="mail" name="subject"
                      value={formData.subject}
                      onChange={handleChange} id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-[#E8375B] focus:outline-none focus:ring-0 focus:border-[#E8375B] peer" placeholder=" " required />
                  <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#E8375B] peer-focus:dark:text-[#E8375B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sujet de votre demande</label>
              </div>
              <div class="relative z-0 w-full pb-10 ">
                  <textarea id="message" name="message"
                      value={formData.message}
                      onChange={handleChange} rows="4" class="block p-2.5 w-full text-sm text-gray-900  border-2 border-gray-300 focus:border-[#E8375B]      " placeholder="Décrivez votre demande, s'il vous plaît."></textarea>
              </div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={setcaptcha}
                className='w-full'
              />,
        

              <button type="submit" class="text-white bg-[#E8375B] hover:scale-105 transition-all w-full py-4 rounded-lg text-base">Envoyer</button>
            </form>


        </div>
        <Footer></Footer>
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-FBRJ89E1ZP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FBRJ89E1ZP');
</script>
    </main>
  );
}
