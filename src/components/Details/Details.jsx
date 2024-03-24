import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const detailsData = useLoaderData();
    const { detailsId } = useParams();
    // console.log(detailsId);
    const details = detailsData.find(detail => detail.id === parseInt(detailsId))
    console.log(details)
    const { title, description, price, image } = details;
    return (
        <div className='max-w-6xl mx-auto mt-9 space-y-3 px-2 md:px-0 '>
            <div className='relative'>
                <img className='w-full' src={`../${image}`} alt="" />
                <div className='w-full bg-black bg-opacity-95 absolute bottom-0'>
                    <button className='bg-orange-600 ml-9 my-4 px-2 py-1 rounded text-white font-medium'>Donate {price}$</button>
                </div>
            </div>

            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Details;