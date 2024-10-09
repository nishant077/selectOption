import React, { useState } from 'react'

 

import './App.css'
import Card from './Card'


function App() {

const [searching,setSearching] =useState('')
const [districts,setDistricts]=useState([])

const handleChange=(event)=>{
   const selected=event.target.value;

   
const provincesData= arr.find(item=>item.provinces==selected)
  if (provincesData){
    setDistricts(provincesData.district)
  }else{
    setDistricts([]);
  }


}

const handleOnSet = (event)=>{
const  district=event.target.value;
console.log(district);

setSearching(district)

}

  const arr=[
    {
      provinces:"Koshi",
      district:[
        "Bhojpur",
       " Chalal",
       " Dhankuta",
       " Ilam",
        "Jajarkot",
        "Jhapa",
        "Khotang",
        "Morang",
        "Okhaldhunga",
        "Panchthar",
        "Sankhuwasabha",
        "Sunsari",
        "Taplejung",
        "Terhathum",
      ]

    },
    {
      provinces:"Madhesh",
      district:[
       " Bara",
        "Bhaktapur",
        "Dhanusha",
        "Mahottari",
        "Parsa",
        "Rautahat",
        "Sarlahi",
        "Siraha",
      ]
    }
]


  return (
    <>
      <div className='mt-5 ml-7'>
        <label className='block mb-2 mt-2 text-[#9A1D20] text-base font-bold'>Select Province</label>
        <select className='border rounded-lg w-96 h-8 text-gray-700 focus:outline-double  focus:border-indigo-500' onChange={handleChange}>
          <option value=''>Select Provinces</option>
          {arr.map(item=><option key={item}>{item.provinces}</option>)}


        </select>
      </div>
      <div className='mt-5 ml-7'>
        <label className='block mb-2 mt-2 text-[#9A1D20] text-base font-bold'>Select District</label>
        <select className='border rounded-lg w-96 h-8 text-gray-700 focus:outline-double  focus:border-indigo-500' onChange={handleOnSet}>
          <option value=''>Select Districts</option>
          {districts.map(item=><option key={item}>{item}</option>)}


        </select>
      </div>
      <div className='mt-5 ml-7'>
      <label className='block mb-2 mt-2 text-[#9A1D20] text-base font-bold'>Searching...</label>
      <input type='text' className='border rounded-xl w-96 h-8 text-gray-700 focus:outline-double focus:border-indigo-500 p-2' placeholder='Searching...' readOnly value={searching}>
      </input>
      </div>
     <Card></Card>
      
    </>
  )
}

export default App
