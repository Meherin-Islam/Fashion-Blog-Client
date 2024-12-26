import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'; 
import pic from '../../assets/picn.jpg';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!', {
        autoClose: 3000, 
      });
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.', {
        autoClose: 3000, 
      });
    }
  };

  return (
    <motion.div
      className="flex justify-between items-center p-8 bg-amber-100 rounded-xl mb-14"
      initial={{ opacity: 0.7, y: 50 }}
      animate={{ opacity: 1, y: [0, -10, 0] }} 
      transition={{ 
        duration: 3, 
        ease: 'easeInOut',
        repeat: Infinity, 
        repeatType: "mirror" 
      }}
    >
      <div className="flex-1">
        <motion.h2
          className="text-5xl text-pink-800 font-bold mb-3"
          initial={{ opacity: 0.7, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p
          className="text-pink-700 font-bold mb-4"
          initial={{ opacity: 0.7, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
        >
          Stay updated with the latest news and updates from us.
        </motion.p>
        <form onSubmit={handleSubscribe}>
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="p-3 w-4/5 mb-4 rounded-md border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            initial={{ opacity: 0.7, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
          <br />
          <motion.button
            className="btn text-2xl bg-pink-700 text-white py-2 px-6 hover:bg-pink-800"
            type="submit"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>

      <div className="flex-1">
        <motion.img
          src={pic}
          alt="Newsletter"
          className="w-4/5 h-auto rounded-lg"
          initial={{ opacity: 0.7, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000} 
        
        draggable
        pauseOnHover
        theme="light" 
      />
    </motion.div>
  );
};

export default NewsLetter;
