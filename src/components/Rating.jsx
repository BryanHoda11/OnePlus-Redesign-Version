import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Rating = () => {
    const handleRating = () => {
        toast('Thanks for the feedback!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleNext = () => {
        ratingRef.current.style.display = "none";
        toast('Thanks for the feedback!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const ratingRef = useRef()

    return (
        <>
            <ToastContainer
                position="top-right"
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

            <div ref={ratingRef} className="rating-box hidden sm:flex justify-center my-8">
                <div className="box bg-gray-100 mb-3 mx-3 px-3 py-2 h-[210px] w-[380px] relative">
                    <h3 className='font-bold text-sm text-black'>How easy was it to find the product you were looking for on this page?</h3>
                    <div className="stars flex gap-6 pt-6 pb-3 px-3 justify-center items-center">
                        <img
                            onMouseEnter={(e) => e.currentTarget.classList.add('yellow')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('yellow')} className='star cursor-pointer hover:scale-110 transition-all duration-200 ease in' onClick={handleRating} src="/store_images/star.svg" alt="star" />

                        <img
                            onMouseEnter={(e) => e.currentTarget.classList.add('yellow2')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('yellow2')} className='star cursor-pointer hover:scale-110 transition-all duration-200 ease in' onClick={handleRating} src="/store_images/star.svg" alt="star" />

                        <img
                            onMouseEnter={(e) => e.currentTarget.classList.add('yellow3')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('yellow3')} className='star cursor-pointer hover:scale-110 transition-all duration-200 ease in' onClick={handleRating} src="/store_images/star.svg" alt="star" />

                        <img
                            onMouseEnter={(e) => e.currentTarget.classList.add('yellow4')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('yellow4')} className='star cursor-pointer hover:scale-110 transition-all duration-200 ease in' onClick={handleRating} src="/store_images/star.svg" alt="star" />

                        <img
                            onMouseEnter={(e) => e.currentTarget.classList.add('yellow5')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('yellow5')} className='star cursor-pointer hover:scale-110 transition-all duration-200 ease in' onClick={handleRating} src="/store_images/star.svg" alt="star" />
                    </div>
                    <div className="flex justify-between">
                        <span className='px-2 text-gray-500 text-sm'>Very Difficult</span>
                        <span className='px-2 text-gray-500 text-sm'>Very Easy</span>
                    </div>
                    <hr className='h-[2px] mt-3 bg-gray-800 w-[85%] mx-auto' />
                    <button onClick={handleNext} className='absolute right-[10px] py-1 px-4 my-3 bg-gray-300 text-sm text-gray-100 hover:bg-black hover:text-white transition-all duration-500 ease in'>Submit</button>
                </div>

            </div>
        </>
    )
}

export default Rating
