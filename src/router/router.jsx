import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import WishList from "../Pages/WishList/WishList";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeaturedBlog from "../Pages/FeaturedBlog/FeaturedBlog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TrendDetails from "../Pages/Home/TrendDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/trends/:id',
        element: <PrivateRoute><TrendDetails></TrendDetails> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://fashion-blog-server.vercel.app/recent_trends/${params.id}`)
      },
      {
        path: '/blogs/:id',
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://fashion-blog-server.vercel.app/blogs/${params.id}`)
      },
      {
        path: '/addBlog',
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: '/allBlog',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/featuredBlog',
        element: <FeaturedBlog></FeaturedBlog>
      },


      {
        path: '/wishlist',
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      },

      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);
export default router;