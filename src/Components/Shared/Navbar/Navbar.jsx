import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth/UseAuth";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import Swal from "sweetalert2";
import UseManager from "../../../Hooks/UseManager/UseManager";
import UseAdmin from "../../../Hooks/UseAdmin/UseAdmin";
const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isManager] = UseManager()
    const [isAdmin] = UseAdmin()
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Logged Out !!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }

            })
            .catch(error => {
                console.error(error)
            })
    }
    const navItems =
        <div className="space-x-5 text-white text-xl font font-semibold">
            <>
                {
                    user && !isAdmin && !isManager &&
                    <>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/createShop'}>Create Shop</NavLink>
                    </>
                }
                {
                    !user &&
                    <>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/createShop'}>Create Shop</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline" : ""} to={'/demo'}>Watch Demo</NavLink>
                    </>
                }

                {
                    user && isManager &&
                    <>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/createShop'}>Create Shop</NavLink>

                        <NavLink className={({ isActive }) => isActive ? "underline " : ""} to={'/dashboard/managerHome'}>Dashboard</NavLink>
                    </>

                }
                {

                    user && isAdmin &&
                    <>
                        <NavLink className={({ isActive }) =>
                            isActive ? "underline " : ""} to={'/'}>Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? "underline " : ""} to={'/dashboard/adminHome'}>Dashboard</NavLink>
                    </>
                }
            </>

        </div>
    return (
        <div className="navbar bg-cyan-400  text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BUSINESSIFY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end mr-5 space-x-5 text-xl font font-semibold ">
                {
                    user ?
                        <>
                            <div className="flex gap-5">
                                <h1>{user.displayName}</h1>
                                <img className="w-[35px] rounded-full" src={user.photoURL} alt="" />

                            </div>
                            <button className="btn btn-sm bg-red-500 border-none text-white" onClick={handleLogOut}>Logout<MdOutlineLogout className="text-xl" /></button>
                        </> :
                        <>
                            <Link to={'/register'}> <button className="btn btn-sm bg-cyan-400 text-white">Register<LuMenuSquare /></button></Link>
                            <Link ></Link>
                            <Link to={'/login'}> <button className="btn btn-sm bg-cyan-400 text-white">Login<MdOutlineLogin /></button> </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;