import React from 'react';
import Apperror from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const Noappsfound = () => {

     const navigate = useNavigate();
    return (
        <div className='container max-w-[1200px] mx-auto py-12'>
                      <div className='flex flex-col items-center justify-center text-center'>
                        <div> 
                           <img className='block mx-auto ' src={Apperror} /></div>
                         <h2 className='text-[#001931] font-semibold text-[3rem] mt-6'>OPPS!! APP NOT FOUND</h2>
                         <p className='mt-2 text-[#627382] text-[1.1rem]'>The App you are requesting is not found on our system.  please try another apps</p>
                         <div>
                            <a onClick={() => navigate(-1)} className="btn px-8 font-bold bg-gradient-to-r mt-4 from-[#632EE3] to-[#9F62F2] text-white">Go Back!</a>
                         </div>
                      </div>
               </div>
    );
};

export default Noappsfound;