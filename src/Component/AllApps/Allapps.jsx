import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Allapps = () => {

    const AllData = useLoaderData();


    return (
       <div className='bg-gray-100'>

          <div className=' py-10 container max-w-[1200px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-[#001931] font-bold text-[3rem]'>Our All Applications</h2>
                <p className='text-[#627382] text-[1.1rem] font-normal'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mt-10'>
                <h2>(21) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="search Apps" />
                </label>
            </div>

             <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4'>
             <Suspense>
                   {
            AllData.map(Data => <Apps key={Data.id} Data={Data}> </Apps>)
         }
             </Suspense>
           </div>
        </div>
          
       </div>
    );
};

export default Allapps;