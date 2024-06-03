import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer p-10 bg-[#1D59A0] text-neutral-content ">
      <div>
        <Link className='btn btn-ghost normal-case text-3xl font-bold'>ST Giftster.com</Link>
        <p> &copy: by Omme Salma, 2024</p>
      </div>
      <div>
        <span className="footer-title">Social Contact</span>

        <div className="grid grid-flow-col gap-4">
          <a className='text-2xl' href='https://web.facebook.com/Kaiser2581' target='_blank'><FaFacebook /></a>
          <a className='text-2xl' href='https://twitter.com/KaiserTanveer' target='_blank'><FaTwitter /></a>
          <a className='text-2xl' href='https://www.linkedin.com/in/kaiser-tanveer/' target='_blank'><FaLinkedin /></a>
          <a className='text-2xl' href='https://www.instagram.com/kaisertanveer2581/' target='_blank'><FaInstagram /></a>
        </div>
      </div>
      <div>
        <h4 className='text-2xl font-bold'>{user?.displayName}</h4>
        <p>{user?.email}</p>
      </div>
    </footer>
  )
}

export default Footer
