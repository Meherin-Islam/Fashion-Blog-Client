import { useLoaderData } from "react-router-dom";

const TrendDetails = () => {
    const {title, image, description} = useLoaderData();
    
    return (
        
            <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 className="text-center mb-5 text-3xl text-pink-700 font-bold">Blog Details For :{title}</h2>
      <img  className="h-auto w-full mb-5 rounded-md"
        src={image}
        alt={title}
        
      />
     
      <p className="mb-5 text-xl font-bold text-orange-700 text-center">
        {description}
      </p>
    
    </div>
  );
};
        

export default TrendDetails;