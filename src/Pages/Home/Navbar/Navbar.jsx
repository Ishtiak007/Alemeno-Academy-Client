import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const user = false;

    const navOptinons = <>
        <li className="font-bold"><Link to='/'>Home</Link></li>
        <li className="font-bold"><Link to='/courseCategories'>Course Categories</Link></li>
        <li className="font-bold"><Link to='/dashboard'>Dashboard</Link></li>
        {
            user ? <><li className="font-bold"><Link>LogOut</Link></li> </> :
                <><li className="font-bold"><Link to='/login'>Login</Link></li></>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-gradient-to-r from-cyan-100 to-blue-100 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptinons}
                        </ul>
                    </div>
                    <div><span className="text-black text-xl lg:font-bold">Alemeno</span><span className="text-blue-800 text-xl font-bold">Academy</span></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptinons}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;