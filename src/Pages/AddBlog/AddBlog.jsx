import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const { user } = UseAuth();
    const navigate = useNavigate();

    const handleAddBlog = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const blogData = {};


        formData.forEach((value, key) => {
            blogData[key] = value;
        });

        // console.log(blogData);


        fetch('https://fashion-blog-server.vercel.app/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Blog Added Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/allBlog');
                }
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 my-5">
            <div className="w-full max-w-xl p-8 my-5 bg-pink-200 shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold text-center mb-6 text-pink-900">Write a New Blog</h2>
                <form onSubmit={handleAddBlog} className="space-y-6">

                    <div className="form-control">
                        <label className="label text-xl font-bold text-pink-700">Blog Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Blog Title"
                            className="input input-bordered w-full p-3 text-lg rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-700"
                            required
                        />
                    </div>


                    <div className="form-control">
                        <label className="label text-xl font-bold text-pink-700">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter Image URL"
                            className="input input-bordered w-full p-3 text-lg rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-700"
                            required
                        />
                    </div>


                    <div className="form-control">
                        <label className="label text-xl font-bold text-pink-700">Short Description</label>
                        <textarea
                            name="short_description"
                            className="textarea textarea-bordered w-full p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            placeholder="Enter a short description"
                            required
                        ></textarea>
                    </div>





                    <div className="form-control">
                        <label className="label text-xl font-bold text-pink-700">Category</label>
                        <select
                            name="category"
                            defaultValue="Pick a Category"
                            className="select select-bordered w-full p-2 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            required
                        >
                            <option disabled>Pick a Category</option>
                            <option>Travel</option>
                            <option>Fashion</option>
                            <option>Health</option>
                            <option>SkinCare</option>
                            <option>Marketing</option>
                            <option>Sports</option>
                            <option>Interior Design</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label text-xl font-bold text-pink-700">Long Description</label>
                        <textarea
                            name="long_description"
                            className="textarea textarea-bordered w-full p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            placeholder="Enter a detailed description of your blog"
                            rows="8"
                            required
                        ></textarea>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn text-lg text-white font-bold bg-pink-700 w-full py-2 rounded-lg hover:bg-pink-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
