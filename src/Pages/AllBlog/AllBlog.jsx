import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data); 
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterBlogs(category, searchTerm);
  };

  
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterBlogs(selectedCategory, term);
  };

  
  const filterBlogs = (category, term) => {
    const filtered = blogs.filter((blog) => {
      const matchesCategory =
        category === "" || blog.category.toLowerCase() === category.toLowerCase();
      const matchesSearch =
        term === "" || blog.title.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    setFilteredBlogs(filtered);
  };

  return (
    <div className="min-h-screen bg-amber-100 py-8 px-3">
      <div className="container mx-auto mb-5">
        <h1 className="text-4xl font-bold text-center text-amber-700 mb-8">
          All Blogs
        </h1>

       
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
         
          <select
            className="select select-bordered w-full md:w-1/3 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="Travel">Travel</option>
            <option value="Fashion">Fashion</option>
            <option value="Health">Health</option>
            <option value="SkinCare">SkinCare</option>
            <option value="Marketing">Marketing</option>
            <option value="Sports">Sports</option>
            <option value="Interior Design">Interior Design</option>
          </select>

         
          <input
            type="text"
            placeholder="Search by Blog Title"
            className="input input-bordered w-full md:w-1/3 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
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
                <h2 className="text-xl font-bold text-black">{blog.title}</h2>
                <p className="text-xl font-bold text-yellow-700 mb-2">
                  {blog.category}
                </p>
                <p className="text-black text-sm">{blog.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to={`/`}>
        <button className="text-center text-xl btn mb-10 bg-amber-400 font-bold">
          Back To Home <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default AllBlog;
