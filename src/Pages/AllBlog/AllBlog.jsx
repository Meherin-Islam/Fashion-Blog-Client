import  { useEffect, useState } from 'react';

const AllBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error('Error fetching blogs:', err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">All Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div
                            key={blog._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">{blog.category}</p>
                                <p className="text-gray-700 text-sm">
                                    {blog.short_description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBlog;
