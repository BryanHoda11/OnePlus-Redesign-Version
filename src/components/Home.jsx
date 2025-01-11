import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

// Navbar
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

// Navbar
const storeitems = [
    {
        img: '/images/phone.png',
        name: 'Phones',
    },
    {
        img: '/images/tablet.png',
        name: 'Tablet',
    },
    {
        img: '/images/earphone.png',
        name: 'Audio',
    },
    {
        img: '/images/watch.png',
        name: 'Wearables',
    },
    {
        img: '/images/cable.png',
        name: 'Power & Cables',
    },
    {
        img: '/images/cases.png',
        name: 'Cases & Protection',
    },
]

const phoneitems = [
    {
        img: '/images/phone.png',
        name: 'OnePlus 12',
    },
    {
        img: '/images/phone2.png',
        name: 'OnePlus 12R',
    },
    {
        img: '/images/phone3.png',
        name: 'OnePlus Open',
    },
    {
        img: '/images/phone4.png',
        name: 'OnePlus 11R 5G',
    },
]

const phoneitems2 = [
    {
        img: '/images/phone5.png',
        name: 'OnePlus Nord 4',
    },
    {
        img: '/images/phone6.png',
        name: 'OnePlus Nord CE4 Lite 5G',
    },
    {
        img: '/images/phone7.png',
        name: 'OnePlus Nord CE4',
    },
]

const tabletitems = [
    {
        img: '/images/tab.png',
        name: 'OnePlus Pad 2',
    },
    {
        img: '/images/tab2.png',
        name: 'OnePlus Pad',
    },
    {
        img: '/images/tab3.png',
        name: 'OnePlus Pad Go',
    },
    {
        img: '/images/tab4.png',
        name: 'Tablet Accessories',
    },
]

const watchitems = [
    {
        img: '/images/watch2.png',
        name: 'OnePlus Watch 2R',
    },
    {
        img: '/images/watch3.png',
        name: 'OnePlus Watch 2',
    }
]

const data = [
    {
        number: '1',
        img: '/images/oneplusnordce.png',
        name: 'OnePlus Nord CE4 Lite 5G',
        msg: 'Starting from ₹6,666/ month, with No Cost EMI'
    },
    {
        number: '2',
        img: '/images/oneplusnordce2.png',
        name: 'OnePlus Nord CE4 Lite 5G - Ultra Orange',
        msg: 'From ₹17,999 Incl. Bank Discount and ₹250 OFF addtional student discount'
    },
]

const Products = [
    {
        name: 'OnePlus Nord Buds 3 Pro',
        img: '/images/earbuds.png',
    },
    {
        name: 'OnePlus Watch 2R',
        img: '/images/watch2r.png',
    },
    {
        name: 'OnePlus Pad 2',
        img: '/images/onepluspad2.png',
    },
    {
        name: 'OnePlus 12',
        img: '/images/oneplus12.png',
    },
    {
        name: 'OnePlus Nord CE4',
        img: '/images/oneplusnordce4.png',
    },
    {
        name: 'OnePlus Open',
        img: '/images/oneplusopen.png',
    },
]

const Home = () => {
    // Navbar 
    const [substore, setSubstore] = useState(false);
    const [subphone, setSubphone] = useState(false);
    const [subtablet, setsubtablet] = useState(false);
    const [subwatch, setsubwatch] = useState(false);
    const [subtopia, setsubtopia] = useState(false);
    const [subcommunity, setsubcommunity] = useState(false);
    const [subsupport, setsubsupport] = useState(false);
    const [subcart, setsubcart] = useState(false);
    const [subuser, setsubuser] = useState(false);
    const [theme, settheme] = useState(false);
    const [navbar2, setnavbar2] = useState(false);

    // Navbar Functions

    const handleSubstoreToggle = (isVisible) => {
        setSubstore(isVisible);
    };

    const handleSubphoneToggle = (isVisible) => {
        setSubphone(isVisible);
    };

    const handleSubtabletToggle = (isVisible) => {
        setsubtablet(isVisible);
    };

    const handleSubwatchToggle = (isVisible) => {
        setsubwatch(isVisible);
    };

    const handleSubtopiaToggle = (isVisible) => {
        setsubtopia(isVisible);
    };

    const handleSubcommunityToggle = (isVisible) => {
        setsubcommunity(isVisible);
    };

    const handleSubsupportToggle = (isVisible) => {
        setsubsupport(isVisible);
    };

    const handleSubcartToggle = (isVisible) => {
        setsubcart(isVisible);
    };

    const handleSubuserToggle = (isVisible) => {
        setsubuser(isVisible);
    };

    const handlenavClick = () => {
        setnavbar2(!navbar2)
    }

    const handleTheme = () => {
        settheme(!theme)
    }

    useEffect(() => {
        if (homeRef.current) {
            homeRef.current.style.backgroundColor = theme ? 'black' : 'white';
            homeRef.current.style.color = theme ? 'white' : 'black';
        }
    }, [theme]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
        }
    }

    const handleNext = () => {
        if (currentIndex < Products.length - 3) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const handlePrevious2 = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleNext2 = () => {
        if (currentIndex < Products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const ref = useRef(null);
    const ref2 = useRef(null);
    const homeRef = useRef();
    const isInview = useInView(ref, ref2, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start("visible")
        }
    }, [isInview]);

    return (
        <>
            {theme ? <nav className='dark-nav flex py-3 px-4 items-center justify-between relative bg-black text-white'>
                <div className="logo lg:px-2"><NavLink to="/"><img className='h-6 cursor-pointer' src="/images/logo.svg" alt="" /></NavLink></div>

                <ul className='lg:flex lg:gap-7 hidden text-sm px-3'>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubstoreToggle(true)}
                        onMouseLeave={() => handleSubstoreToggle(false)}><NavLink to="/store" target='_blank'> Store </NavLink> {substore && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] z-10'>
                                <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Shop in OnePlus Store <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8 py-10'>
                                    {storeitems.map((s) => (
                                        <div key={s.name}>
                                            <div className="card cursor-pointer flex flex-col items-center px-4 py-5 mx-3 my-3">
                                                <img className='h-[100px]' src={s.img} />
                                                <span className='pt-5'>{s.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}</li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubphoneToggle(true)}
                        onMouseLeave={() => handleSubphoneToggle(false)}><NavLink to="/phone" target='_blank'> Phone </NavLink> {subphone && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center text-xl px-12 py-12 cursor-pointer'>Explore all Phone <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <h3 className='text-sm text-gray-500 px-8'>Flagship Series</h3>
                                <div className='flex gap-5 px-8'>
                                    {phoneitems.map((p) => (
                                        <div key={p.name}>
                                            <div className="card cursor-pointer flex flex-col items-center px-4 py-5 my-3">
                                                <img className='h-[100px]' src={p.img} />
                                                <span className='pt-5'>{p.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className='text-sm text-gray-500 px-8 pt-12'>Nord Series</h3>
                                <div className='flex gap-5 px-8 mb-5'>
                                    {phoneitems2.map((p2) => (
                                        <div key={p2.name}>
                                            <div className="card cursor-pointer flex flex-col items-center px-4 py-5 my-3">
                                                <img className='h-[100px]' src={p2.img} />
                                                <span className='pt-5'>{p2.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}</li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubtabletToggle(true)}
                        onMouseLeave={() => handleSubtabletToggle(false)}> Tablet {subtablet && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Explore all Tablet <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8 py-10'>
                                    {tabletitems.map((t) => (
                                        <div key={t.name}>
                                            <div className="card cursor-pointer flex flex-col items-center px-4 py-5 mx-3 my-3">
                                                <img className='h-[150px]' src={t.img} />
                                                <span className='pt-5'>{t.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}</li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubwatchToggle(true)}
                        onMouseLeave={() => handleSubwatchToggle(false)}> Wearables {subwatch && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Explore all Wearables <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8 py-10'>
                                    {watchitems.map((w) => (
                                        <div key={w.name}>
                                            <div className="card cursor-pointer flex flex-col items-center px-4 py-5 mx-3 my-3">
                                                <img className='h-[150px]' src={w.img} />
                                                <span className='pt-5'>{w.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}</li>
                    <li className='cursor-pointer'>Audio</li>
                    <li className='cursor-pointer'>More Products</li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubtopiaToggle(true)}
                        onMouseLeave={() => handleSubtopiaToggle(false)}> OneTopia {subtopia && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Evolve you digital life <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8'>
                                    <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                        <li className='cursor-pointer'>2024 OnePlus Photography Awards</li>
                                        <li className='cursor-pointer'>OnePlus Featuring</li>
                                        <li className='cursor-pointer'>OxygenOS</li>
                                    </ul>
                                </div>
                            </div>
                        )} </li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubcommunityToggle(true)}
                        onMouseLeave={() => handleSubcommunityToggle(false)}> Community {subcommunity && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Welcome to OnePlus Community <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8'>
                                    <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                        <li className='cursor-pointer'>Community</li>
                                        <li className='cursor-pointer'>Power of Community</li>
                                    </ul>
                                </div>
                            </div>
                        )} </li>
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubsupportToggle(true)}
                        onMouseLeave={() => handleSubsupportToggle(false)}> Support {subsupport && (
                            <div className='absolute cursor-default left-0 mt-2 bg-[#1b1b1b] text-white w-full min-h-[85vh] shadow-lg z-10'>
                                <h2 className='flex items-center cursor-pointer text-xl px-12 pt-16 pb-4'>Welcome to OnePlus Support <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                <div className='flex gap-5 px-8'>
                                    <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                        <li className='cursor-pointer'>Repair Service</li>
                                        <li className='cursor-pointer'>Service Record</li>
                                        <li className='cursor-pointer'>Protection Plan</li>
                                        <li className='cursor-pointer'>User Manuals</li>
                                    </ul>
                                </div>
                            </div>
                        )}</li>
                </ul>

                <ul className="flex gap-7 lg:px-2">
                    <li className='cursor-pointer'
                        onMouseEnter={() => handleSubcartToggle(true)}
                        onMouseLeave={() => handleSubcartToggle(false)}> <RiShoppingCartLine style={{ fontSize: '21px' }} /> {subcart && (
                            <div className='absolute cursor-default right-0 mt-2 bg-[#1b1b1b] text-white w-full lg:w-[25%] h-[280px] shadow-lg z-10'>
                                <h2 className='text-md text-center py-8'>Your cart is empty!</h2>
                                <div className="cart-icon flex justify-center pt-10 pb-4"><FiShoppingCart style={{ fontSize: '80px' }} /></div>
                                <p className='text-sm text-center text-white'>You are <span className='text-gray-400 font-bold'>₹499</span> away from free shipping.</p>
                            </div>
                        )} </li>
                    <li className='cursor-pointer hidden lg:block'
                        onMouseEnter={() => handleSubuserToggle(true)}
                        onMouseLeave={() => handleSubuserToggle(false)}><CgProfile style={{ fontSize: '21px' }} /> {subuser && (
                            <div className='absolute cursor-default right-0 mt-2 bg-[#1b1b1b] text-white w-[20%] h-[430px] shadow-lg z-10'>
                                <div className="welcome flex items-center px-3 py-5 gap-3">
                                    <img src="https://image01.oneplus.net/shop/202207/12/1-M00-3D-6B-rB8LB2LM696ARA9oAAACNk-7O5M305.svg" alt="" />
                                    <div className="flex flex-col">
                                        <h3 className='text-md'>Welcome to OnePlus</h3>
                                        <div className='text-blue-600 flex items-center cursor-pointer text-sm gap-3'>
                                            <span className='hover:underline'>Sign up</span>
                                            <span className='hover:underline'>Sign In</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className='flex flex-col py-2 gap-2 bg-[#1b1b1b] text-white'>
                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://image01-in.oneplus.net/shop/202206/14/1-M00-3D-46-rB8LB2KoUleAUUNsAAABv1Ho6hY193.svg" alt='orders' /> Orders </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>

                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://image01-in.oneplus.net/shop/202206/09/1-M00-3C-FD-rB8LB2KhoROAB5tdAAAEVeKlMcI807.svg" alt='orders' /> Account </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>

                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://image01.oneplus.net/shop/202311/15/1-M00-48-89-CkvTlmVUbrqAHXt3AAAFepATGcY166.svg" alt='orders' /> Achievement </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>

                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://www.oneplus.in/content/dam/oasis/coupon.svg" alt='orders' /> Coupons </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>

                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8LB2KsMNmAAfPlAAAHqNPsTMM380.svg" alt='orders' /> RedCoins </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>

                                    <li className='w-full px-4 py-3 flex justify-between cursor-pointer'> <div className='flex items-center gap-1'>
                                        <img className='filter' src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8bwmKsMNiAJlS1AAADtHsnzMM635.svg" alt='orders' />
                                        Red Cable Club </div>
                                        <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                    </li>
                                </ul>
                            </div>
                        )} </li>
                    <li className='cursor-pointer'>
                        {theme ? (<BsMoonStars style={{ fontSize: '23px' }} onClick={handleTheme} />) :
                            (<ImSun style={{ fontSize: '23px' }} onClick={handleTheme} />)}
                    </li>

                    <li className='cursor-pointer block lg:hidden'>
                        {navbar2 ? (<LiaTimesSolid style={{ fontSize: '23px' }} onClick={handlenavClick} />) :
                            (<RxHamburgerMenu style={{ fontSize: '23px' }} onClick={handlenavClick} />)}
                    </li>
                </ul>
            </nav> :
                <nav className='flex py-3 px-4 items-center justify-between relative'>
                    <div className="logo lg:px-2"><NavLink to="/"><img className='h-6 cursor-pointer' src="/images/logo.svg" alt="" /></NavLink></div>

                    <ul className='lg:flex lg:gap-7 hidden text-sm px-3'>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubstoreToggle(true)}
                            onMouseLeave={() => handleSubstoreToggle(false)}><NavLink to="/store" target='_blank'> Store </NavLink> {substore && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] z-10'>
                                    <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Shop in OnePlus Store <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8 py-10'>
                                        {storeitems.map((s) => (
                                            <div key={s.name}>
                                                <div className="card cursor-pointer flex flex-col border rounded-lg items-center px-4 py-5 mx-3 my-3 hover:shadow-xl shadow-black transition-all duration-300 ease-in">
                                                    <img className='h-[100px]' src={s.img} />
                                                    <span>{s.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}</li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubphoneToggle(true)}
                            onMouseLeave={() => handleSubphoneToggle(false)}><NavLink to="/phone" target='_blank'> Phone </NavLink> {subphone && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center text-xl px-12 py-12 cursor-pointer'>Explore all Phone <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <h3 className='text-sm text-gray-500 px-8'>Flagship Series</h3>
                                    <div className='flex gap-5 px-8'>
                                        {phoneitems.map((p) => (
                                            <div key={p.name}>
                                                <div className="card cursor-pointer flex flex-col border rounded-lg items-center px-4 py-5 my-3 hover:shadow-xl shadow-black transition-all duration-300 ease-in">
                                                    <img className='h-[100px]' src={p.img} />
                                                    <span>{p.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className='text-sm text-gray-500 px-8 pt-12'>Nord Series</h3>
                                    <div className='flex gap-5 px-8 mb-5'>
                                        {phoneitems2.map((p2) => (
                                            <div key={p2.name}>
                                                <div className="card cursor-pointer flex flex-col border rounded-lg items-center px-4 py-5 my-3 hover:shadow-xl shadow-black transition-all duration-300 ease-in">
                                                    <img className='h-[100px]' src={p2.img} />
                                                    <span>{p2.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}</li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubtabletToggle(true)}
                            onMouseLeave={() => handleSubtabletToggle(false)}> Tablet {subtablet && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Explore all Tablet <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8 py-10'>
                                        {tabletitems.map((t) => (
                                            <div key={t.name}>
                                                <div className="card cursor-pointer flex flex-col border rounded-lg items-center px-4 py-5 mx-3 my-3 hover:shadow-xl shadow-black transition-all duration-300 ease-in">
                                                    <img className='h-[150px]' src={t.img} />
                                                    <span>{t.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}</li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubwatchToggle(true)}
                            onMouseLeave={() => handleSubwatchToggle(false)}> Wearables {subwatch && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Explore all Wearables <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8 py-10'>
                                        {watchitems.map((w) => (
                                            <div key={w.name}>
                                                <div className="card cursor-pointer flex flex-col border rounded-lg items-center px-4 py-5 mx-3 my-3 hover:shadow-xl shadow-black transition-all duration-300 ease-in">
                                                    <img className='h-[150px]' src={w.img} />
                                                    <span>{w.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}</li>
                        <li className='cursor-pointer'>Audio</li>
                        <li className='cursor-pointer'>More Products</li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubtopiaToggle(true)}
                            onMouseLeave={() => handleSubtopiaToggle(false)}> OneTopia {subtopia && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Evolve you digital life <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8'>
                                        <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                            <li className='cursor-pointer'>2024 OnePlus Photography Awards</li>
                                            <li className='cursor-pointer'>OnePlus Featuring</li>
                                            <li className='cursor-pointer'>OxygenOS</li>
                                        </ul>
                                    </div>
                                </div>
                            )} </li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubcommunityToggle(true)}
                            onMouseLeave={() => handleSubcommunityToggle(false)}> Community {subcommunity && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center text-xl px-12 pt-16 pb-4 cursor-pointer'>Welcome to OnePlus Community <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8'>
                                        <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                            <li className='cursor-pointer'>Community</li>
                                            <li className='cursor-pointer'>Power of Community</li>
                                        </ul>
                                    </div>
                                </div>
                            )} </li>
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubsupportToggle(true)}
                            onMouseLeave={() => handleSubsupportToggle(false)}> Support {subsupport && (
                                <div className='absolute cursor-default left-0 mt-2 bg-white w-full min-h-[85vh] shadow-lg z-10'>
                                    <h2 className='flex items-center cursor-pointer text-xl px-12 pt-16 pb-4'>Welcome to OnePlus Support <MdKeyboardArrowRight style={{ fontSize: '35px' }} /></h2>
                                    <div className='flex gap-5 px-8'>
                                        <ul className='flex flex-col gap-3 px-4 py-7 text-sm'>
                                            <li className='cursor-pointer'>Repair Service</li>
                                            <li className='cursor-pointer'>Service Record</li>
                                            <li className='cursor-pointer'>Protection Plan</li>
                                            <li className='cursor-pointer'>User Manuals</li>
                                        </ul>
                                    </div>
                                </div>
                            )}</li>
                    </ul>

                    <ul className="flex gap-7 lg:px-2">
                        <li className='cursor-pointer'
                            onMouseEnter={() => handleSubcartToggle(true)}
                            onMouseLeave={() => handleSubcartToggle(false)}> <RiShoppingCartLine style={{ fontSize: '21px' }} /> {subcart && (
                                <div className='absolute cursor-default right-0 mt-2 bg-white w-full lg:w-[25%] h-[280px] shadow-lg z-10'>
                                    <h2 className='text-md text-center py-8'>Your cart is empty!</h2>
                                    <div className="cart-icon flex justify-center pt-10 pb-4"><FiShoppingCart style={{ fontSize: '80px' }} /></div>
                                    <p className='text-sm text-center text-gray-500'>You are <span className='text-black font-bold'>₹499</span> away from free shipping.</p>
                                </div>
                            )} </li>
                        <li className='cursor-pointer hidden lg:block'
                            onMouseEnter={() => handleSubuserToggle(true)}
                            onMouseLeave={() => handleSubuserToggle(false)}><CgProfile style={{ fontSize: '21px' }} /> {subuser && (
                                <div className='absolute cursor-default right-0 mt-2 bg-white w-[20%] h-[430px] shadow-lg z-10'>
                                    <div className="welcome flex items-center px-3 py-5 gap-3">
                                        <img src="https://image01.oneplus.net/shop/202207/12/1-M00-3D-6B-rB8LB2LM696ARA9oAAACNk-7O5M305.svg" alt="" />
                                        <div className="flex flex-col">
                                            <h3 className='text-md'>Welcome to OnePlus</h3>
                                            <div className='text-blue-600 flex items-center cursor-pointer text-sm gap-3'>
                                                <span className='hover:underline'>Sign up</span>
                                                <span className='hover:underline'>Sign In</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className='flex flex-col py-2 gap-2'>
                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://image01-in.oneplus.net/shop/202206/14/1-M00-3D-46-rB8LB2KoUleAUUNsAAABv1Ho6hY193.svg" alt='orders' /> Orders </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>

                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://image01-in.oneplus.net/shop/202206/09/1-M00-3C-FD-rB8LB2KhoROAB5tdAAAEVeKlMcI807.svg" alt='orders' /> Account </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>

                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://image01.oneplus.net/shop/202311/15/1-M00-48-89-CkvTlmVUbrqAHXt3AAAFepATGcY166.svg" alt='orders' /> Achievement </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>

                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://www.oneplus.in/content/dam/oasis/coupon.svg" alt='orders' /> Coupons </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>

                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8LB2KsMNmAAfPlAAAHqNPsTMM380.svg" alt='orders' /> RedCoins </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>

                                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                                            <img src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8bwmKsMNiAJlS1AAADtHsnzMM635.svg" alt='orders' />
                                            Red Cable Club </div>
                                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                                        </li>
                                    </ul>
                                </div>
                            )} </li>
                        <li className='cursor-pointer'>
                            {theme ? (<BsMoonStars style={{ fontSize: '23px' }} onClick={handleTheme} />) :
                                (<ImSun style={{ fontSize: '23px' }} onClick={handleTheme} />)}
                        </li>

                        <li className='cursor-pointer block lg:hidden'>
                            {navbar2 ? (<LiaTimesSolid style={{ fontSize: '23px' }} onClick={handlenavClick} />) :
                                (<RxHamburgerMenu style={{ fontSize: '23px' }} onClick={handlenavClick} />)}
                        </li>
                    </ul>
                </nav>}

            {navbar2 && <div className="another-nav absolute z-10 h-[600px] overflow-y-scroll scrollbar w-full bg-gray-100">

                <ul className='flex flex-col gap-4 py-5 text-lg bg-white mb-7'>
                    <NavLink to="/store" target='_blank'> <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> Store <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li> </NavLink>

                    <NavLink to="/phone" target='_blank'> <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Phone <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li> </NavLink>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Tablet <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Wearables <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Audio <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>More Products <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>OneTopia <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Community <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Support <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>
                </ul>

                <div className="bg-white">
                    <div className="welcome flex items-center px-3 py-5 gap-3">
                        <img src="https://image01.oneplus.net/shop/202207/12/1-M00-3D-6B-rB8LB2LM696ARA9oAAACNk-7O5M305.svg" alt="" />
                        <div className="flex flex-col">
                            <h3 className='text-md'>Welcome to OnePlus</h3>
                            <div className='text-blue-600 flex items-center cursor-pointer text-sm gap-3'>
                                <span className='hover:underline'>Sign up</span>
                                <span className='hover:underline'>Sign In</span>
                            </div>
                        </div>
                    </div>

                    <ul className='flex flex-col py-4 gap-5 text-sm'>
                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://image01-in.oneplus.net/shop/202206/14/1-M00-3D-46-rB8LB2KoUleAUUNsAAABv1Ho6hY193.svg" alt='orders' /> Orders </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://image01-in.oneplus.net/shop/202206/09/1-M00-3C-FD-rB8LB2KhoROAB5tdAAAEVeKlMcI807.svg" alt='orders' /> Account </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://image01.oneplus.net/shop/202311/15/1-M00-48-89-CkvTlmVUbrqAHXt3AAAFepATGcY166.svg" alt='orders' /> Achievement </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://www.oneplus.in/content/dam/oasis/coupon.svg" alt='orders' /> Coupons </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8LB2KsMNmAAfPlAAAHqNPsTMM380.svg" alt='orders' /> RedCoins </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8bwmKsMNiAJlS1AAADtHsnzMM635.svg" alt='orders' />
                            Red Cable Club </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>
                    </ul>
                </div>

            </div>}

            {theme && navbar2 ? <div className="another-nav absolute z-10 h-[600px] overflow-y-scroll scrollbar w-full bg-black text-white">

                <ul className='flex flex-col gap-4 py-5 text-lg bg-[#1b1b1b] text-white mb-7'>
                    <NavLink to="/store" target='_blank'> <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> Store <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li> </NavLink>

                    <NavLink to="/phone" target='_blank'> <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Phone <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li> </NavLink>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Tablet <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Wearables <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Audio <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>More Products <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>OneTopia <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Community <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>

                    <li className='flex justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'>Support <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span></li>
                </ul>

                <div className="bg-[#1b1b1b] text-white">
                    <div className="welcome flex items-center px-3 py-5 gap-3">
                        <img src="https://image01.oneplus.net/shop/202207/12/1-M00-3D-6B-rB8LB2LM696ARA9oAAACNk-7O5M305.svg" alt="" />
                        <div className="flex flex-col">
                            <h3 className='text-md'>Welcome to OnePlus</h3>
                            <div className='text-blue-600 flex items-center cursor-pointer text-sm gap-3'>
                                <span className='hover:underline'>Sign up</span>
                                <span className='hover:underline'>Sign In</span>
                            </div>
                        </div>
                    </div>

                    <ul className='flex flex-col py-4 gap-5 text-sm'>
                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://image01-in.oneplus.net/shop/202206/14/1-M00-3D-46-rB8LB2KoUleAUUNsAAABv1Ho6hY193.svg" alt='orders' /> Orders </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://image01-in.oneplus.net/shop/202206/09/1-M00-3C-FD-rB8LB2KhoROAB5tdAAAEVeKlMcI807.svg" alt='orders' /> Account </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://image01.oneplus.net/shop/202311/15/1-M00-48-89-CkvTlmVUbrqAHXt3AAAFepATGcY166.svg" alt='orders' /> Achievement </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://www.oneplus.in/content/dam/oasis/coupon.svg" alt='orders' /> Coupons </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8LB2KsMNmAAfPlAAAHqNPsTMM380.svg" alt='orders' /> RedCoins </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>

                        <li className='w-full px-4 py-3 flex justify-between cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in'> <div className='flex items-center gap-1'>
                            <img className='filter' src="https://image01.oneplus.net/shop/202206/17/1-M00-3D-5A-rB8bwmKsMNiAJlS1AAADtHsnzMM635.svg" alt='orders' />
                            Red Cable Club </div>
                            <span><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></span>
                        </li>
                    </ul>
                </div>

            </div> : ""}


            {/* Home starts here  */}
            <div ref={homeRef}>
                <div className="header flex flex-col items-center relative z-0 w-full overflow-hidden">
                    <span className='text-white absolute text-xl py-5'>Pedal to the Metal</span>
                    <h2 className='text-white text-4xl lg:text-5xl absolute py-14 font-bold'>OnePlus Nord 4</h2>
                    <NavLink className='w-full' to="/phone" target='_blank'><img className='w-full h-[700px] cursor-pointer' src="/images/intro.png" alt="" /></NavLink>
                    <div className="flex flex-col text-white absolute bottom-0 items-center px-2 py-3">
                        <p className='text-sm md:text-lg px-4'>Sale is live! From ₹28,999 Avail Special Pre Order Discount of ₹1000. Avail Instant Bank Discount of ₹3000.</p>
                        <div className="flex w-full items-center justify-center gap-4">
                            <button className='bg-white py-1 my-2 text-black w-[60%] md:w-[20%] hover:bg-gray-200'>Pre-order Now</button>
                            <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                        </div>
                    </div>
                </div>

                <div ref={ref} className='oneplus12r my-5 w-full'>
                    {theme ? <div className="flex flex-col lg:flex-row items-center rounded-xl mx-4 mb-14 bg-[#1b1b1b] text-white">
                        <img className='md:w-[45%]' src="/images/oneplus12r.png" alt="" />
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className="flex flex-col items-center">
                            <h2 className='text-3xl md:text-5xl py-4 font-bold'>OnePlus 12R</h2>
                            <p className='w-full lg:w-[60%] px-3 py-5 text-sm sm:text-md'>Upgrade to 16GB+256GB variant before Jul 24th and enjoy ₹10,000 in savings - ₹3,000 bank discount, ₹2,000 price drop and upto ₹5,000 exchange bonus!</p>
                            <div className="flex w-full items-center justify-center gap-4">
                                <button className='bg-black py-1 my-2 text-white w-1/2 md:w-[20%]'>Buy Now</button>
                                <span className='text-xs underline cursor-pointer hover:text-blue-400'>Learn more</span>
                            </div>
                        </motion.div>
                    </div> : <div className="flex flex-col lg:flex-row items-center rounded-xl mx-4 mb-14 shadow-lg shadow-black">
                        <img className='md:w-[45%]' src="/images/oneplus12r.png" alt="" />
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className="flex flex-col items-center">
                            <h2 className='text-3xl md:text-5xl py-4 font-bold'>OnePlus 12R</h2>
                            <p className='w-full lg:w-[60%] px-3 py-5 text-sm sm:text-md'>Upgrade to 16GB+256GB variant before Jul 24th and enjoy ₹10,000 in savings - ₹3,000 bank discount, ₹2,000 price drop and upto ₹5,000 exchange bonus!</p>
                            <div className="flex w-full items-center justify-center gap-4">
                                <button className='bg-black py-1 my-2 text-white w-1/2 md:w-[20%] hover:bg-slate-800'>Buy Now</button>
                                <span className='text-xs underline cursor-pointer hover:text-blue-400'>Learn more</span>
                            </div>
                        </motion.div>
                    </div>}

                    {theme ? <div className="flex flex-col-reverse lg:flex-row items-center mx-4 rounded-xl shadow-lg shadow-black bg-[#1b1b1b] text-white overflow-hidden">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.5, delay: 2 }} className="flex flex-col items-center">
                            <h2 className='text-2xl md:text-4xl px-3 py-4 font-bold'>OnePlus 12R in Sunset Dune</h2>
                            <p className='w-full px-3 py-5 text-sm sm:text-md'>Sale is live! From ₹39,999 incl. Bank Discount Get a free OnePlus Buds 3 (worth ₹6,499) with purchase. <br /> *Limited Quantity.</p>
                            <div className="flex w-full items-center justify-center gap-4">
                                <button className='bg-black py-1 my-2 text-white w-1/2 md:w-[20%] hover:bg-slate-800'>Buy Now</button>
                                <span className='text-xs underline cursor-pointer hover:text-blue-400'>Learn more</span>
                            </div>
                        </motion.div>
                        <img className='lg:w-[60%] lg:ml-5 ml-0' src="/images/oneplus12r2.png" alt="" />
                    </div> : <div className="flex flex-col-reverse lg:flex-row items-center mx-4 lg:py-4 rounded-xl shadow-lg shadow-black">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.5, delay: 2 }} className="flex flex-col items-center">
                            <h2 className='text-2xl md:text-4xl px-3 py-4 font-bold'>OnePlus 12R in Sunset Dune</h2>
                            <p className='w-full px-3 py-5 text-sm sm:text-md'>Sale is live! From ₹39,999 incl. Bank Discount Get a free OnePlus Buds 3 (worth ₹6,499) with purchase. <br /> *Limited Quantity.</p>
                            <div className="flex w-full items-center justify-center gap-4">
                                <button className='bg-black py-1 my-2 text-white w-1/2 md:w-[20%] hover:bg-slate-800'>Buy Now</button>
                                <span className='text-xs underline cursor-pointer hover:text-blue-400'>Learn more</span>
                            </div>
                        </motion.div>
                        <img className='lg:w-[60%] mx-5' src="/images/oneplus12r2.png" alt="" />
                    </div>}
                </div>

                {theme ? <div ref={ref2} className="oneplusnordce w-full overflow-hidden bg-black text-white">
                    <h1 className='font-bold text-xl md:text-3xl text-center py-6'>OnePlus Nord CE4 Lite 5G Series</h1>
                    <div className="container w-full flex flex-col lg:flex-row justify-center mb-10">
                        {data.map((d) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{ duration: 0.5, delay: 3 }} key={d.number} className='flex justify-center'>
                                <div className="card flex flex-col items-center my-3 gap-3">
                                    <img src={d.img} alt="" className='px-3 h-96 pb-4' />
                                    <h2 className='font-bold text-xl px-5 text-center'>{d.name}</h2>
                                    <span className='px-5'>{d.msg}</span>
                                    <button className='py-1 my-2 bg-[#1b1b1b] text-white w-[35%] md:w-[20%]'>Buy Now</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> : <div ref={ref2} className="oneplusnordce w-full overflow-hidden">
                    <h1 className='font-bold text-xl md:text-3xl text-center py-6'>OnePlus Nord CE4 Lite 5G Series</h1>
                    <div className="container w-full flex flex-col lg:flex-row justify-center mb-10">
                        {data.map((d) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{ duration: 0.5, delay: 3 }} key={d.number} className='flex justify-center'>
                                <div className="card flex flex-col items-center my-3 gap-3">
                                    <img src={d.img} alt="" className='px-3 h-96 pb-4' />
                                    <h2 className='font-bold text-xl px-5 text-center'>{d.name}</h2>
                                    <span className='px-5'>{d.msg}</span>
                                    <button className='py-1 my-2 bg-[#1b1b1b] text-white w-[35%] md:w-[20%] hover:bg-slate-800'>Buy Now</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>}

                {theme ? <div className='other-products1 hidden lg:block my-10 bg-black text-white'>
                    <h1 className='font-bold text-center text-2xl py-4'>Our Other Products</h1>
                    <div className="products-container flex justify-center my-5 transition-transform duration-500 ease-in-out">
                        {Products.slice(currentIndex, currentIndex + 3).map((p) => (
                            <div key={p.name}>
                                <div className="products-card flex flex-col items-center mx-4 px-5 py-4 bg-[#1b1b1b]">
                                    <h3 className='text-xl'>{p.name}</h3>
                                    <img src={p.img} alt="" className='h-80 w-full' />
                                    <div className="flex w-full items-center justify-center gap-4 py-4">
                                        <button className='bg-black py-1 my-2 text-white w-[40%]'>Buy Now</button>
                                        <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="navigation flex justify-center items-center">
                        <MdKeyboardArrowLeft
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrevious}
                        />
                        <MdKeyboardArrowRight
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex >= Products.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext}
                        />
                        <NavLink to="/store" target='_blank'> <span className='text-sm text-white absolute right-0 cursor-pointer flex items-center w-[10%]'>View all Products <MdKeyboardArrowRight style={{ fontSize: '20px' }} /></span></NavLink>
                    </div>

                </div> : <div className='other-products1 hidden lg:block my-10'>
                    <h1 className='font-bold text-center text-2xl py-4'>Our Other Products</h1>
                    <div className="products-container flex justify-center my-5 transition-transform duration-500 ease-in-out">
                        {Products.slice(currentIndex, currentIndex + 3).map((p) => (
                            <div key={p.name}>
                                <div className="products-card flex flex-col items-center mx-4 border-2 rounded-xl px-5 py-4 shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                    <h3 className='text-xl pb-3'>{p.name}</h3>
                                    <img src={p.img} alt="" className='h-80 w-full' />
                                    <div className="flex w-full items-center justify-center gap-4 py-4">
                                        <button className='bg-black py-1 my-2 text-white w-[40%]'>Buy Now</button>
                                        <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="navigation flex justify-center items-center">
                        <MdKeyboardArrowLeft
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrevious}
                        />
                        <MdKeyboardArrowRight
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex >= Products.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext}
                        />
                    </div>
                    <NavLink to="/store" target='_blank'> <span className='text-sm absolute right-0 mx-8 cursor-pointer flex items-center hover:text-gray-600'>View all Products <MdKeyboardArrowRight style={{ fontSize: '20px' }} /></span></NavLink>
                </div>}

                {theme ? <div className='other-products2 block lg:hidden my-10 bg-black text-white'>
                    <h1 className='font-bold text-center text-2xl py-4'>Our Other Products</h1>
                    <div className="products-container flex justify-center my-5 transition-transform duration-500 ease-in-out">
                        {Products.slice(currentIndex, currentIndex + 1).map((p) => (
                            <div key={p.name}>
                                <div className="products-card flex flex-col items-center mx-4 px-5 py-4 cursor-pointer bg-[#1b1b1b]">
                                    <h3 className='text-xl sm:text-2xl pb-3'>{p.name}</h3>
                                    <img src={p.img} alt="" className='h-80 w-full' />
                                    <div className="flex w-full items-center justify-center gap-4 py-4">
                                        <button className='bg-black py-1 my-2 text-white w-[40%]'>Buy Now</button>
                                        <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="navigation flex justify-center items-center">
                        <MdKeyboardArrowLeft
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrevious2}
                        />
                        <MdKeyboardArrowRight
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex >= Products.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext2}
                        />
                    </div>
                    <NavLink to="/store" target='_blank'> <span className='text-xs sm:text-md absolute right-0 mx-8 cursor-pointer flex items-center'>View all Products <MdKeyboardArrowRight style={{ fontSize: '20px' }} /> </span> </NavLink>
                </div> : <div className='other-products2 block lg:hidden my-10'>
                    <h1 className='font-bold text-center text-2xl py-4'>Our Other Products</h1>
                    <div className="products-container flex justify-center my-5 transition-transform duration-500 ease-in-out">
                        {Products.slice(currentIndex, currentIndex + 1).map((p) => (
                            <div key={p.name}>
                                <div className="products-card flex flex-col items-center mx-4 border-2 rounded-xl px-5 py-4 shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                    <h3 className='text-xl sm:text-2xl'>{p.name}</h3>
                                    <img src={p.img} alt="" className='h-80 w-full' />
                                    <div className="flex w-full items-center justify-center gap-4 py-4">
                                        <button className='bg-black py-1 my-2 text-white w-[40%]'>Buy Now</button>
                                        <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="navigation flex justify-center items-center">
                        <MdKeyboardArrowLeft
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrevious2}
                        />
                        <MdKeyboardArrowRight
                            style={{ fontSize: '35px' }}
                            className={`cursor-pointer ${currentIndex >= Products.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext2}
                        />
                    </div>
                    <NavLink to="/store" target='_blank'> <span className='text-xs sm:text-md absolute right-0 mx-8 cursor-pointer flex items-center hover:text-gray-600'>View all Products <MdKeyboardArrowRight style={{ fontSize: '20px' }} /> </span> </NavLink>
                </div>}

                {theme ? <div className='onetopia-container my-7 w-full flex flex-col overflow-hidden bg-black text-white'>
                    <h2 className='text-xl px-10 py-4'>OneTopia</h2>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />
                    <h1 className='text-xl lg:text-3xl px-10 py-10'>Relentless innovation defines who we are.</h1>
                    <div className="flex flex-col lg:flex-row w-full justify-center">
                        <div className='flex flex-col items-baseline justify-center gap-5 relative ml-5'>
                            <img className='relative cursor-pointer' src="/images/oxygenos.png" alt="oxygenos" />
                            <h3 className='absolute top-0 text-white text-lg pt-4 px-3'>OxygenOS 14</h3>
                            <h2 className='absolute text-white top-0 py-14 text-2xl sm:text-4xl px-3'>Evolved to Exceed</h2>
                        </div>

                        <div className='flex flex-col-reverse mx-6 my-3 lg:my-0 gap-4 relative top-0'>
                            <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                            <span>The signature OxygenOS experience has evolved. Driven by the next-generation Trinity Engine, innovative features and refreshed design elements, discover the pinnacle of fast and smooth.</span>
                        </div>
                    </div>

                    <div className='my-5 pt-10 flex flex-col-reverse lg:flex-row w-full px-10 justify-center'>
                        <div className="flex flex-col justify-between">
                            <div className='mx-4 my-6'>
                                <span className='text-xl'>Make the Moment</span>
                                <h2 className='text-3xl sm:text-4xl pt-4'>2024 OnePlus Photography Awards</h2>
                            </div>

                            <div className='flex flex-col-reverse w-full pr-4 mx-6 gap-4 relative top-0'>
                                <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                <span className='text-sm'>The 2024 OnePlus Photography Awards welcomes EVERY photography enthusiast around the world. Showcase your unique creativity and remarkable talent, and share your visual story with breathtaking images. Make your Moment on OnePlus.</span>
                            </div>
                        </div>

                        <img className='cursor-pointer w-full lg:w-[60%]' src="/images/photography.png" alt="photography" />
                    </div>
                </div> : <div className='onetopia-container my-7 w-full lg:w-[95%] overflow-hidden'>
                    <h2 className='text-xl px-10'>OneTopia</h2>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />
                    <h1 className='text-xl lg:text-3xl px-10 py-10'>Relentless innovation defines who we are.</h1>
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className='flex flex-col items-baseline justify-center gap-5 relative ml-5'>
                            <img className='relative cursor-pointer' src="/images/oxygenos.png" alt="oxygenos" />
                            <h3 className='absolute top-0 text-white text-lg pt-4 px-3'>OxygenOS 14</h3>
                            <h2 className='absolute text-white top-0 py-14 text-2xl sm:text-4xl px-3'>Evolved to Exceed</h2>
                        </div>

                        <div className='flex flex-col-reverse mx-6 my-3 lg:my-0 gap-4 relative top-0'>
                            <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                            <span>The signature OxygenOS experience has evolved. Driven by the next-generation Trinity Engine, innovative features and refreshed design elements, discover the pinnacle of fast and smooth.</span>
                        </div>
                    </div>

                    <div className='my-5 pt-10 flex flex-col-reverse lg:flex-row w-full px-10 justify-center'>
                        <div className="flex flex-col justify-between">
                            <div className='mx-4 my-6'>
                                <span className='text-xl'>Make the Moment</span>
                                <h2 className='text-3xl sm:text-4xl pt-4'>2024 OnePlus Photography Awards</h2>
                            </div>

                            <div className='flex flex-col-reverse w-full pr-4 mx-6 gap-4 relative top-0'>
                                <span className='text-xs underline cursor-pointer hover:text-blue-600'>Learn more</span>
                                <span className='text-sm'>The 2024 OnePlus Photography Awards welcomes EVERY photography enthusiast around the world. Showcase your unique creativity and remarkable talent, and share your visual story with breathtaking images. Make your Moment on OnePlus.</span>
                            </div>
                        </div>

                        <img className='cursor-pointer w-full lg:w-[60%]' src="/images/photography.png" alt="photography" />
                    </div>
                </div>}

                {theme ? <div className='support-container w-full mt-12 my-4 bg-black text-white'>
                    <div className="flex items-center w-full justify-between">
                        <h2 className='text-md sm:text-xl px-2 sm:px-10 '>Support</h2>
                        <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View More <span className='text-red-400 px-2'>+</span></span>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />

                    <div className="support flex flex-col lg:flex-row items-center justify-around py-10">
                        <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 h-[600px] sm:h-[400px] w-full sm:w-[650px] bg-[#1b1b1b] text-white rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 pt-8 sm:pt-0 text-center sm:text-start'>One-on-One with OnePlus</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 text-center sm:text-start'>Your personal helpdesk.</h2>
                                </div>

                                <div className='flex flex-col-reverse justify-center mx-6 gap-4 relative top-0 py-4'>
                                    <span className='text-sm w-[25%] underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Let's chat</span>
                                    <span className='text-sm'>From finding the perfect phone to quickly resolving queries, we're always ready to help.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/images/support1.png" alt="" />
                        </div>
                        <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 mt-7 lg:mt-0 h-[600px] sm:h-[400px] w-full sm:w-[650px] relative bg-[#1b1b1b] text-white rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 text-center sm:text-start'>OnePlus Service Center</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 pb-3 text-center sm:text-start'>Our technical team is here to help.</h2>
                                </div>

                                <div className='flex flex-col-reverse w-full sm:w-[40%] mx-3 gap-4 relative sm:absolute bottom-0 sm:px-0 py-4'>
                                    <span className='text-sm w-[75%] px-2 underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Find nearest service center</span>
                                    <span className='text-sm px-2'>We have over 250 authorized service centers across India. All the fully-trained OnePlus staff are at your service.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/images/support2.png" alt="" />
                        </div>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />
                    <div className='flex flex-col w-full lg:flex-row lg:items-center lg:justify-around py-4'>
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Product Help <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Shopping FAQ <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Troubleshooting <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Protection Plan <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                    </div>
                </div> : <div className='support-container w-full mt-12 my-4'>
                    <div className="flex items-center w-full justify-between">
                        <h2 className='text-md sm:text-xl px-2 sm:px-10 '>Support</h2>
                        <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View More <span className='text-red-400 px-2'>+</span></span>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />

                    <div className="support flex flex-col lg:flex-row items-center justify-around py-10">
                        <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 h-[600px] sm:h-[400px] w-full sm:w-[650px] bg-gray-100 rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 pt-8 sm:pt-0 text-center sm:text-start'>One-on-One with OnePlus</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 text-center sm:text-start'>Your personal helpdesk.</h2>
                                </div>

                                <div className='flex flex-col-reverse justify-center mx-6 gap-4 relative top-0 py-4'>
                                    <span className='text-sm w-[25%] underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Let's chat</span>
                                    <span className='text-sm'>From finding the perfect phone to quickly resolving queries, we're always ready to help.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/images/support1.png" alt="" />
                        </div>
                        <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 mt-7 lg:mt-0 h-[600px] sm:h-[400px] w-full sm:w-[650px] relative bg-gray-100 rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 text-center sm:text-start'>OnePlus Service Center</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 pb-3 text-center sm:text-start'>Our technical team is here to help.</h2>
                                </div>

                                <div className='flex flex-col-reverse w-full sm:w-[40%] mx-3 gap-4 relative sm:absolute bottom-0 sm:px-0 py-4'>
                                    <span className='text-sm w-[75%] px-2 underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Find nearest service center</span>
                                    <span className='text-sm px-2'>We have over 250 authorized service centers across India. All the fully-trained OnePlus staff are at your service.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/images/support2.png" alt="" />
                        </div>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />
                    <div className='flex flex-col w-full lg:flex-row lg:items-center lg:justify-around py-4'>
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Product Help <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Shopping FAQ <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Troubleshooting <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[5%] rotate-90 my-2 hidden lg:block' />
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                        <h3 className='text-lg flex justify-between mx-7 my-3 lg:my-0 lg:mx-0 items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-200 ease-in'>Protection Plan <FaArrowRightLong className='hidden sm:block' /></h3>
                        <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2 block lg:hidden' />
                    </div>
                </div>}

                <div className="connected my-10 py-6">
                    {theme ? <h2 className='text-xl text-white px-10 py-5'>Stay Connected</h2> : <h2 className='text-xl px-10 py-5'>Stay Connected</h2>}
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto mb-7' />
                    <div className="connected-container flex flex-col lg:flex-row w-full px-3 items-center justify-around overflow-hidden ">
                        <div className="connected-card flex flex-col sm:flex-row items-center sm:items-stretch mx-3 my-3 lg:my-0 h-[300px] w-[430px] sm:w-[650px] bg-black rounded-lg relative">
                            <img className='object-fill w-full h-full' src="/images/connected1.png" alt="" />
                            <h2 className='text-white text-2xl text-center sm:text-start w-full lg:text-3xl absolute sm:w-[60%] p-3'>Shop With Exclusive Benefits</h2>
                            <h2 className='text-gray-300 text-center w-full sm:text-start absolute py-14 lg:py-28 px-3'>Download OnePlus store app on Google Play</h2>
                            <button className='border border-gray-500 rounded-md hover:border-white transition-all duration-300 ease-in px-4 py-2 w-[70%] sm:w-1/2 absolute text-white bottom-0 my-6 mx-4'>Google Play
                                <FaGooglePlay className='absolute top-[12px] right-[212px]' /></button>
                        </div>

                        <div className="connected-card flex flex-col items-center sm:items-stretch lg:flex-row mx-3 my-3 lg:my-0 h-[300px] w-[430px] sm:w-[650px] bg-black rounded-lg relative">
                            <img className='object-fill w-full h-full' src="/images/connected2.png" alt="" />
                            <h2 className='text-white text-center sm:text-start text-2xl lg:text-3xl absolute w-full sm:w-[60%] p-3'>Always be the first to know</h2>
                            <h2 className='text-gray-300 text-center sm:text-start w-full absolute py-14 lg:py-28 px-3'>Sign up for our newsletter!</h2>
                            <p className='text-xs w-full sm:w-1/2 text-center sm:text-start text-gray-400 absolute bottom-[75px] px-8 sm:px-3'>Subscribe to receive news, promotions and recommendations about OnePlus products and services from OnePlus, its agencies and partners.</p>
                            <button className='border border-gray-500 rounded-md hover:border-white transition-all duration-300 ease-in px-4 py-2 w-[70%] sm:w-1/2 absolute text-white bottom-0 my-6 mx-4'>Subscribe Now</button>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </>
    )
}

export default Home