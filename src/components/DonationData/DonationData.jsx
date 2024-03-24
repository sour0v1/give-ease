import React from 'react';
import { NavLink } from 'react-router-dom';

const DonationData = ({ d }) => {
    console.log(d)
    const { title, description, category, price, image, id } = d;
    return (
        <div>
            <NavLink to={`/data/${id}`}>
                <div className='rounded'>
                    <img className='w-full' src={image} alt="" />
                    <div className='bg-gray-200 px-3 py-3 rounded space-y-2'>
                        <h3 className='font-bold bg-gray-100 w-fit px-2 rounded'>{category}</h3>
                        <h2 className='text-xl font-bold'>{title}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default DonationData;