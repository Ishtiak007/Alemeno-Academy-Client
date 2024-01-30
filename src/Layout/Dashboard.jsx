import { Link, NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";


const Dashboard = () => {
    const [cart] = useCarts();
    return (
        <div className="flex">
            {/* bashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#2c3336] text-white">
                <h1 className="text-center my-8 font-bold text-xl">User Dashboard</h1>
                <ul className="menu space-y-5">
                    <>
                        <li className="bg-blue-600 rounded-lg font-bold">
                            <NavLink to='/dashboard/cart'> My Cart ({cart.length})</NavLink>
                        </li>
                        <li className="bg-blue-600 rounded-lg font-bold">
                            <NavLink to='/dashboard/paymentHistory'>Payment History</NavLink>
                        </li>
                    </>



                    {/* common dashboard */}

                    <hr className="my-5" />
                    <>
                        <li className="font-bold bg-blue-800 rounded-lg"><Link to='/'>Home</Link></li>
                        <li className="font-bold bg-blue-800 rounded-lg"><Link to='/courseCategories'>Course Categories</Link></li>
                        <li className="font-bold bg-blue-800 rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                    </>
                </ul>
            </div>
            {/* dahsboard content */}
            <div className="flex-1 p-8 border rounded-md">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;