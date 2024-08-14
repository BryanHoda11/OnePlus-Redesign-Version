import React, { useState } from 'react'
import { CiGlobe } from "react-icons/ci";
import { PiCreditCardLight } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { LiaWalletSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [footitems, setfootitems] = useState(false);
    const [footitems2, setfootitems2] = useState(false);
    const [footitems3, setfootitems3] = useState(false);
    const [footitems4, setfootitems4] = useState(false);
    const [footitems5, setfootitems5] = useState(false);

    const handleClick = () => {
        setfootitems(!footitems)
    }

    const handleClick2 = () => {
        setfootitems2(!footitems2)
    }

    const handleClick3 = () => {
        setfootitems3(!footitems3)
    }

    const handleClick4 = () => {
        setfootitems4(!footitems4)
    }

    const handleClick5 = () => {
        setfootitems5(!footitems5)
    }

    return (
        <>
             <footer className='bg-gray-100 min-h-[90vh] w-full overflow-hidden'>
                <div className="flex items-center justify-between">
                    <div className="logo py-7"><img className='h-9 px-3 sm:px-7' src="https://www.oneplus.com/content/dam/oasis/oneplus.ico" alt="" /></div>
                    <div className="language px-8 flex gap-3 items-center">
                        <CiGlobe style={{ fontSize: "16px" }} />
                        <select className='cursor-pointer text-gray-500 font-bold py-3 sm:px-4 rounded-xl text-sm' name="select">
                            <option value="">India (English)</option>
                            <option value="">India (Hindi)</option>
                            <option value="">Spain (Espanol)</option>
                            <option value="">France (French)</option>
                            <option value="">Portugal (Portugese)</option>
                            <option value="">USA (English)</option>
                            <option value="">UK (English)</option>
                            <option value="">Russia (Russian)</option>
                            <option value="">Turkey (Turkish)</option>
                            <option value="">Poland (Polish)</option>
                        </select>
                    </div>
                </div >

                <div className="items flex flex-col lg:flex-row items-baseline justify-around py-5">
                    <div className="phones w-full lg:w-auto">
                        <h3 onClick={handleClick} className='font-bold flex items-center justify-between text-xl text-red-500 py-5 px-5 lg:px-0 cursor-pointer lg:cursor-default lg:bg-transparent lg:pointer-events-none hover:bg-gray-200 transition-all duration-300 ease-in'> Phones <MdKeyboardArrowDown className='text-red-500 block lg:hidden' style={{ fontSize: "30px" }} /></h3>
                        {footitems && <ul className='flex flex-col gap-3 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord 4</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord CE4 Lite 5G</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 12</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 12R</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Open</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 11R 5G</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord CE4</li>
                        </ul>}
                        <ul className='lg:flex flex-col hidden gap-2 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord 4</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord CE4 Lite 5G</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 12</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 12R</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Open</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus 11R 5G</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Nord CE4</li>
                        </ul>
                    </div>

                    <div className="store w-full lg:w-auto">
                        <h3 onClick={handleClick2} className='font-bold flex items-center justify-between text-xl text-red-500 py-5 px-5 lg:px-0 cursor-pointer lg:cursor-default lg:bg-transparent lg:pointer-events-none hover:bg-gray-200 transition-all duration-300 ease-in'> Store <MdKeyboardArrowDown className='text-red-500 block lg:hidden' style={{ fontSize: "30px" }} /></h3>
                        {footitems2 && <ul className='flex flex-col gap-3 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Tablet</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Audio</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Wearables</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Cases & Protection</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Power & Cables</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Bundles</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Gear</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>TV & Display</li>
                        </ul>}
                        <ul className='lg:flex flex-col hidden gap-2 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Tablet</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Audio</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Wearables</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Cases & Protection</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Power & Cables</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Bundles</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Gear</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>TV & Display</li>
                        </ul>
                    </div>

                    <div className="support w-full lg:w-auto">
                        <h3 onClick={handleClick3} className='font-bold flex items-center justify-between text-xl text-red-500 py-5 px-5 lg:px-0 cursor-pointer lg:cursor-default lg:bg-transparent lg:pointer-events-none hover:bg-gray-200 transition-all duration-300 ease-in'> Support <MdKeyboardArrowDown className='text-red-500 block lg:hidden' style={{ fontSize: "30px" }} /></h3>
                        {footitems3 && <ul className='flex flex-col gap-3 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Protection Plan</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Shopping FAQs</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>User Manuals</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Service Centers</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Afilliate Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Repair Service</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Repair Pricing</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Software Update</li>
                        </ul>}
                        <ul className='lg:flex flex-col hidden gap-2 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Protection Plan</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Shopping FAQs</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>User Manuals</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Service Centers</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Afilliate Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Repair Service</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Repair Pricing</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Software Update</li>
                        </ul>
                    </div>

                    <div className="explore w-full lg:w-auto">
                        <h3 onClick={handleClick4} className='font-bold flex items-center justify-between text-xl text-red-500 py-5 px-5 lg:px-0 cursor-pointer lg:cursor-default lg:bg-transparent lg:pointer-events-none hover:bg-gray-200 transition-all duration-300 ease-in'> Explore <MdKeyboardArrowDown className='text-red-500 block lg:hidden' style={{ fontSize: "30px" }} /></h3>
                        {footitems4 && <ul className='flex flex-col gap-3 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>About OnePlus</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Community</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Find a Store</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Store App</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OxygenOS</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Press</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Careers</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Compliance Disclosure</li>
                        </ul>}
                        <ul className='lg:flex flex-col hidden gap-2 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>About OnePlus</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Community</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Find a Store</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Store App</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OxygenOS</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Press</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Careers</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Compliance Disclosure</li>
                        </ul>
                    </div>

                    <div className="programs w-full lg:w-auto">
                        <h3 onClick={handleClick5} className='font-bold flex items-center justify-between text-xl text-red-500 py-5 px-5 lg:px-0 cursor-pointer lg:cursor-default lg:bg-transparent lg:pointer-events-none hover:bg-gray-200 transition-all duration-300 ease-in'> Programs <MdKeyboardArrowDown className='text-red-500 block lg:hidden' style={{ fontSize: "30px" }} /></h3>
                        {footitems5 && <ul className='flex flex-col gap-3 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Exchange Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Red Cable Club</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Student Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Easy Upgrades Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Referral Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Welcome Gifts</li>
                        </ul>}
                        <ul className='lg:flex flex-col hidden gap-2 px-5 lg:px-0'>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Exchange Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Red Cable Club</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>OnePlus Student Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Easy Upgrades Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Referral Program</li>
                            <li className='text-gray-500 hover:text-red-500 cursor-pointer'>Welcome Gifts</li>
                        </ul>
                    </div>
                </div>

                <hr className='h-[1px] bg-black block lg:hidden w-[95%] mx-auto' />
                <div className="moreitems flex flex-col-reverse lg:flex-row pt-16 px-6 gap-5 justify-between">
                    <div className='flex flex-col sm:flex-row gap-8 items-start sm:items-center text-sm pb-8 lg:pb-0'>
                        <span className='flex items-center gap-2 text-gray-400 text-xs sm:text-md'><PiCreditCardLight />Credit/Debit Card</span>
                        <span className='flex items-center gap-2 text-gray-400 text-xs sm:text-md'><BsBank />NetBanking</span>
                        <span className='flex items-center gap-2 text-gray-400 text-xs sm:text-md'><FiPieChart />EMI</span>
                        <span className='flex items-center gap-2 text-gray-400 text-xs sm:text-md'><LiaWalletSolid />Wallet</span>
                    </div>

                    <div className="flex items-center gap-6 px-0 lg:px-4 pb-7 lg:pb-0">
                        <span className='text-gray-400 cursor-pointer hover:text-red-500'><FaFacebook style={{ fontSize: "20px" }} /></span>
                        <span className='text-gray-400 cursor-pointer hover:text-red-500'><FaXTwitter style={{ fontSize: "20px" }} /></span>
                        <span className='text-gray-400 cursor-pointer hover:text-red-500'><FaInstagram style={{ fontSize: "20px" }} /></span>
                        <h3 className='text-gray-700 cursor-pointer hover:underline text-sm sm:text-md'> Get Support from OnePlus</h3>
                    </div>
                </div>
                <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-6' />
                <p className='flex justify-center items-center gap-5 text-gray-400 text-sm'>
                    <span className='cursor-pointer hover:text-red-500 hidden lg:block'>Privacy Policy </span> <span className='hidden lg:block'>|</span>
                    <span className='cursor-pointer hover:text-red-500 hidden lg:block'>User Agreement </span> <span className='hidden lg:block'>|</span>
                    <span className='cursor-pointer hover:text-red-500 hidden lg:block'>Terms of Sales </span> <span className='hidden lg:block'>|</span>
                    <span className='cursor-pointer hover:text-red-500 hidden lg:block'>E-Waste Management </span> <span className='hidden lg:block'>|</span>
                    <span className='cursor-pointer hover:text-red-500 hidden lg:block'>Security Response Center (OneSRC)</span>
                    <span className='px-8 pb-5 lg:pb-0 text-xs sm:text-sm'>© 2013 - 2024 OnePlus. All Rights Reserved.</span>
                </p>
            </footer >
        </>
    )
}

export default Footer