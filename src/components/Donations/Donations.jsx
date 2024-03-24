import React, { useEffect, useState } from 'react';
import DonationData from '../DonationData/DonationData';

const Donations = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto px-2 md:px-0'>
            {
               data && data.map((d,idx) => <DonationData d={d} key={idx}></DonationData>)
            }
        </div>
    );
};

export default Donations;