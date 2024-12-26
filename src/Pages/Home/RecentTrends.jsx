import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecentTrends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("https://fashion-blog-server.vercel.app/recent_trends")
      .then((res) => res.json())
      .then((data) => {
        setTrends(data);
      })
      .catch((err) => console.error("Error fetching recent trends:", err));
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-lime-200 py-8 px-3 mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto mb-5">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          Future Trends: What's Coming Next
        </h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          viewport={{ once: false }}
        >
          {trends.map((trend) => (
            <motion.div
              key={trend._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="flex justify-center items-center mb-3 mt-2">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-center text-black">{trend.title}</h2>

                <div className="flex justify-between mt-4">
                  <Link className="mx-auto" to={`/trends/${trend._id}`}>
                    <button className="btn bg-lime-600 hover:bg-lime-700 font-bold text-lg text-white">
                      Click To Read Description
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecentTrends;
