import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from '../assets/fashion.jpg';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successful sign out');
            })
            .catch(error => {
                console.log('Failed to sign out:', error);
            });
    };

    const links = (
        <>
            <li className="text-xl text-orange-500 font-bold">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl text-orange-500 font-bold">
                <a>Add Blog</a>
            </li>
            <li className="text-xl text-orange-500 font-bold">
                <a>All Blogs</a>
            </li>
            <li className="text-xl text-orange-500 font-bold">
                <a>Featured Blogs</a>
            </li>
            <li className="text-xl text-orange-500 font-bold">
                <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="w-24" src={logo} alt="" />
                    <h3 className="text-2xl text-orange-700 font-bold">Fashion Fusion</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-4">
                        {user.photoURL && (
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full border-2 border-teal-500"
                            />
                        )}
                        
                        <button
                            onClick={handleSignOut}
                            className="btn text-2xl text-teal-600 font-bold">
                            Sign out
                        </button>
                    </div>
                ) : (
                    <>
                        <Link
                            className="btn text-2xl text-teal-600 font-bold mr-5"
                            to="/register">
                            Register
                        </Link>
                        <Link to="/signin">
                            <button className="btn text-2xl text-teal-600 font-bold">
                                Sign In
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
