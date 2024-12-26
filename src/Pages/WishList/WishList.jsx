import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from 'sweetalert2';

const WishList = () => {
    const { user } = UseAuth();
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://fashion-blog-server.vercel.app/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then(data => setList(data))
    }, [user.email])


    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`https://fashion-blog-server.vercel.app/wishlist/${id}`, {
                    method: 'DELETE',
                });


                const updatedList = list.filter(blog => blog._id !== id);
                setList(updatedList);


                Swal.fire(
                    'Deleted!',
                    'Your blog has been deleted.',
                    'success'
                );
            }
        });
    };


    return (
        <div>
            <h2 className="text-3xl text-center text-yellow-700 font-bold">My Wishlisted Blogs:{list.length}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
                {list.map((blog) => (
                    <div key={blog._id} className="rounded-lg shadow-md bg-white p-4">

                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>


                        <div className="mt-4">
                            <h3 className="text-lg font-bold ">{blog.title}</h3>
                            <p className="text-lg text-pink-800 font-bold mt-1">Category : {blog.category}</p>

                        </div>


                        <div className="mt-4 flex justify-end">
                            <button onClick={() => handleDelete(blog._id)}

                                className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-md  hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default WishList;