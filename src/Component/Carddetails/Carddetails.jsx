import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import reviw from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ToastContainer, } from 'react-toastify';
import { toast } from 'react-toastify';



const Carddetails = () => {
    const { id } = useParams();
    const paramsid = parseInt(id);
    const data = useLoaderData()

    const singlecard = data.find(card => card.id === paramsid)
    const { image, title, companyName, downloads, reviews, ratingAvg, description } = singlecard;
   
    const RatingData = singlecard.ratings || [];

     const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [] ;
      const isInstalled = storedApps.some(item => item.id === singlecard.id);
   
     const handleInstall = (singlecard) => {
      
      if(isInstalled) return;

       storedApps.push(singlecard);
       localStorage.setItem('installedApps',JSON.stringify(storedApps));
       toast.success(`${singlecard.title} installed successfully!`)
     }

    return (

        <div className='bg-gray-100 py-14'>
            <div className='container max-w-[1200px] mx-auto '>
               {/* Card details  */}
                <div className=' lg:grid grid-cols-3'>
                    <figure className='col-span-1 '>
                        <img className='lg:w-full h-[360px] rounded-xl '
                            src={image}
                            alt="Movie" />
                    </figure>
                    <div className=" ml-10  lg:col-span-2">
                        <h2 className="card-title text-[#001931] font-bold text-[2rem]">{title}</h2>
                        <p className='mt-2'>Developed by : <span className='font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                        <div className="divider"></div>

                        <div className='sm:flex gap-16 mt-5'>
                            <div className=''>
                                <img className='w-7 h-7 ml-5' src={download} />
                                <p className='text-[#001931] mt-2 font-medium'>Downloads</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>{downloads}</strong>
                            </div>
                            <div className=''>
                                <img className='w-7 h-7 ml-5' src={rating} />
                                <p className='text-[#001931] mt-2 font-medium'>Average Ratings</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>{reviews}</strong>

                            </div>
                            <div className=''>
                                <img className='w-7 h-7 ml-5' src={reviw} />
                                <p className='text-[#001931] mt-2 font-medium'>Total Reviews</p>
                                <strong className='text-[#001931] font-bold text-[2.7rem]'>{ratingAvg}</strong>

                            </div>

                        </div>
                        <div className={`mt-14 ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}  w-38 p-2 rounded-md text-white text-center`}>
                            <button disabled={isInstalled}
                             onClick={() => handleInstall(singlecard) } 
                             className='font-medium'>
                                {isInstalled ? "Installed" : "Install"} </button>
                        </div>
                    </div>
                </div>

      {/* Rating section */}
               <div className="w-full h-96 bg-gray-50 p-4 mt-10 rounded-2xl shadow">
                    <h2 className="font-semibold text-lg mb-4">Ratings</h2>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={RatingData}
                            margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF9500" barSize={25} radius={[5, 5, 5, 5]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold'>Description</h2>
                    <p>{description}</p>
                </div>
            </div>
              <ToastContainer />
        </div>
    );
};

export default Carddetails;