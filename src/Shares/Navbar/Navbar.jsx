import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    // console.log('object')
    logOut()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(error.message))
  }

  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contactUs">Contact Us</Link></li>
    <li><Link to="/aboutUs">About Us</Link></li>
    {/* <li><Link to="/">Dashboard</Link></li> */}
    {/* <li><Link to="/dashboard/myCart"><button className='btn gap-2'><FaShoppingCart />
    <div className='badge badge-secondary'>+{cart?.length || 0}</div>
    </button></Link></li> */}
    {
      user ? <>
        {/* <span>{user?.displayName}</span> */}

        <li><Link to="/product">Product</Link></li>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/">Profile</Link></li>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> : <>

        <li><Link to="/logIn">LogIn</Link></li>
      </>
    }
  </>

  return (

    <div className="navbar bg-[#1D59A0] shadow-xl z-10 fixed px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 bg-base-100 p-2 shadow rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div className='flex items-center'>
          <img width="60" height="60" src='https://laptop-resale-market-6f17c.web.app/static/media/footerimages.5dfa92fd75eb0e7610d7.png' alt="" />

          <Link to='/' className="btn btn-ghost normal-case text-white text-xl font-semibold">SR Fashion House</Link>
        </div>

      </div>


      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white font-bold">
            {navItems}
          </ul>
        </div>
        <label for="laptop-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

      </div>
    </div>
  )
}

export default Navbar
