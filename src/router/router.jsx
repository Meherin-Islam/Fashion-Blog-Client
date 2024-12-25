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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Not Found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blogs/:id',
            element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path:'/addBlog',
          element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path:'/allBlog',
          element:<h2>all blog</h2>
        },
        {
          path:'/wishlist',
          element:<PrivateRoute><WishList></WishList></PrivateRoute>
        },
        
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path: 'signin',
            element:<SignIn></SignIn>
        }
      ]
    },
]);
export default router;