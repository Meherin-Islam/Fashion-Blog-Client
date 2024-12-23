import { easeInOut, motion } from "framer-motion";
import pic1 from '../../assets/pic/pic1.jpg';
import pic2 from '../../assets/pic/pic2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={pic1}
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
                        className="max-w-md w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-teal-400 shadow-2xl" />
                    <motion.img
                        src={pic2}
                        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: easeInOut, delay: 4 }}
                        className="max-w-md w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-teal-400 shadow-2xl mt-4" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
                        className="text-5xl font-bold"><motion.span
                            animate={{ color: ['#FF0000', '#00FF00', '#0000FF'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >Life in Layers</motion.span> </motion.h1>
                    <p className="py-6 text-xl">
                        Unveiling stories one layer at a time, from fashion to food, travel, and beyond.
                        Explore the vibrant tapestry of life’s moments, beautifully curated for you.
                    </p>
                    <button className="btn bg-green-800 font-bold text-white text-xl hover:bg-green-900">Read Articles</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
