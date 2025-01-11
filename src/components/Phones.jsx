import React, { useRef, useState, useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Rating from './Rating';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Navbar
import { RiShoppingCartLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

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

const Phones = () => {
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

  const phonesRef = useRef()

  useEffect(() => {
    if (phonesRef.current) {
      phonesRef.current.style.backgroundColor = theme ? 'black' : 'white';
      phonesRef.current.style.color = theme ? 'white' : 'black';
    }
  }, [theme]);

  const [left, setleft] = useState(false)

  const btnRef = useRef();

  const handleAlert = () => {
    toast('Filters Applied Successfully!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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

  const handleSort = () => {
    setleft(!left)
  }

  return (
    <>
      <ToastContainer
        position="bottom-left"
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


      {/* Phones Page starts here  */}
      <div ref={phonesRef}>
        {theme ? <div className="xl:flex flex-col hidden px-3 py-3 items-center text-white justify-center w-full text-sm">
          <p className='font-bold w-[70%] flex gap-2 items-center justify-center'>I am focusing only on the Phone section and not other sections as I planned to do only a phone website redesign. Thanks for the co-operation <FaRegSmileBeam style={{ fontSize: '17px' }} /> <br /></p>
          <p className='font-bold w-[75%] flex gap-2 items-center justify-center'>In the original OnePlus Website the Phone page is not responsive, I added the responsivess as well. <FaRegThumbsUp style={{ fontSize: '17px' }} /> </p>
        </div> : <div className="xl:flex flex-col hidden px-3 py-3 items-center justify-center w-full text-sm">
          <p className='font-bold w-[70%] flex gap-2 items-center justify-center'>I am focusing only on the Phone section and not other sections as I planned to do only a phone website redesign. Thanks for the co-operation <FaRegSmileBeam style={{ fontSize: '17px' }} /> <br /></p>
          <p className='font-bold w-[75%] flex gap-2 items-center justify-center'>In the original OnePlus Website the Phone page is not responsive, I added the responsivess as well. <FaRegThumbsUp style={{ fontSize: '17px' }} /> </p>
        </div>}



        <div className="intro-wrapper mt-3 bg-white">

          <div className="flex w-[95%] overflow-x-scroll scrollbar xl:overflow-hidden justify-start xl:justify-center items-center mx-auto mb-6 lg:mb-0 px-4 py-8 gap-20">
            <div className='flex flex-col items-center gap-3 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EA-CpgM7WLejuqARha3AABPSqotiPU419.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>All</h3>
            </div>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202306/19/hpMRKnU28yqTPgbW.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Phones</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202306/20/XtcE5oICln4cy6Z9.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Tablet</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EE-CpgM7mLej1CAJ1GYAAAJTrg6_6k449.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Audio</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EE-CpgM7mLek3SAVKlUAAAJrOjtRsE386.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Wearables</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EB-CpgM7WLemSOAVZHfAAAHIhrU0X4975.svg" alt="" />
              <h3 className='text-xs xl:text-md hidden xl:block text-black'>Cases & Protection</h3>
              <h3 className='text-xs xl:text-md block xl:hidden text-black'>Cases</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EB-CpgM7WLemTiAbp3qAAANdnLfx7U256.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Bundles</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/26/1-M00-3D-F5-CpgM7WLfV6aAMkA9AAAbyMoX6a0350.svg" alt="" />
              <h3 className='text-xs xl:text-md hidden xl:block text-black'>Power & Cables</h3>
              <h3 className='text-xs xl:text-md block xl:hidden text-black'>Cables</h3>
            </div>

            <div className='flex flex-col items-center gap-6 cursor-pointer'>
              <img className='hover:scale-110 transition-all duration-200 ease-in h-auto min-w-[70px]' src="https://image01-in.oneplus.net/ebp/202207/25/1-M00-3D-EE-CpgM7mLek_eAMPwPAAAP4ullc20989.svg" alt="" />
              <h3 className='text-xs xl:text-md text-black'>Gear</h3>
            </div>

          </div>

          <hr className='h-[1px] bg-gray-200 relative' />

        </div>

        <div className='main-box flex w-full min-h-[400px]'>

          <div className='left-side hidden lg:w-[30%] px-20 pb-10 lg:flex flex-col border-r-2 border-gray-200 lg:sticky'>

            <div>
              {left ? (<LiaTimesSolid style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer' onClick={handleSort} />) :
                (<MdSort style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer' onClick={handleSort} />)}
            </div>

            <div className="series flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Series</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Flagship Series <span className='text-xs text-red-500 font-bold'>Hot</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Flagship Series <span className='text-xs text-red-500 font-bold'>Hot</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Nord Series <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Nord Series <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
              </div>
            </div>

            <div className="storage flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>RAM / Storage</h2>
              <div className="flex flex-col gap-2">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 6+128 GB </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 6+128 GB </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+128 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+128 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 12+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 12+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 18+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 18+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
              </div>
            </div>

            <div className="network flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Network</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 5G <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 5G <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 4G </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 4G </h4>}
              </div>
            </div>

            <div className="availability flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Availability</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> In Stock </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> In Stock </h4>}
              </div>
            </div>

            <button ref={btnRef} onClick={handleAlert} className='bg-red-500 hover:scale-90 transition-all duration-300 ease-in text-white w-[60%] py-3 px-4 my-7 rounded-lg'>Apply Filters</button>

          </div>

          {left && <div className='conditonal-left-side absolute z-10 h-[550px] overflow-y-scroll scrollbar w-full sm:w-1/2 bg-white px-20 pb-10 flex flex-col lg:hidden lg:sticky'>

            <div>
              {left ? (<LiaTimesSolid style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer text-black' onClick={handleSort} />) :
                (<MdSort style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer' onClick={handleSort} />)}
            </div>

            <div className="series flex flex-col">
              <h2 className='pt-10 text-xl pb-3 text-black'>Series</h2>
              <div className="flex flex-col gap-3">
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Flagship Series <span className='text-xs text-red-500 font-bold'>Hot</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Nord Series <span className='text-xs text-red-500 font-bold'>New</span> </h4>
              </div>
            </div>

            <div className="storage flex flex-col">
              <h2 className='pt-10 text-xl pb-3 text-black'>RAM / Storage</h2>
              <div className="flex flex-col gap-2">
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 6+128 GB </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+128 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 12+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 18+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>
              </div>
            </div>

            <div className="network flex flex-col">
              <h2 className='pt-10 text-xl pb-3 text-black'>Network</h2>
              <div className="flex flex-col gap-3">
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 5G <span className='text-xs text-red-500 font-bold'>New</span> </h4>
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 4G </h4>
              </div>
            </div>

            <div className="availability flex flex-col">
              <h2 className='pt-10 text-xl pb-3 text-black'>Availability</h2>
              <div className="flex flex-col gap-3">
                <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> In Stock </h4>
              </div>
            </div>

            <button ref={btnRef} onClick={handleAlert} className='bg-red-500 hover:scale-90 transition-all duration-300 ease-in text-white w-full sm:w-[80%] py-3 px-4 my-7 rounded-lg'>Apply Filters</button>

          </div>}

          {theme && left ? <div className='conditonal-left-side absolute z-10 h-[550px] overflow-y-scroll scrollbar w-full sm:w-1/2 bg-black text-white px-20 pb-10 flex flex-col lg:hidden lg:sticky'>

            <div>
              {left ? (<LiaTimesSolid style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer' onClick={handleSort} />) :
                (<MdSort style={{ fontSize: '23px' }} className='block lg:hidden absolute right-[10px] top-[10px] cursor-pointer' onClick={handleSort} />)}
            </div>

            <div className="series flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Series</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Flagship Series <span className='text-xs text-red-500 font-bold'>Hot</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Flagship Series <span className='text-xs text-red-500 font-bold'>Hot</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Nord Series <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> Nord Series <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
              </div>
            </div>

            <div className="storage flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>RAM / Storage</h2>
              <div className="flex flex-col gap-2">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 6+128 GB </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 6+128 GB </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+128 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+128 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 8+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 12+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 12+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+256 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 16+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 18+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 18+512 GB <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
              </div>
            </div>

            <div className="network flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Network</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 5G <span className='text-xs text-red-500 font-bold'>New</span> </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 5G <span className='text-xs text-red-500 font-bold'>New</span> </h4>}
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 4G </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> 4G </h4>}
              </div>
            </div>

            <div className="availability flex flex-col">
              <h2 className='pt-10 text-xl pb-3'>Availability</h2>
              <div className="flex flex-col gap-3">
                {theme ? <h4 className='text-gray-300 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> In Stock </h4> : <h4 className='text-gray-700 flex items-center gap-2'> <input className='cursor-pointer' type="checkbox" name="checkbox" /> In Stock </h4>}
              </div>
            </div>

            <button ref={btnRef} onClick={handleAlert} className='bg-red-500 hover:scale-90 transition-all duration-300 ease-in text-white w-full sm:w-[80%] py-3 px-4 my-7 rounded-lg'>Apply Filters</button>

          </div> : ""}

          <div className='right-side w-full lg:w-[70%] px-4 py-4'>
            <MdSort className='block lg:hidden' onClick={handleSort} />

            <div className='flex items-center justify-between'>
              <span className='text-gray-600 flex items-center px-2'>Rank by
                {theme ? <select name="" className='cursor-pointer text-sm text-gray-500 px-2 py-3 border-none bg-transparent'>
                  <option value="Newest"> Newest </option>
                  <option value="PriceL2H"> Price (Low to High) </option>
                  <option value="PriceH2L"> Price (High to Low) </option>
                </select> : <select name="" className='cursor-pointer text-sm text-black px-2 py-3 border-none bg-transparent'>
                  <option value="Newest"> Newest </option>
                  <option value="PriceL2H"> Price (Low to High) </option>
                  <option value="PriceH2L"> Price (High to Low) </option>
                </select>}
              </span>

              <h3 className='text-xl md:text-2xl text-red-500 px-4 cursor-default'>Phones</h3>
            </div>

            <div className="main-container">
              <div className="container1 flex xl:overflow-hidden overflow-x-scroll py-4 scrollbar">
                {theme ? <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="phones_/images/oneplusnord4.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord 4</h2>
                  <h3 className='px-3 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹29,999 </h3>
                </div> : <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img src="phones_/images/oneplusnord4.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord 4</h2>
                  <h3 className='px-3 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹29,999 </h3>
                </div>}

                {theme ? <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="store_/images/oneplusopen.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Open</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>6% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3'><FiShoppingCart /> From ₹139,999 <span className='text-xs text-gray-500 line-through'>₹149,999</span></h3>
                </div> : <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img src="store_/images/oneplusopen.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Open</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>6% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3'><FiShoppingCart /> From ₹139,999 <span className='text-xs text-gray-500 line-through'>₹149,999</span></h3>
                </div>}

                {theme ? <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="store_/images/oneplus11r.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 11R 5G</h2>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹44,999</h3>
                </div> : <div className="card1 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img src="store_/images/oneplus11r.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 11R 5G</h2>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹44,999</h3>
                </div>}
              </div>

              <div className="container2 flex xl:overflow-hidden overflow-x-scroll py-4 scrollbar mt-6">
                {theme ? <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/images/phone2.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12R</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>Up to 2% off</span>
                  <h3 className='px-3 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹39,999 <span className='text-xs text-gray-500 line-through'>₹42,999</span></h3>
                </div> : <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img src="/images/phone2.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12R</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>Up to 2% off</span>
                  <h3 className='px-3 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹39,999 <span className='text-xs text-gray-500 line-through'>₹42,999</span></h3>
                </div>}

                {theme ? <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="phones_/images/oneplusnordce4.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord CE4 Lite 5G</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>4% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3'><FiShoppingCart /> From ₹19,999 <span className='text-xs text-gray-500 line-through'>₹20,999</span></h3>
                </div> : <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <span className='text-red-500 text-xs md:text-sm px-4 absolute pt-2 font-bold'>New</span>
                  <img src="phones_/images/oneplusnordce4.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord CE4 Lite 5G</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>4% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3'><FiShoppingCart /> From ₹19,999 <span className='text-xs text-gray-500 line-through'>₹20,999</span></h3>
                </div>}

                {theme ? <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] md:w-full cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/images/phone.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>7% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹59,999 <span className='text-xs text-gray-500 line-through'>₹64,999</span></h3>
                </div> : <div className="card2 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] md:w-full shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img src="/images/phone.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus 12</h2>
                  <span className='text-red-500 text-xs md:text-sm px-4'>7% off</span>
                  <h3 className='px-4 py-5 text-sm lg:text-md flex items-center gap-3 absolute bottom-0'><FiShoppingCart /> From ₹59,999 <span className='text-xs text-gray-500 line-through'>₹64,999</span></h3>
                </div>}
              </div>

              <div className="container3 mt-6 hidden lg:flex">
                {theme ? <div className="card3 rounded-xl flex flex-col items-start mx-3 my-3 bg-[#1b1b1b] text-white h-auto min-w-[244px] lg:w-[31%] shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-white hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img className='hover:scale-90 transition-all duration-200 ease-in cursor-pointer' src="/images/phone7.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord CE4</h2>
                  <h3 className='px-3 pt-5 pb-2 text-sm lg:text-md flex items-center gap-3 bottom-0'><FiShoppingCart /> From ₹24,999 </h3>
                </div> : <div className="card3 rounded-xl flex flex-col items-start mx-3 my-3 bg-gray-100 h-auto min-w-[244px] lg:w-[31%] shadow-lg hover:shadow-black transition-all duration-300 ease-in cursor-pointer relative">
                  <FaRegHeart onClick={handleToast} className='absolute right-[10px] top-[10px] text-gray-600 hover:text-pink-500 transition-all duration-200 ease-in' style={{ fontSize: '18px' }} />
                  <img src="/images/phone7.png" alt="" />
                  <h2 className='text-md md:text-xl px-4 py-3'>OnePlus Nord CE4</h2>
                  <h3 className='px-3 pt-5 pb-2 text-sm lg:text-md flex items-center gap-3 bottom-0'><FiShoppingCart /> From ₹24,999 </h3>
                </div>}

              </div>

            </div>
            <Rating />
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Phones