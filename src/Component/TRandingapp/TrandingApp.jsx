import React, { Suspense } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Tranding from './Tranding/Tranding';

const TrandingApp = () => {
    const Data = useLoaderData();
    
    return (
        <div className='text-center mt-8'>
              <h2 className='text-[#001931] font-bold text-[3rem]'>Trending Apps</h2>
              <p className='text-[#627382] text-[1.1rem]'>Explore All Trending Apps on the Market developed by us</p>

              <Suspense fallback={<span><span class="loading loading-spinner loading-xl"></span></span>}>
               <div className='container max-w-[1200px] mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                   {
                Data.map(app => <Tranding key={app.id} app={app}> </Tranding> )
              }
                 
               </div>
              </Suspense>
              <div className='text-center pb-10 '>
                  <NavLink to='/Allapps'><button className=' px-7 py-2 text-white rounded-md font-medium  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button></NavLink>
             </div>
        </div>
    );
};

export default TrandingApp;