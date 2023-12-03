import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center">
            <img src="https://i.ibb.co/n7mGrhv/a8121abee959e18cbad25ad4046f76d8.gif" alt="" />
           <div className="text-center">
           <h1 className="text-2xl font-bold text-blue-400">Oops!!! Page Not Found</h1>
           <Link to={'/'}>
            <button className="btn btn-sm mt-10 bg-blue-400 text-white">Go Home</button>
           </Link>
           </div>
        </div>
    );
};

export default ErrorPage;