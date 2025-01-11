import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import Rating from './Rating';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        img: 'images/phone.png',
        name: 'Phones',
    },
    {
        img: 'images/tablet.png',
        name: 'Tablet',
    },
    {
        img: 'images/earphone.png',
        name: 'Audio',
    },
    {
        img: 'images/watch.png',
        name: 'Wearables',
    },
    {
        img: 'images/cable.png',
        name: 'Power & Cables',
    },
    {
        img: 'images/cases.png',
        name: 'Cases & Protection',
    },
]

const phoneitems = [
    {
        img: 'images/phone.png',
        name: 'OnePlus 12',
    },
    {
        img: 'images/phone2.png',
        name: 'OnePlus 12R',
    },
    {
        img: 'images/phone3.png',
        name: 'OnePlus Open',
    },
    {
        img: 'images/phone4.png',
        name: 'OnePlus 11R 5G',
    },
]

const phoneitems2 = [
    {
        img: 'images/phone5.png',
        name: 'OnePlus Nord 4',
    },
    {
        img: 'images/phone6.png',
        name: 'OnePlus Nord CE4 Lite 5G',
    },
    {
        img: 'images/phone7.png',
        name: 'OnePlus Nord CE4',
    },
]

const tabletitems = [
    {
        img: 'images/tab.png',
        name: 'OnePlus Pad 2',
    },
    {
        img: 'images/tab2.png',
        name: 'OnePlus Pad',
    },
    {
        img: 'images/tab3.png',
        name: 'OnePlus Pad Go',
    },
    {
        img: 'images/tab4.png',
        name: 'Tablet Accessories',
    },
]

const watchitems = [
    {
        img: 'images/watch2.png',
        name: 'OnePlus Watch 2R',
    },
    {
        img: 'images/watch3.png',
        name: 'OnePlus Watch 2',
    }
]

const Store = () => {
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

    const storeRef = useRef()

    useEffect(() => {
        if (storeRef.current) {
            storeRef.current.style.backgroundColor = theme ? 'black' : 'white';
            storeRef.current.style.color = theme ? 'white' : 'black';
        }
    }, [theme]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [expIndex, setexpIndex] = useState(0);

    const storeitems = [
        {
            img: 'images/phone.png',
            name: 'Phones',
        },
        {
            img: 'images/tablet.png',
            name: 'Tablet',
        },
        {
            img: '/store_images/budspro2.png',
            name: 'Audio',
        },
        {
            img: 'images/watch.png',
            name: 'Wearables',
        },
        {
            img: '/store_images/cable.png',
            name: 'Power & Cables',
        },
        {
            img: 'images/cases.png',
            name: 'Cases & Protection',
        },
    ]

    const phones = [
        {
            name: 'OnePlus 12R',
            info: 'From ₹39,999 incl. Bank Discount Enjoy No Cost EMI up to 9 months.',
            img: '/store_images/oneplus12r.png'
        },
        {
            name: 'OnePlus Nord CE4 Lite 5G',
            info: 'From ₹17,999 Incl. Bank Discount',
            img: '/store_images/oneplusnordce.png'
        },
        {
            name: 'OnePlus 12',
            info: 'From ₹57,999 incl. Bank Discount Enjoy ₹7000 Instant Bank Discount and No Cost EMI up to 12 months.',
            img: '/store_images/oneplus12.png'
        },
        {
            name: 'OnePlus Nord CE4',
            info: 'From ₹21,999 Incl. Bank Discount. No Cost EMI upto 6 Months.',
            img: '/store_images/oneplusnordce4.png'
        },
    ]

    const experience = [
        {
            img: '/store_images/experience1.png',
            header: 'Red Cable Club Members Benefits',
            info: 'Continuous exclusive benefits & events coming up for Red Cable Club members.',
        },

        {
            img: '/store_images/experience2.png',
            header: 'Referral Program',
            info: 'Refer your friends to get exclusive rewards',
        },

        {
            img: '/store_images/experience3.png',
            header: 'Student Program',
            info: 'Avail additional discounts on OnePlus devices, exclusively for students.',
        },

        {
            img: '/store_images/experience4.png',
            header: 'Video Commerce',
            info: 'Know more about pur products through on demand videos.',
        },

        {
            img: '/store_images/experience5.png',
            header: 'Easy Upgrades',
            info: 'Opt to upgrade your device for a new OnePlus flagship and get 35% Assured Value after 24 months.',
        },

        {
            img: '/store_images/experience6.png',
            header: 'Exchange Program',
            info: 'Check out how much your old device is worth and switch to the Fast and Smooth experience.',
        },

        {
            img: '/store_images/experience7.png',
            header: 'Fast & Free Delivery',
            info: 'Most orders will arrive within 3 days *.',
        },

        {
            img: '/store_images/experience8.png',
            header: 'OnePlus Customer Support',
            info: 'Welcome to the OnePlus chat support - Platform for all e-store related queries and services!.',
        }
    ]

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    }

    const handleNext = () => {
        if (currentIndex < phones.length - 2) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const handlePrevious2 = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleNext2 = () => {
        if (currentIndex < phones.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleExpPrevious = () => {
        if (expIndex > 0) {
            setexpIndex(expIndex - 3);
        }
    }

    const handleExpNext = () => {
        if (expIndex < experience.length - 3) {
            setexpIndex(expIndex + 3);
        }
    };

    const handleExpPrevious2 = () => {
        if (expIndex > 0) {
            setexpIndex(expIndex - 1);
        }
    }

    const handleExpNext2 = () => {
        if (expIndex < experience.length - 1) {
            setexpIndex(expIndex + 1);
        }
    };

    const handleToast = () => {
        toast('Added to Favourites!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

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

            {/* Store Starts here  */}
            <div ref={storeRef}>
                <div className='w-full flex lg:items-center lg:justify-center flex-col xl:flex-row mb-4 lg:mb-0'>
                    <h1 className='text-3xl sm:text-4xl xl:text-5xl pt-5 xl:pt-0 pb-2 text-center xl:text-start mx-8 xl:w-[28%]'> Never Settle for anything less. </h1>
                    <div className='flex overflow-x-scroll scrollbar lg:overflow-hidden pl-0 lg:pl-5 gap-3 w-full xl:w-[70%] justify-start lg:justify-center xl:justify-stretch'>
                        {storeitems.map((s) => (
                            <div key={s.name}>
                                <div className="card cursor-pointer flex flex-col h-auto min-w-[150px] lg:w-[15%] rounded-lg items-center pb-5 pt-0 lg:pt-5 my-3">
                                    <img className='h-[100px] hover:scale-110 transition-all duration-200 ease-in pb-3' src={s.img} />
                                    <span className='text-xs'>{s.name}</span>
                                    <span className='text-red-500 text-xs'>New</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='Oneplus-Apex flex justify-center relative'>
                    <img className='w-full h-[300px] md:h-auto md:w-[95%] relative cursor-pointer' src="/store_images/oneplusapex.png" alt="Oneplus Apex" />
                    <h2 className='absolute text-white text-xl sm:text-3xl left-0 px-14 py-4'>OnePlus Open Apex Edition</h2>
                    <h3 className='absolute text-white text-xs sm:text-md left-0 px-14 py-14'>Available from August 10. Hit "Notify Me" to know more.</h3>

                    <div className="hidden lg:flex items-center absolute bottom-0 left-0 mx-12 my-3">
                        {theme ? <button className='bg-white text-black hover:bg-gray-200 border-none px-4 py-2 transition-all duration-200 ease-in'>Notify Me</button> : <button className='bg-white hover:bg-gray-200 border-none px-4 py-2 transition-all duration-200 ease-in'>Notify Me</button>}
                        <span className='text-white text-sm px-4 underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Learn more</span>
                    </div>
                </div>

                <div className="phones1 my-10 hidden lg:block">
                    <div className="phone-container flex justify-center items-center">
                        <MdKeyboardArrowLeft
                            className={`cursor-pointer transition-all duration-200 ease-in ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ fontSize: '75px' }}
                            onClick={handlePrevious} />
                        {phones.slice(currentIndex, currentIndex + 2).map((p) => (
                            <div className="flex text-black" key={p.name}>
                                <div className="phone-card h-[400px] w-full items-center mx-7 relative">
                                    <img className='h-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in' src={p.img} />
                                    <h2 className='absolute top-0 text-2xl xl:text-4xl px-4 py-5'>{p.name}</h2>
                                    <span className='absolute top-0 py-16 px-4 text-sm'>{p.info}</span>
                                    <button className='bg-black absolute bottom-0 my-3 mx-4 text-white hover:bg-gray-800 border-none px-4 py-2'>Buy Now</button>
                                </div>
                            </div>
                        ))}
                        <MdKeyboardArrowRight
                            className={`cursor-pointer transition-all duration-200 ease-in ${currentIndex >= phones.length - 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ fontSize: '75px' }}
                            onClick={handleNext} />
                    </div>
                </div>

                <div className="phones2 my-10 block lg:hidden">
                    <div className="phone-container flex justify-center items-center">
                        {phones.slice(currentIndex, currentIndex + 1).map((p) => (
                            <div className="flex text-black" key={p.name}>
                                <div className="phone-card h-[280px] w-auto items-center relative">
                                    <img className='h-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in' src={p.img} />
                                    <h2 className='absolute top-0 text-2xl px-4 py-5'>{p.name}</h2>
                                    <span className='absolute top-0 py-16 px-4 text-sm'>{p.info}</span>
                                    <button className='bg-black absolute bottom-0 my-3 mx-4 text-white hover:bg-gray-800 border-none px-4 py-2'>Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 justify-center items-center pt-4">
                        <MdKeyboardArrowLeft
                            className={`cursor-pointer transition-all duration-200 ease-in ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ fontSize: '45px' }}
                            onClick={handlePrevious2} />
                        <MdKeyboardArrowRight
                            className={`cursor-pointer transition-all duration-200 ease-in ${currentIndex >= phones.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ fontSize: '45px' }}
                            onClick={handleNext2} />
                    </div>
                </div>

                <div className="sale mt-14">
                    <h1 className='text-2xl px-4 sm:text-4xl sm:px-12'>On Sale Now</h1>
                    <div className="sale-container flex overflow-x-scroll scrollbar lg:overflow-hidden my-6 mx-0 md:mx-5">

                        {theme ? <div className="sale-card flex flex-col items-start mx-5 my-3 bg-[#1b1b1b] text-white rounded-xl h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/oneplusnordbuds.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>Nord Buds 3 Pro</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹3,299</h3>
                        </div> : <div className="sale-card flex flex-col items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img src="/store_images/oneplusnordbuds.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>Nord Buds 3 Pro</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹3,299</h3>
                        </div>}

                        {theme ? <div className="sale-card flex flex-col items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/onepluswatch2r.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus Watch 2R</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹17,999</h3>
                        </div> : <div className="sale-card flex flex-col items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img src="/store_images/onepluswatch2r.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus Watch 2R</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹17,999</h3>
                        </div>}

                        {theme ? <div className="sale-card flex flex-col items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer'  src="/store_images/oneplusopen.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 6% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus Open</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹139,999</h3>
                        </div> : <div className="sale-card flex flex-col items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img  src="/store_images/oneplusopen.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 6% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus Open</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹139,999</h3>
                        </div>}

                        {theme ? <div className="sale-card flex flex-col items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/oneplus11r.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus 11R 5G</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹35,999</h3>
                        </div> : <div className="sale-card flex flex-col items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full rounded-xl shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                            <img src="/store_images/oneplus11r.png" alt="" />
                            <span className='text-red-500 text-xs md:text-sm px-4'>NEW  Up to 10% off</span>
                            <h2 className='text-md md:text-2xl px-4 py-3'>OnePlus 11R 5G</h2>
                            <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹35,999</h3>
                        </div>}
                    </div>
                </div>

                <div className="exchange my-14 mx-2 flex flex-col xl:flex-row xl:justify-around">
                    <div className='flex flex-col justify-normal xl:justify-between w-full xl:w-[45%]'>
                        <h1 className='text-3xl md:text-5xl px-8 py-5'>Exchange Program</h1>
                        <div className='flex flex-col px-8'>
                            {theme ? <p className='text-sm text-gray-500'>Upgrade your old phone to the latest OnePlus device.</p> : <p className='text-sm text-gray-700'>Upgrade your old phone to the latest OnePlus device.</p>}
                            <span className='underline py-4 cursor-pointer w-1/2 md:w-[20%] hover:text-blue-500 transition-all duration-300 ease-in'>Get Started</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap justify-center xl:justify-stretch">
                        <div className='flex flex-col mx-4 items-center xl:items-start'>
                            <img className='h-[260px] hover:scale-105 transition-all duration-200 ease-in cursor-pointer' src="/images/phone.png" />
                            <h2 className='text-2xl'>OnePlus 12</h2>
                            <span className='text-sm pt-2'>Save more with exchange</span>
                        </div>
                        <div className='flex flex-col mx-4 items-center xl:items-start'>
                            <img className='h-[260px] hover:scale-105 transition-all duration-200 ease-in cursor-pointer' src="/images/phone2.png" />
                            <h2 className='text-2xl'>OnePlus 12</h2>
                            <span className='text-sm pt-2'>Save more with exchange</span>
                        </div>
                        <div className='flex flex-col mx-4 items-center xl:items-start'>
                            <img className='h-[260px] hover:scale-105 transition-all duration-200 ease-in cursor-pointer' src="/store_images/oneplusopen.png" />
                            <h2 className='text-2xl'>OnePlus 12</h2>
                            <span className='text-sm pt-2'>Save more with exchange</span>
                        </div>
                    </div>
                </div>

                <div className='products-wrapper mt-10'>
                    <div className="sale my-14">
                        <div className="flex items-center w-full justify-between">
                            <h1 className='text-2xl px-4 sm:text-4xl sm:px-12'>Audio</h1>
                            <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View All <span className='text-red-400 px-2'>+</span></span>
                        </div>
                        <div className="sale-container flex overflow-x-scroll scrollbar lg:overflow-hidden my-6 mx-0 md:mx-5">

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/budspro2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 39% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Buds Pro2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹8,499</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/budspro2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 39% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Buds Pro2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹8,499</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/nordbuds2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 27% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord Buds 2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹2,399</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/nordbuds2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 27% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord Buds 2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹2,399</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/bulletsz2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 39% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Bullets Wireless Z2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,399</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/bulletsz2.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 39% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Bullets Wireless Z2</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,399</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/nordwired.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 38% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>Nord Wired Earphones</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹799</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/nordwired.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 38% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>Nord Wired Earphones</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹799</h3>
                            </div>}
                        </div>
                    </div>

                    <div className="sale my-14">
                        <div className="flex items-center w-full justify-between">
                            <h1 className='text-2xl px-4 sm:text-4xl sm:px-12'>Tablet</h1>
                            <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View All <span className='text-red-400 px-2'>+</span></span>
                        </div>
                        <div className="sale-container flex overflow-x-scroll scrollbar lg:overflow-hidden my-6 mx-0 md:mx-5">

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/onepluspad.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 5% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Pad</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹35,999</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/onepluspad.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 5% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Pad</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹35,999</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/magnectickeyboard.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 20% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Magnetic Keyboard</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹7,999</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/magnectickeyboard.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 20% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Magnetic Keyboard</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹7,999</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/onepluspadgo.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 10% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Pad Go</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹17,999</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/onepluspadgo.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 10% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Pad Go</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹17,999</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/foliocase.png" alt="" />
                                <h2 className='text-md md:text-xl px-4 py-5'>OnePlus Go Folio Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,399</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/foliocase.png" alt="" />
                                <h2 className='text-md md:text-xl px-4 py-5'>OnePlus Go Folio Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,399</h3>
                            </div>}
                        </div>
                    </div>

                    <div className="sale my-14">
                        <div className="flex items-center w-full justify-between">
                            <h1 className='text-2xl px-4 sm:text-4xl sm:px-12'>Accessories</h1>
                            <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View All <span className='text-red-400 px-2'>+</span></span>
                        </div>
                        <div className="sale-container flex overflow-x-scroll scrollbar lg:overflow-hidden my-6 mx-0 md:mx-5">

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/walnutcase.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 13% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12 Walnut Texture Bumper Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,299</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/walnutcase.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 13% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12 Walnut Texture Bumper Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹1,299</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/sandstonecase.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 20% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12 Sandstone Bumper Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹799</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/sandstonecase.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 20% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12 Sandstone Bumper Case</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹799</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/adapter.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 12% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 100W Dual Ports Power Adapter</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹3,499</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/adapter.png" alt="" />
                                <span className='text-red-500 text-xs md:text-sm px-4'>Up to 12% off</span>
                                <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 100W Dual Ports Power Adapter</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹3,499</h3>
                            </div>}

                            {theme ? <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/store_images/cable.png" alt="" />
                                <h2 className='text-md md:text-xl px-4 py-5'>OnePlus USB-A to Type-C Cable 10A 1M</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹849</h3>
                            </div> : <div className="sale-card rounded-xl flex flex-col pt-3 relative items-start mx-5 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer">
                                <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                                <img src="/store_images/cable.png" alt="" />
                                <h2 className='text-md md:text-xl px-4 py-5'>OnePlus USB-A to Type-C Cable 10A 1M</h2>
                                <h3 className='px-4 py-5 text-sm lg:text-md'>From ₹849</h3>
                            </div>}
                        </div>
                    </div>
                </div>

                <Rating />

                <div className="experience">
                    <h1 className='text-2xl md:text-4xl px-12 mt-10 pb-5 text-center md:text-start'>Making OnePlus Experience Better</h1>
                    <div className="experience-container w-[92%] md:overflow-x-scroll scrollbar xl:overflow-hidden hidden md:flex mx-10">
                        {experience.slice(expIndex, expIndex + 3).map((e) => (
                            <div key={e.header} className='flex justify-center items-center'>
                                <div className="card flex flex-col gap-3 px-3 py-4 mb-5 h-[450px] w-[450px]">
                                    <img className='w-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in' src={e.img} alt="" />
                                    <h2 className='text-3xl'>{e.header}</h2>
                                    <h4 className='text-sm text-gray-500 w-full'>{e.info}</h4>
                                    <span className='text-sm text-gray-600 underline cursor-pointer'>Learn More</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrows md:flex hidden justify-center gap-14 mb-5 mt-4 xl:mt-0">
                        <FaArrowLeftLong className={`cursor-pointer transition-all duration-200 ease-in ${expIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ fontSize: '25px' }} onClick={handleExpPrevious} />
                        <FaArrowRightLong className={`cursor-pointer transition-all duration-200 ease-in ${expIndex >= experience.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ fontSize: '25px' }} onClick={handleExpNext} />
                    </div>

                    <div className="experience-container w-full justify-center flex md:hidden overflow-hidden">
                        {experience.slice(expIndex, expIndex + 1).map((e) => (
                            <div key={e.header} className='flex justify-center items-center'>
                                <div className="card flex flex-col items-center gap-3 px-3 h-[450px] w-[450px]">
                                    <img className='w-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in' src={e.img} alt="" />
                                    <h2 className='text-2xl md:text-3xl'>{e.header}</h2>
                                    <h4 className='text-sm text-gray-500 w-[65%] sm:w-full text-center'>{e.info}</h4>
                                    <span className='text-sm text-gray-600 underline cursor-pointer'>Learn More</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrows flex md:hidden justify-center gap-14 mb-2 xl:mt-0">
                        <FaArrowLeftLong className={`cursor-pointer transition-all duration-200 ease-in ${expIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ fontSize: '25px' }} onClick={handleExpPrevious2} />
                        <FaArrowRightLong className={`cursor-pointer transition-all duration-200 ease-in ${expIndex >= experience.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ fontSize: '25px' }} onClick={handleExpNext2} />
                    </div>

                </div>

                <div className="cable-club w-full bg-black h-[490px] my-10 text-white relative overflow-hidden">
                    <h2 className='pt-14 pb-3 px-3 sm:px-16 text-xl'>Red Cable Club</h2>
                    <hr className='w-[95%] sm:w-[92%] h-[1px] bg-white mx-auto' />

                    <div className='text-xl md:text-3xl lg:text-5xl px-3 sm:px-16 py-9 w-full z-10'>Unlock exclusive benefits, early access to products, and unique experiences. <span className='text-red-600 cursor-pointer flex items-center w-full lg:w-[35%] py-3 gap-3 hover:gap-6 transition-all duration-200 ease-in'>Join the Club <FaArrowRightLong style={{ fontSize: '35px' }} /></span> </div>

                    <div className="icons absolute flex px-16 pb-5 gap-10 z-10 w-[90%] overflow-x-scroll black-scrollbar md:overflow-hidden my-6 mx-0 md:mx-5">
                        <div className='flex flex-col items-start gap-3 min-w-[244px] w-full md:w-[25%]'>
                            <img className='hover:scale-125 transition-all duration-200 ease-in' src="https://www.oneplus.in/content/dam/oasis/page/2022/new-homepage/in/store/rcc-pcwarranty.svg" alt="" />
                            <span className='text-sm md:text-xl'>Free 3-month extended <br /> warranty</span>
                        </div>

                        <div className='flex flex-col items-start gap-3 min-w-[244px] w-full md:w-[25%]'>
                            <img className='hover:scale-125 transition-all duration-200 ease-in' src="https://www.oneplus.in/content/dam/oasis/page/2022/new-homepage/in/store/rcc-pcCloud-storage.svg" alt="" />
                            <span className='text-sm md:text-xl'>Third-Party Benefits</span>
                        </div>

                        <div className='flex flex-col items-start gap-3 min-w-[244px] w-full md:w-[25%]'>
                            <img className='hover:scale-125 transition-all duration-200 ease-in' src="https://www.oneplus.in/content/dam/oasis/page/2022/new-homepage/in/store/rcc-pcRedcoins.svg" alt="" />
                            <span className='text-sm md:text-xl'>RedCoins</span>
                        </div>
                    </div>

                    <div className="circle hidden lg:block"></div>
                    <div className="circle2 hidden lg:block"></div>
                </div>

                <div className='support-container w-full mt-12 my-4'>
                    <div className="flex items-center w-full justify-between">
                        <h2 className='text-md sm:text-xl px-2 sm:px-10 '>Support</h2>
                        <span className='text-sm sm:text-md pr-0 sm:pr-9 cursor-pointer'>View More <span className='text-red-400 px-2'>+</span></span>
                    </div>
                    <hr className='h-[1px] bg-gray-300 w-[95%] mx-auto my-2' />

                    <div className="support flex flex-col lg:flex-row items-center justify-around py-10">
                        {theme ? <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 h-[600px] sm:h-[400px] w-full sm:w-[650px] bg-[#1b1b1b] text-white rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-500 py-2 text-center sm:text-start'>One-on-One with OnePlus</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 text-center sm:text-start'>Your personal helpdesk.</h2>
                                </div>

                                <div className='flex flex-col-reverse justify-center mx-6 gap-4 relative top-0 py-4'>
                                    <span className='text-sm w-[30%] underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Let's chat</span>
                                    <span className='text-sm'>From finding the perfect phone to quickly resolving queries, we're always ready to help.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 sm:hover:scale-110 scale-100 transition-all duration-200 ease-in' src="/images/support1.png" alt="" />
                        </div> : <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 h-[600px] sm:h-[400px] w-full sm:w-[650px] bg-gray-100 rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 text-center sm:text-start'>One-on-One with OnePlus</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 text-center sm:text-start'>Your personal helpdesk.</h2>
                                </div>

                                <div className='flex flex-col-reverse justify-center mx-6 gap-4 relative top-0 py-4'>
                                    <span className='text-sm w-[30%] underline cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Let's chat</span>
                                    <span className='text-sm'>From finding the perfect phone to quickly resolving queries, we're always ready to help.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 sm:hover:scale-110 scale-100 transition-all duration-200 ease-in' src="/images/support1.png" alt="" />
                        </div>}

                        {theme ? <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 mt-7 lg:mt-0 h-[600px] sm:h-[400px] w-full sm:w-[650px] relative bg-[#1b1b1b] text-white rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-500 py-2 text-center sm:text-start'>OnePlus Switch</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 pb-3 text-center sm:text-start'>New phone? No problem.</h2>
                                </div>

                                <div className='flex flex-col-reverse w-full sm:w-[40%] mx-3 gap-4 relative sm:absolute bottom-0 sm:px-0 py-4'>
                                    <span className='text-sm underline w-[35%] px-2 cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Get Started</span>
                                    <span className='text-sm px-2'>Switching to OnePlus has never been easier. Seamlessly migrate your data in a few steps - from contacts, messages, apps, photos, and more.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/store_images/support3.png" alt="" />
                        </div> : <div className="support-card overflow-hidden flex flex-col-reverse items-center sm:items-stretch sm:flex-row mx-3 mt-7 lg:mt-0 h-[600px] sm:h-[400px] w-full sm:w-[650px] relative bg-gray-100 rounded-lg">

                            <div className="flex flex-col justify-between">
                                <div className='px-3 py-2'>
                                    <h2 className='text-xl text-gray-400 py-2 text-center sm:text-start'>OnePlus Switch</h2>
                                    <h2 className='text-2xl sm:text-3xl pt-4 pb-3 text-center sm:text-start'>New phone? No problem.</h2>
                                </div>

                                <div className='flex flex-col-reverse w-full sm:w-[40%] mx-3 gap-4 relative sm:absolute bottom-0 sm:px-0 py-4'>
                                    <span className='text-sm underline w-[35%] px-2 cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in'>Get Started</span>
                                    <span className='text-sm px-2'>Switching to OnePlus has never been easier. Seamlessly migrate your data in a few steps - from contacts, messages, apps, photos, and more.</span>
                                </div>
                            </div>

                            <img className='cursor-pointer sm:w-1/2 scale-100 sm:hover:scale-110 transition-all duration-200 ease-in' src="/store_images/support3.png" alt="" />
                        </div>}
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
                </div>

                <div className="connected my-10 py-6">
                    <h2 className='text-xl px-10 py-5'>Stay Connected</h2>
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

export default Store
