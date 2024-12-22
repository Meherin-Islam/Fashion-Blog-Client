import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import flogo from '../assets/foot.png';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-10">
            <aside>
                <img  src={flogo} alt="Fashion Fusion Logo" />
                <p className="text-xl font-bold ">
                "Fashion for Every Story"
                    <br />
                    "Make Your Style, Your Statement"
                </p>
                <div className="flex mt-4 space-x-4">
                    <a href="#" aria-label="Facebook" className="text-white text-2xl hover:text-gray-400">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-white text-2xl hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-white text-2xl hover:text-gray-400">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-white text-2xl hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                </div>
        <p className="text-lg mt-3 ">Copyright © {new Date().getFullYear()} - All right reserved</p>

            </aside>
            <nav>
                <h6 className="footer-title text-white opacity-100">Services</h6>
                <a className="link link-hover text-gray-400 ">Branding</a>
                <a className="link link-hover text-gray-400 ">Design</a>
                <a className="link link-hover text-gray-400 ">Marketing</a>
                <a className="link link-hover text-gray-400 ">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white opacity-100">Company</h6>
                <a className="link link-hover text-gray-400">About us</a>
                <a className="link link-hover text-gray-400">Contact</a>
                <a className="link link-hover text-gray-400">Jobs</a>
                <a className="link link-hover text-gray-400">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white opacity-100">Legal</h6>
                <a className="link link-hover text-gray-400">Terms of use</a>
                <a className="link link-hover text-gray-400">Privacy policy</a>
                <a className="link link-hover text-gray-400">Cookie policy</a>
            </nav>
            
        </footer>
    );
};

export default Footer;
