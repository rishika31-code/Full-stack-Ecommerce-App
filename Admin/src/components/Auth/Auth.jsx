import { RiBubbleChartFill } from "react-icons/ri";
const Auth = () => {
  return (
    <form className=" font-poppins w-screen h-screen bg-white">
      <div className="flex items-center justify-start gap-4 cursor-pointer">
        <h1 className=" text-4xl pl-20 py-8 mt-4 font-semibold  ">RedBubble</h1>
        <RiBubbleChartFill className="text-4xl primary-gradient-color" />
      </div>
      <div className=" m-auto  mt-20 lg:w-[70rem] w-full">
        <div className=" p-7 flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">Admin Login</h1>

          <div className="mt-7 flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="email" className="text-xl">
                Admin Email
              </label>
              <input
                type="Adminemail"
                placeholder="Enter Admin E-mail..."
                className="bg-[#e0e0e0] p-3 rounded-md"
                required
              />
            </div>

            <div className=" flex flex-col gap-1">
              <label htmlFor="password" className="text-xl">
                Admin Password
              </label>
              <input
                type="password"
                placeholder="Enter Admin Password..."
                className={`bg-[#e0e0e0] p-3 rounded-md `}
                required
              />
            </div>
          </div>

          <div className=" mt-5">
            <button
              type="submit"
              className=" py-2 px-10 bg-[#1877f2] font-semibold text-white rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Auth;
