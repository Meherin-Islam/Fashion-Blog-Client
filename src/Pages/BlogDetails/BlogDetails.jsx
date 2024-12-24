import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const {title, image, short_description, category} = useLoaderData();
    
    return (
        
            <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 className="text-center mb-5 text-2xl text-red-800 font-bold">Blog Details For :{title}</h2>
      <img  className="h-auto w-full mb-5 rounded-md"
        src={image}
        alt={title}
        
      />
      <p className="text-center text-2xl font-bold text-teal-700">Category: {category}</p>
      <p className="mb-5 text-xl font-bold ">
        {short_description}
      </p>
    
    </div>
  );
};
        

export default BlogDetails;