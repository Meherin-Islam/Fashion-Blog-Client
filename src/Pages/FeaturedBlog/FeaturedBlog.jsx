import { useEffect, useState } from "react";

const FeaturedBlog = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/featured-blogs")
      .then((res) => res.json())
      .then((data) => setFeaturedBlogs(data))
      .catch((err) => console.error("Error fetching featured blogs:", err));
  }, []);

  return (
    <div className="min-h-screen bg-teal-100 py-8 px-3 mb-10">
      <div className="container mx-auto mb-5">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          Featured Blogs
        </h1>

       
        <table className="table-auto w-full border-separate border-spacing-0 border border-black">
          <thead>
            <tr>
              <th className="px-4 text-2xl text-purple-900 font-bold py-2 border-b border-black">Rank</th>
              <th className="px-4 text-2xl text-purple-900 font-bold py-2 border-b border-black">Title</th>
              <th className="px-4 text-2xl text-purple-900 font-bold py-2 border-b border-black">Category</th>
              <th className="px-4 text-2xl text-purple-900 font-bold py-2 border-b border-black">Word Count</th>
              <th className="px-4 text-2xl text-purple-900 font-bold py-2 border-b border-black">Short Description</th>
            </tr>
          </thead>
          <tbody>
            {featuredBlogs.map((blog, index) => (
              <tr key={blog._id}>
                <td className="px-4 py-2 text-lg font-bold  border-b border-black">{index + 1}</td>  
                <td className="px-4 py-2 text-lg font-bold  border-b border-black">{blog.title}</td>  
                <td className="px-4 py-2 text-lg font-bold  border-b border-black">{blog.category}</td>  
                <td className="px-4 py-2 text-lg font-bold  border-b border-black">{blog.wordCount}</td>  
                <td className="px-4 py-2 text-lg font-bold  border-b border-black">{blog.short_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlog;
