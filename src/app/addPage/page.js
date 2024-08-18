'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function page() {
  let route=useRouter();
  let [Toipcs,setTopics]=useState({topic:"",description:"",date:""});

  let value,name;
  let handelChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
setTopics({...Toipcs,[name]:value})
  }
  // console.log(Toipcs);

  let handelTopiceAdd=async(e)=>{
try{
  e.preventDefault();
let res=await fetch('/api/add-topic',{
  method:'POST',
  headers:{
    "Content-Type": "application/json"
  },
    credentials:'include',
    body:JSON.stringify(Toipcs)
  
})
let result=await res.json();
if(result.success){
  window.alert('add successfull')
  route.push('/');
}

}
catch(e){
  console.log('data not store ',e.message);
  route.push('/');

}
  }


  return (
    <center className="flex items-center justify-center flex-col">
    <div className="mt-10 flex items-center justify-between min-w-[70vw] rounded-lg bg-slate-800 py-[1.75rem] px-[2rem]">
      <a className="text-gray-300 font-bold text-[2rem]">Assignment</a>
     <Link href='/addPage' > <button className="py-[.8rem] px-[1.2rem] bg-gray-200 text-black font-semibold rounded-lg text-[1.3rem] ml-2 ">Add Topic</button></Link>
    </div>

<form className='flex items-center justify-center flex-col mt-[2rem]'>
<input type="text" name='topic' value={Toipcs.topic}  onChange={handelChange} placeholder='Add Title' className='min-w-[70vw] py-[1.6rem] px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]' />
<input type="date"  width={100} name='date' value={Toipcs.date}  onChange={handelChange} placeholder='Add Title' className='min-w-[70vw] py-[1.6rem] px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]' />
<input type="text"  name='description' value={Toipcs.description}  onChange={handelChange}  placeholder='Topic Descrition  ' className='min-w-[70vw] py-[1.6rem]   px-2 mb-[1.3rem] border-[2px] border-black text-[1.3rem]' />
<div  className='min-w-[70vw] text-start '> <button className=" py-[1rem] px-[2rem] bg-green-400 text-white font-semibold rounded-lg text-[1.3rem] " type='submit' onClick={handelTopiceAdd}>Add Topic</button></div>
</form>

   </center>
   
  )
}

export default page
