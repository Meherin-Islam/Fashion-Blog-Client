import { useEffect, useState } from "react";

const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`http://localhost:5000/wishlist/${userId}`);
        const data = await response.json();
        setWishlist(data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, [userId]);

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map((blog) => (
          <div key={blog._id} className="wishlist-card">
            <h3>{blog.title}</h3>
            <p>{blog.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
