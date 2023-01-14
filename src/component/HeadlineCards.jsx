import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/10 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>勒布朗</p>
                    <p className='px-2'>Top1</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Pick Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='http://4.bp.blogspot.com/-xDEiHIt87sc/XpxYgqR7M9I/AAAAAAAABkc/Vwjlx1uiu2EYrrXrYxC9XVG0LUKCbzdEgCK4BGAYYCw/s1600/00fbvtgv.bmp' alt='/'/>
            </div>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/10 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>卡特蓮娜</p>
                    <p className='px-2'>Top2</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Pick Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/katarina_12.jpg' alt='/' />
            </div>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/10 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>柔伊</p>
                    <p className='px-2'>Top3</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-2'>Pick Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/zoe_18.jpg' alt='/' />
            </div>
        </div>
    )
}

export default HeadlineCards
