import React from 'react'
import image1 from './assets/protest.gif'



const Card = () => {
    const arr1=[{
        image:image1,
        content:'Freedom Studio Movements',
        title:'Climate Justice',
        location :"At Bagmati,Kathamndu",
      },
      
        {
          image:image1,
        content:'Freedom Studio Movements',
        title:'Meter Byaj',
        location :"At Lumbini,Rupandehi",
      
      },
      {
      image:image1,
      content:'Freedom Studio Movements',
      title:'Child Marriage',
      location :"At Lumbini,Gulmi",
    
    }
    ]

  return (
    <>
       {
        arr1.map((item,index)=>
      <div key={index} className='mt-5 ml-7'>
       <div className='border rounded-3xl shadow-2xl border-[#9A1D20] w-96 h-32 flex justify-evenly'>
    <img src={item.image} className='h-24 w-24'/>
       <div className='content'>
         <h1 className='text-center text-[#9A1D20] font-bold'>{item.content}</h1>
         <p className='text-center text-gray-600 font-semibold mt-3'>{item.title}</p>
         <p className='text-center text-gray-600 font-semibold mt-3'>{item.location}</p>
         </div>
        </div>
        </div>
        )
}

    </>
  )
}

export default Card