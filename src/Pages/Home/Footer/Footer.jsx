import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-cyan-400">
      <div className='max-w-[2530px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
        <div className="">
          <div className="flex flex-col justify-center items-center  text-white py-10">
            <h2 className="text-2xl mb-5">BusinessifyBD</h2>
            <div className="space-x-5 text-2xl">
              <button className="text-blue-500">
                <BsFacebook></BsFacebook>
              </button>
              <a href="https://t.me/+-dJ6ZCc4EyxhMWQ1">
                <button className="">
                <FcGoogle />
                </button>
              </a>
              <a href="https://wa.me/message/KFX2AKXBM3KLA1">
                <button className="text-green-500">
                  <BsWhatsapp></BsWhatsapp>
                </button>
              </a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm text-center pb-2">
              © 2023 Copyright: BusinessifyBD
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;