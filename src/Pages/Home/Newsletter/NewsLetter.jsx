
const NewsLetter = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col mt-2">
                    <div className="overflow-x-auto sm:-mx-6 lg:mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <div className='max-w-[2530px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-50 text-slate-600 mt-20 mb-20">
                                        <div className="p-5">
                                            <div className="border-b-2">
                                                <h2 className="border-cyan-400 border-b-2 w-28 text-slate-900 font-bold">
                                                    Get In Touch
                                                </h2>
                                            </div>
                                            <div className="space-y-2 my-3">
                                                <p>
                                                    <span className="font-bold">Address: </span>Uttara,Dhaka
                                                </p>
                                                <p>
                                                    <span className="font-bold">Phone: </span>01712345678
                                                </p>
                                                <p>
                                                    <span className="font-bold">Email : </span>
                                                businessifybd@gmail.com
                                                </p>
                                                <p>
                                                    <span className="font-bold">Office Time : </span>
                                                    9:00 am - 12:00 pm
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="border-b-2">
                                                <h2 className="border-cyan-400 border-b-2 w-28 text-slate-900 font-bold">
                                                    Usefull Links
                                                </h2>
                                            </div>
                                            <div className="space-y-2 my-3">
                                                <p>About Us</p>
                                                <p>Privacy Policy</p>
                                                <p>Terms & Service</p>
                                                <p>Return Policy</p>
                                                <p>How It Works</p>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="border-b-2">
                                                <h2 className="border-cyan-400 border-b-2 w-28 text-slate-900 font-bold">
                                                    Newsletter
                                                </h2>
                                            </div>
                                            <div className="space-y-2 my-3">
                                                <input type="text" name="" id="" className="border-2 py-3 w-full px-5" placeholder="Enter Your Email " />
                                                <input type="submit" value="Subscribe" className="w-full rounded-md text-center text-white bg-cyan-400 py-3" />
                                                <p className="text-sm text-slate-400">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;