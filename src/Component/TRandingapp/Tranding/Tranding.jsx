import React from 'react';
import icondownload from '../../../assets/icon-downloads.png'
import iconrating from '../../../assets/icon-ratings.png'

const Tranding = ({ app }) => {

    const { image, title, ratingAvg, downloads } = app;
    return (
        <>
         <div>
            <div className="card bg-base-100 shadow-md transform transition duration-400 hover:-translate-y-5 hover:scale-103 hover:shadow-2xl">
                <figure className='p-4'>
                    <img
                       className='w-66 h-62 rounded-xl object-cover' src={image}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions justify-between">
                        <div className='flex gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                       <img className='w-5 h-5' src={icondownload} />     
                         <strong className='text-[#00D390]'> {downloads} </strong>
                        </div>
                        <div className='flex gap-2 bg-[#FF881120] px-4 py-2 rounded-lg'>
                       <img className='w-5 h-5' src={iconrating} />     
                         <strong className='text-[#FF8811]'> {ratingAvg} </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Tranding;   