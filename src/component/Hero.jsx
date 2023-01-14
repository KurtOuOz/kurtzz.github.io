import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/10 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Akali <span className='text-orange-500'>Challa</span></h1> 
                </div>
                <img className= "w-full max-h-[500px] object-cover" src='https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/akali_13.jpg' alt='/'/>
            </div>
        </div>
    )
}

export default Hero
