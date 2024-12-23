import  { useEffect, useState } from 'react';
import RecentBlogCard from './RecentBlogCard';


const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    blogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;