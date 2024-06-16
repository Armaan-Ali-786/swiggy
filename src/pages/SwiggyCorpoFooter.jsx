import React from 'react'
import swiggylogo from '../images/logoswiggy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import gplay from '../images/scfooter.png'
import apple from '../images/applefooter.png'
library.add(fab, fas, far)

export default function SwiggyCorpoFooter() {
  return (
    <div className='bg-[#F0F0F5] pt-[50px] pb-[30px]'>
        <div className='max-w-[1320px] mx-auto'>
            <div className='grid grid-cols-5 border-b border-black pb-[30px]'>
                <div className='text-[14px]'>
                    <img src={swiggylogo} alt="" />
                    <p className='my-[20px]'>© 2024 Swiggy Limited</p>
                    <p>
                        No. 55 Sy No 8 to 14 I & J Block – Ground
                        Floor Embassy Tech Village | Outer Ring
                        Road Devarbisanahalli Varthur
                        Bengaluru – 560130
                    </p>
                </div>
                <ul className='text-[14px] leading-8'>
                    <li className='text-[18px] font-semibold mb-[10px]'>Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instament</li>
                    <li>Swiggy Genie</li>
                    <li>Minies</li>
                </ul>
                <div>
                    <ul className='text-[14px] leading-8'>
                        <li className='text-[18px] font-semibold mb-[10px]'>Contact Us</li>
                        <li>Help & Support</li>
                        <li>Partners with us</li>
                        <li>Ride With us</li>
                    </ul>
                    <ul className='text-[14px] leading-8 mt-[15px]'>
                        <li className='text-[18px] font-semibold mb-[10px]'>Legal</li>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <ul className='text-[14px] leading-8'>
                    <li className='text-[18px] font-semibold mb-[10px]'>We deliver to :</li>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Gurugram</li>
                    <li>Bengaluru</li>
                    <li>Chennai</li>
                    <li>Kolkata</li>
                    <li>
                        <select>
                            <option>600 cities</option>
                        </select>
                    </li>
                </ul>
                <div>
                    <ul className='text-[14px] leading-8 mb-[15px]'>
                        <li className='text-[18px] font-semibold mb-[10px]'>Life at Swiggy</li>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                    <ul className='text-[20px] leading-8'>
                        <li className='text-[18px] font-semibold mb-[10px]'>Social Links</li>
                        <li>
                            <div className='flex gap-[15px]'>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                <FontAwesomeIcon icon="fa-brands fa-pinterest" />
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center  gap-[20px] mt-[30px]'>
                <h3 className='font-semibold'>For better experience, download the Swiggy app now</h3>
                <img src={gplay} alt="" />
                <img src={apple} width={220} alt="" />
            </div>
        </div>
    </div>
  )
}
