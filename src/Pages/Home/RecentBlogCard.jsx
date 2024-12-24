import { Link } from 'react-router-dom';

const RecentBlogCard = ({ blog }) => {
    const { _id, title,  image } = blog;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className=' m-2'>
                
                    <img
                        className='h-64 p-3 rounded-md'
                        src={image}
                        alt="Shoes" />
               
                
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl ">{title}
                   
                </h2>
                
               
                <div className="card-actions flex justify-between  items-center mt-4">

                    <Link to={`/blogs/${_id}`}>
                        <button className="btn bg-pink-700 hover:bg-pink-800 font-bold text-xl text-white">Details</button>
                    </Link>
                    <button className='btn bg-blue-300 hover:bg-blue-400 font-bold text-xl'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogCard;