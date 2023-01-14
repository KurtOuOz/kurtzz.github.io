import React, { useState } from 'react'
import {category, data} from  '../data/data.js'

const ChaCards = () => {
    // console.log(data)
    const [cards ,setCards] =useState(data)
    {/* Filter type */ }
    const filterType = (category) =>{
        setCards(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
    {/* Filter type */ }
    const filterPrice = (price) => {
        setCards(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Popular</h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                <p className='font-bold text-gray-700'>路線</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setCards(data)} 
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=> filterType("Top")}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Top</button>
                        <button onClick={() => filterType("Mid")}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Mid</button>
                        <button onClick={() => filterType("Ad")} 
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Ad</button>
                        <button onClick={() => filterType("Sup")}  
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Sup</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>價格</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice('$')}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')}
                        className='m-1 boder-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
{/* Dispaly */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {cards.map((item,index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
                />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                    </p>
                </div>            
            </div>
            ))}
        </div>           
        </div>        
    );
};

export default ChaCards
