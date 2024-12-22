
import { easeOut, motion } from "framer-motion";
import pic1 from '../../assets/pic/pic1.jpg';
import pic2 from '../../assets/pic/pic2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={pic1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-teal-400 shadow-2xl" />
                    <motion.img
                        src={pic2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{duration: 10, delay: 5, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-teal-400 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold"><motion.span
                            animate={{ color: ['#FF0000', '#FFFF00', '#008080'] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >Life in Layers</motion.span> </motion.h1>
                    <p className="py-6 text-xl">
                    Unveiling stories one layer at a time, from fashion to food, travel, and beyond.
                    Explore the vibrant tapestry of life’s moments, beautifully curated for you.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;