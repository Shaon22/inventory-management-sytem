import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "./PaymentPage";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Subcriptions = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-center mb-20 mt-5">Subcribe</h1>
            <section className="flex justify-around">
                
                <div className="card w-[30%] bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/LdHp0Q4/1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">$10</h2>
                        <p>General Package</p>
                        <p>Extend Product adding limit Up 200</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm bg-cyan-400 border-none">Upgrade Now</button>
                        </div>
                    </div>
                </div>
                
                <div className="card w-[30%] bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/LdHp0Q4/1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">$20</h2>
                        <p>General Package</p>
                        <p>Extend Product adding limit Up 450</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm bg-cyan-400 border-none">Upgrade Now</button>
                        </div>
                    </div>
                </div>
                
                <div className="card w-[30%] bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/LdHp0Q4/1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">$50</h2>
                        <p>General Package</p>
                        <p>Extend Product adding limit Up 1500</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm bg-cyan-400 border-none">Upgrade Now</button>
                        </div>
                    </div>
                </div>
            
            </section>
           <div className="p-20">
           <Elements stripe={stripePromise}>
                <PaymentPage></PaymentPage>
            </Elements>
           </div>
        </div>
    );
};

export default Subcriptions;