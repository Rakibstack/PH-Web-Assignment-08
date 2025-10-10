import React, { useEffect, useState } from 'react';

import downlod from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const Installedapp = () => {

    const [apps, setapps] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
        setapps(stored);
    }, [])

    const handleUninstall = (id) => {

        const uptadet = apps.filter(app => app.id !== id)
        setapps(uptadet);
        localStorage.setItem('installedApps', JSON.stringify(uptadet));

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Unstalled this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "uninstalled!",
                    text: "App uninstalled successfully!",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className='bg-gray-100'>
            <div className='container max-w-[1200px] mx-auto  py-10'>
                <h2 className='text-[#001931] text-center font-bold text-[3rem]'>Your Installed Apps</h2>
                <p className='text-[#627382] text-center text-[20px] mt-3'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between mt-5'>
                    <h2 className='font-bold'>{apps.length} Apps Found</h2>
                    <p>Sort By Size</p>
                </div>
                {
                    apps.map(app => (
                        <div key={app.id} className='mt-6'>
                            <div className='flex justify-between items-center bg-white p-2 rounded-md'>
                                <div className='flex'>
                                    <img className='w-35 h-35 rounded-xl' src={app.image} />
                                    <div className='ml-2'>
                                        <h2 className='mt-5 text-[#001931] text-[20px]'>Title : {app.title}</h2>
                                        <div className='flex gap-2'>

                                            <div className='flex gap-1 mt-10'>
                                                <img className='w-5 h-5' src={downlod} alt="" />
                                                <h2 className='text-[#00D390] font-bold'>{app.downloads}</h2>
                                            </div>
                                            <div className='flex gap-1 mt-10'>
                                                <img className='w-5 h-5' src={rating} alt="" />
                                                <h2 className='text-[#00D390] text-[#FF8811] font-bold'>{app.ratingAvg}</h2>
                                            </div>
                                            <div className='flex gap-1 mt-10'>

                                                <h2 className='text-[#00D390] font-bold'>{`${app.size} MB`}</h2>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className='mr-4 bg-[#00D390] text-white px-7 py-2 rounded-md font-medium'><button onClick={() => handleUninstall(app.id)}>Uninstall</button></div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    );
};

export default Installedapp;