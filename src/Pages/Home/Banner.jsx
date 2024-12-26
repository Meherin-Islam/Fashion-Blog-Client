import { easeInOut, motion } from "framer-motion";
import pic1 from '../../assets/pic/pic1.jpg';
import pic2 from '../../assets/pic/pic2.jpg';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <motion.div
      className="hero bg-sky-100 min-h-[400px] py-8 mb-14"
      initial={{ opacity: 0, y: 50 }}  
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: easeInOut }} 
      viewport={{ once: false }}  
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='flex-1'>
          
          <motion.img
            src={pic1}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10],
              x: [0, 30, -30],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className="max-w-md w-80 rounded-[30px] border-4 border-pink-500 shadow-2xl" 
          />

         
          <motion.img
            src={pic2}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -10, 10],
              x: [0, -30, 30],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: easeInOut,
              delay: 4,
            }}
            className="max-w-md w-80 rounded-[20px] shadow-2xl mt-4 border-4 border-purple-500" 
          />
        </div>

        <div className='flex-1 ml-8'>
         
          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
            className="text-5xl font-bold"
          >
            <motion.span
              animate={{ color: ['#FF0000', '#00FF00', '#0000FF'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Life in Layers
            </motion.span>
          </motion.h1>

         
          <p className="py-6 text-xl font-bold">
            Unveiling stories one layer at a time, from fashion to food, travel, and beyond.
            Explore the vibrant tapestry of life’s moments, beautifully curated for you.
          </p>

         
          <Link to="/allBlog">  
            <motion.button
              className="btn bg-green-800 font-bold text-white text-xl hover:bg-green-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Read Blogs <FaArrowCircleRight></FaArrowCircleRight>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
