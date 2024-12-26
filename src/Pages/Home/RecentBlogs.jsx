import { useEffect, useState } from 'react';
import RecentBlogCard from './RecentBlogCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://fashion-blog-server.vercel.app/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className='text-center bg-amber-100 font-bold text-4xl mb-10 mt-3 text-pink-800'>
      Recent Blogs
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mt-4'>
        {

          blogs.slice(0, 6).map(blog => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}  // 
            >
              <RecentBlogCard blog={blog} />
            </motion.div>
          ))
        }
      </div>
      <Link to={`/allBlog`}>
        <button className='text-center text-xl btn mb-10 bg-amber-400 font-bold hover:bg-amber-500'>
          Click To See All Blogs<FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default RecentBlogs;
