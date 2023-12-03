import { Link, NavLink, Outlet } from "react-router-dom";
import UseManager from "../../Hooks/UseManager/UseManager";

const DashboardLayout = () => {
    const [isManager] = UseManager()
    return (
        <div className="flex">
            <div className="w-[20%] fixed min-h-screen bg-cyan-400 text-lg text-white">
                {/* shop manager routes */}
                {
                    isManager ?
                        <>
                            <ul className="space-y-3 p-5">
                                 <li>
                                    <NavLink to={'/dashboard/managerHome'}>Manager Home</NavLink>
                                </li>
                                 <li>
                                    <NavLink to={'/dashboard/AddProductPage'}>Add Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/AllProducts'}>All Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/salesPage`}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/subscriptions'}>Subscriptions</NavLink>
                                </li>
                            </ul>
                            <div className="divider"></div>
                        </> :
                        // Admin routes
                        <>
                                <li>
                                    <Link to={'/dashboard/adminHome'}>Admin Home</Link>
                                </li>
                            <ul className="space-y-3 p-5">
                                <li>
                                    <NavLink to={'/'}></NavLink>
                                </li>
                            </ul>
                            
                        </>
                }
                            {/* common routes */}
                            <ul className="space-y-3 p-5">
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <NavLink to={'/'}>contact</NavLink>
                                </li>
                            </ul>
            </div>
            <div className="flex-1 ml-[20%]">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default DashboardLayout;