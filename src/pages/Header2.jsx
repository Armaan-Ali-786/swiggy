import React from 'react'
import slogo from '../images/swiggy-logo.svg'

export default function Header2() {
    return (
        <header className='bg-[#FE5005] z-[99] py-[30px] sticky top-0 left-0 right-0 text-white'>
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={slogo} width={120} />
                    </div>
                    <div>
                        <ul className='flex font-semibold'>
                            <li className='px-[20px] flex justify-center items-center gap-[10px] text-[14px]'>
                                About Swiggy
                                <svg
                                    className="w-[10px] fill-[white] e-font-icon-svg e-fas-caret-down"
                                    viewBox="0 0 320 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                </svg>

                            </li>
                            <li className='px-[20px] text-[14px]'>Our Businessess</li>
                            <li className='px-[20px] flex justify-center items-center gap-[10px] text-[14px]'>
                                Delivering For Everyone
                                <svg
                                    className="w-[10px] fill-[white] e-font-icon-svg e-fas-caret-down"
                                    viewBox="0 0 320 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                </svg>

                            </li>
                            <li className='px-[20px] text-[14px]'>Newsroom</li>
                            <li className='px-[20px] flex justify-center items-center gap-[10px] text-[14px]'>
                                Sustainability
                                <svg
                                    className="w-[10px] fill-[white] e-font-icon-svg e-fas-caret-down"
                                    viewBox="0 0 320 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                </svg>

                            </li>
                            <li className='px-[20px] text-[14px]'>Inverstor Relations</li>
                            <li className='px-[20px] text-[14px]'>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
