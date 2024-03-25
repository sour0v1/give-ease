import React, { useEffect, useState } from 'react';
import DonationData from '../DonationData/DonationData';

const Donations = () => {
    const [data, setData] = useState();
    const length = data && data.length;
    const [dataLength, setDataLength] = useState(6);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto px-2 md:px-0'>
                {
                    data && data.slice(0, dataLength).map((d, idx) => <DonationData d={d} key={idx}></DonationData>)
                }

            </div>
            <div className={`text-center ${dataLength === length && 'hidden'}`}>
                <button onClick={() => setDataLength(length)} className='bg-orange-600 px-3 py-2 rounded text-white mt-4'>Show All</button>
            </div>
        </div>

    );
};

export default Donations;