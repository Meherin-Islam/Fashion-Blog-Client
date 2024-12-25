import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Swal from 'sweetalert2';  
import UseAuth from "../../hooks/UseAuth";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = UseAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data); 
      })
      .catch((err) => console.error("Error fetching blogs:", err));

   
    if (user?.email) {
      fetch(`http://localhost:5000/wishlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        .catch((err) => console.error("Error fetching wishlist:", err));
    }
  }, [user]);

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

  const handleWishlist = async (blogId) => {
    if (!user?.email) {
      Swal.fire({
        icon: 'error',
        title: 'Please log in to add to wishlist.',
        confirmButtonText: 'OK',
      });
      return;
    }

    
    if (wishlist.some(item => item.blogId === blogId)) {
      Swal.fire({
        icon: 'info',
        title: 'This blog is already in your wishlist.',
        confirmButtonText: 'OK',
      });
      return;
    }

    const wishlistItem = {
      userEmail: user.email,
      blogId,
    };

    try {
      const response = await fetch("http://localhost:5000/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistItem),
      });

      if (response.ok) {
      
        setWishlist([...wishlist, wishlistItem]);

        Swal.fire({
          icon: 'success',
          title: 'Blog added to wishlist successfully!',
          confirmButtonText: 'Awesome!',
        });
      } else {
        const error = await response.json();
        Swal.fire({
          icon: 'error',
          title: `Error adding to wishlist: ${error.message}`,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Swal.fire({
        icon: 'error',
        title: 'An error occurred. Please try again.',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 py-8 px-3 mb-10">
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
                <div className="flex justify-between mt-4">
                  <Link to={`/blogs/${blog._id}`}>
                    <button className="btn bg-red-700 hover:bg-red-800 font-bold text-lg text-white">
                      Details
                    </button>
                  </Link>
                  <button
                    onClick={() => handleWishlist(blog._id)}
                    className="btn bg-yellow-400 hover:bg-yellow-500 font-bold text-lg "
                  >
                    Add to Wishlist <FaHeart></FaHeart>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to={`/`}>
        <button className="text-center text-xl btn mb-10 bg-pink-800 font-bold text-white hover:bg-pink-800">
          Back To Home <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default AllBlog;
