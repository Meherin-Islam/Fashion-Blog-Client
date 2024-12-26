import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import flogo from '../assets/foot.png';

const Footer = () => {
    return (
        <footer className="footer bg-purple-200 text-black p-10">
            <aside>
                <img  src={flogo} alt="Fashion Fusion Logo" />
                <p className="text-xl font-bold ">
                "Fashion for Every Story"
                    <br />
                    "Make Your Style, Your Statement"
                </p>
                <div className="flex mt-4 space-x-4">
                    <a href="#" aria-label="Facebook" className="text-black text-2xl hover:text-gray-400">
                        <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-black text-2xl hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-black text-2xl hover:text-gray-400">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-black text-2xl hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                </div>
        <p className="text-lg mt-3 font-bold ">Copyright © {new Date().getFullYear()} - All right reserved</p>

            </aside>
            <nav>
                <h6 className="footer-title text-black opacity-100 font-bold text-lg">Services</h6>
                <a className="link link-hover text-gray-800 ">Branding</a>
                <a className="link link-hover text-gray-800 ">Design</a>
                <a className="link link-hover text-gray-800 ">Marketing</a>
                <a className="link link-hover text-gray-800 ">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-black opacity-100 font-bold text-lg">Company</h6>
                <a className="link link-hover text-gray-800">About us</a>
                <a className="link link-hover text-gray-800">Contact</a>
                <a className="link link-hover text-gray-800">Jobs</a>
                <a className="link link-hover text-gray-800">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-black opacity-100 font-bold text-lg">Legal</h6>
                <a className="link link-hover text-gray-800">Terms of use</a>
                <a className="link link-hover text-gray-800">Privacy policy</a>
                <a className="link link-hover text-gray-800">Cookie policy</a>
            </nav>
            
        </footer>
    );
};

export default Footer;
