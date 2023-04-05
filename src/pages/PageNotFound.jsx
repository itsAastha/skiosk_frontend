import React from 'react'
import Navbar from '../components/Navbar';

function PageNotFound() {
  return (
    <div className="App">
      <Navbar/>
      <div className='bg-[#d7dad1]  flex h-screen '>
      <div className='text-5xl m-auto font-semibold text-transparent  bg-clip-text bg-gradient-to-l from-[#897640] to-[#4c5227]'>
        <h1>404: INVALID LINK </h1>
        </div> 
        </div>
    </div>
  );
}
export default PageNotFound;