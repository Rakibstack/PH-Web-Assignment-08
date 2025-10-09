import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import reviw from '../../assets/icon-review.png'

const Carddetails = () => {
    const { id } = useParams();
    const paramsid = parseInt(id);
    const data = useLoaderData()

    const singlecard = data.find(card => card.id === paramsid)
    const { image, title, companyName, downloads, reviews, ratingAvg, size } = singlecard;


    return (

        <div className='bg-gray-100 py-14'>
            <div className='container max-w-[1200px] mx-auto '>
            <div>
                    <div className='lg:grid grid-cols-3'>
                        <figure className='col-span-1 '>
                            <img className='w-full h-[360px] rounded-xl '
                                src={image}
                                alt="Movie" />
                        </figure>
                           <div className=" ml-10 col-span-2">
                        <h2 className="card-title text-[#001931] font-bold text-[2rem]">{title}</h2>
                        <p className='mt-2'>Developed by : <span className='font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                        <div className="divider"></div>

                         <div className='flex gap-16 mt-5'>
                             <div className=''>
                               <img className='w-7 h-7 ml-5' src={download} />
                               <p className='text-[#001931] mt-2 font-medium'>Downloads</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>8M</strong>
                             </div>
                             <div className=''>
                               <img className='w-7 h-7 ml-5' src={rating} />
                               <p className='text-[#001931] mt-2 font-medium'>Average Ratings</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>4.9</strong>
                               
                             </div>
                             <div className=''>
                               <img className='w-7 h-7 ml-5' src={reviw} />
                               <p className='text-[#001931] mt-2 font-medium'>Total Reviews</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>54k</strong>

                             </div>
         
                         </div>
                           <div className='mt-14  bg-[#00D390] w-46 p-2 rounded-md text-white text-center '>
                                <button className='font-medium'>Install Now {`(${size})`}</button>
                             </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carddetails;