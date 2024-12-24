import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const RecentBlogCard = ({ blog }) => {
    const { _id, title, image } = blog;
    const { user } = UseAuth();

    const handleWishlist = async () => {
        if (!user?.email) { // Ensure user is logged in
            alert('Please log in to add to wishlist.');
            return;
        }

        const wishlistItem = {
            userEmail: user.email, // Use user email from the authenticated user
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
                alert('Blog added to wishlist successfully!');
            } else {
                const error = await response.json();
                alert(`Error adding to wishlist: ${error.message}`);
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            alert('An error occurred. Please try again.');
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
                        <button className="btn bg-pink-700 hover:bg-pink-800 font-bold text-xl text-white">
                            View Details
                        </button>
                    </Link>
                    <button
                        onClick={handleWishlist}
                        className="btn bg-blue-300 hover:bg-blue-400 font-bold text-xl"
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogCard;
