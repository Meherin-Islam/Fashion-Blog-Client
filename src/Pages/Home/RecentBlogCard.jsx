import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { FaHeart } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css'; 
import UseAuth from '../../hooks/UseAuth';

const RecentBlogCard = ({ blog }) => {
    const { _id, title, image } = blog;
    const { user } = UseAuth();

    const handleWishlist = async () => {
        if (!user?.email) { 
            toast.error('Please log in to add to wishlist.'); 
            return;
        }

        const wishlistItem = {
            userEmail: user.email, 
            blogId: _id,
        };

        try {
            const response = await fetch('http://localhost:5000/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishlistItem),
            });

            if (response.ok) {
                toast.success('Blog added to wishlist successfully!'); 
            } else {
                const error = await response.json();
                toast.error(`Error adding to wishlist: ${error.message}`); 
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            toast.error('An error occurred. Please try again.'); 
        }
    };

    return (

        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="m-2">
                <img
                    className="h-64 p-3 rounded-md"
                    src={image}
                    alt={`Image of ${title}`}
                />
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="card-actions flex justify-between items-center mt-4">
                    <Link to={`/blogs/${_id}`}>
                        <button className="btn bg-pink-700 hover:bg-pink-800 font-bold text-lg text-white">
                             Details
                        </button>
                    </Link>
                    <button
                        onClick={handleWishlist}
                        className="btn bg-blue-300 hover:bg-blue-400 font-bold text-lg"
                    >
                        Add to Wishlist <FaHeart></FaHeart>
                    </button>
                </div>
            </div>
            
        </div>
        
    );
};

export default RecentBlogCard;
