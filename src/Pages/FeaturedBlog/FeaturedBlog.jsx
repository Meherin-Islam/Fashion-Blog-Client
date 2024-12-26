import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlog = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    fetch("https://fashion-blog-server.vercel.app/featured-blogs")
      .then((res) => res.json())
      .then((data) => setFeaturedBlogs(data))
      .catch((err) => console.error("Error fetching featured blogs:", err));
  }, []);

  const columns = [
    {
      name: "Rank",
      selector: (row, index) => index + 1,
      sortable: true,
      maxWidth: '20px',
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      maxWidth: '280px',
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      maxWidth: '120px',
    },
    {
      name: "Word Count",
      selector: (row) => row.wordCount,
      sortable: true,
      maxWidth: '120px',
    },
    {
      name: "Short Description",
      selector: (row) => row.short_description,
      sortable: true,
      minWidth: '200px',
    },
  ];

  return (
    <div className="min-h-screen bg-red-200 py-8 px-3 mb-10">
      <div className="container mx-auto mb-5">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          Featured Blogs
        </h1>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={featuredBlogs}
            defaultSortField="title"
            pagination
            highlightOnHover
            responsive
            noHeader
            striped
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
