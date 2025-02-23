import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  px-6">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center">
        {"The page you are looking for doesn't exist or has been moved."}
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
