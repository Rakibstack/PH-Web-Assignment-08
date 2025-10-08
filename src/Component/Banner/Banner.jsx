import React from 'react';
import group from '../../assets/Group.png'
import group1 from '../../assets/Group (1).png'
import Heropng from '../../assets/hero.png'

const Banner = () => {
    return (
        
       <>
       <div className='container max-w-[1200px] mx-auto px-4 pt-10'>
            <div className='text-center '>
                <h2 className='font-bold text-[4.1rem] leading-tight text-[#001931] '>We Build <br />
                  <strong className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</strong> Apps</h2>
                  <p className='mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                  <div className='flex justify-center items-center gap-6 mt-6'>
                    <div className='flex gap-3 border-1 font-medium border-[#D2D2D2] px-4 py-2 rounded-md'>
                     <img src={group} alt="" />
                     <button> Google Play</button>
                  </div>
                  <div className='flex gap-3 border-1 font-medium border-[#D2D2D2] px-4 py-2 rounded-md'>
                     <img src={group1} alt="" />
                     <button> App Store</button>
                  </div>
                  </div>
                 
            </div>
              <div className='mt-12 flex justify-center'>
                <img src={Heropng} alt="" />
              </div>
        </div>
          <div >
              <div className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10' >
                  <h2 className='text-center text-white mt-4 font-bold text-5xl'>Trusted by Millions, Built for You</h2>
                  <div className='md:flex justify-around py-6 text-white mt-10 max-w-[1200px] mx-auto container'>
                      <div className='text-center'>
                        <p className='font-medium'>Total Downloads</p>
                        <h2 className='font-extrabold text-[4rem]'>29.6M</h2>
                        <p className='font-medium'>21% more than last month</p>
                      </div>
                      <div className='text-center'>
                        <p className='font-medium'>Total Reviews</p>
                        <h2 className='font-extrabold text-[4rem]'>906K</h2>
                        <p className='font-medium'>46% more than last month</p>
                      </div>
                      <div className='text-center'>
                        <p className='font-medium'>Active Apps</p>
                        <h2 className='font-extrabold text-[4rem]'>132+</h2>
                        <p className='font-medium'>31 more will Launch</p>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Banner;