import React from 'react';
import Errorimg from '../../../assets/error-404.png'
import { useNavigate } from 'react-router';

const Errorpages = () => {
     const navigate = useNavigate();
    return (
        <div className='container max-w-[1200px] mx-auto py-16'>
               <div className='flex flex-col items-center justify-center text-center'>
                 <div> 
                    <img className='block mx-auto ' src={Errorimg} /></div>
                  <h2 className='text-[#001931] font-semibold text-[3rem] mt-6'>Oops, page not found!</h2>
                  <p className='mt-2 text-[#627382] text-[1.1rem]'>The page you are looking for is not available.</p>
                  <div>
                     <a onClick={() => navigate(-1)} className="btn px-8 font-bold bg-gradient-to-r mt-4 from-[#632EE3] to-[#9F62F2] text-white">Go Back!</a>
                  </div>
               </div>
        </div>
    );
};

export default Errorpages;