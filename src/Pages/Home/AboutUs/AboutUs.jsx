import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';
const AboutUs = () => {
    return (
        <div className="my-10 max-h-screen">
            <h1 className="text-4xl font-bold text-center">ABOUT US</h1>
            <div className='flex justify-around items-center p-20'>
                <div className='w-[50%]'>
                        <h1 className='text-4xl font-bold'> Welcome to <span className='text-cyan-400'>BUSINESSIFY</span></h1> 
                        <h1 className='text-gray-500 text-md font-semibold mt-5'>Where precision meets efficiency in inventory management. Established with a vision to revolutionize how businesses handle their stock, we take pride in offering a comprehensive solution that simplifies and optimizes the entire inventory process.</h1>
        
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-xl font-bold text-center my-10'>KEY FEATURES</h1>
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                        <div className='p-32 text-lg text-white font-semibold bg-slate-400 text-center'>
                            <h1 className='text-3xl mb-10'>Real-time Visibility</h1>
                            <h1>Gain instant insight into your inventory levels, sales trends, and order statuses, empowering you to make informed decisions on the fly.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-32 text-lg text-white font-semibold bg-slate-400 text-center'>
                            <h1 className='text-3xl  mb-10'>User-Friendly Interface</h1>
                            <h1> Our intuitive interface makes navigating the system a breeze, ensuring that you spend less time on administrative tasks and more time focusing on what matters most – growing your business</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='p-32 text-lg text-white font-semibold bg-slate-400 text-center'>
                            <h1 className='text-3xl mb-10'>Integration Capabilities</h1>
                            <h1>Connect with your existing systems effortlessly. Our inventory management system integrates seamlessly with popular e-commerce platforms, accounting software, and more</h1>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='p-32 text-lg text-white font-semibold bg-slate-400 text-center'>
                            <h1 className='text-3xl  mb-10'>Customization</h1>
                            <h1> Tailor the system to fit your unique business processes. We understand that one size does not fit all, and our solution is flexible enough to adapt to your specific needs.</h1>
                            </div>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;