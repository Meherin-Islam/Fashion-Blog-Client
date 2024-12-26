import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl text-black font-bold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 text-white font-bold text-lg bg-purple-800 rounded-lg hover:bg-purple-900 "
        >
          Go Back to Home
        </button>
      </div>
    );
  };

export default ErrorPage;