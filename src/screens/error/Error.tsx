import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Logo from "../../assets/logo.png";

function Error() {
  return (
    <div className="flex h-[100vh]">
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
            <Link
              className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
              to="/"
              aria-label="home"
            >
              <img src={Logo} alt="logo" className="w-24 h-24" />
            </Link>
          </nav>
        </header>
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
            404
          </h1>
          <h1 className="block text-2xl font-bold text-white" />
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
            >
              <FiHome className="flex-shrink-0 w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
        <footer className="mt-auto text-center py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">
              © All Rights Reserved. 2023.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Error;
