import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useStore } from "@hooks";
import { IMAGES } from "@utils";

interface IForm {
  email: string;
  password: string;
  remember: boolean;
}

function Login() {
  const navigate = useNavigate();
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    setIsLoggedIn(true);
    navigate("/");
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex min-h-[100vh] items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center flex flex-col items-center justify-center">
              <img src={IMAGES.Logo} alt="logo" className="w-20 h-20" />
              <h1 className="block text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                Sign in
              </h1>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="email-error"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <MdError className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-2" id="email-error">
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Password
                      </label>
                      <a
                        className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="password-error"
                        {...register("password", {
                          required: true,
                          minLength: 8,
                        })}
                      />
                      {errors.password && (
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <MdError className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.password && (
                      <p
                        className="text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        8+ characters required
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        {...register("remember")}
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
