
import banner from '../../../public/banner-2.jpg'
const Banner = () => {
    return (
        <div>
            <div className='bg-cover bg-center h-screen mt-5' style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-full h-full bg-white opacity-95 absolute"></div>
                <div className='absolute w-full h-full flex items-center justify-center'>
                    <div className='text-center space-y-6'>
                        <h2 className='text-4xl font-bold px-2'>I Grow By Helping People In Need</h2>

                        <div className='flex justify-center items-center'>
                            <input className='outline-none bg-gray-200 py-2 px-5 rounded-l-lg' type="text" placeholder='Search here...' />
                            <button className='bg-orange-600 px-2 py-2 rounded-r-lg text-white'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;