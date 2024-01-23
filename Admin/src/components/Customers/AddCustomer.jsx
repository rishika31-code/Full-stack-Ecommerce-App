const AddCustomer = ({ isBoardband }) => {
  return (
    <form className=" font-poppins px-5 ">
      <div className=" text-xl primary-linear-bg text-white text-center  rounded-md mt-5">
        <h1 className="py-1">Basic Details</h1>
      </div>
      <div className=" mt-2 flex flex-col gap-2">
        <div className="flex justify-start items-center gap-4 mt-5">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="number" className=" text-lg">
              Mobile No
            </label>
            <input
              type="number"
              placeholder="Enter Customer Name"
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="email" className=" text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Customer Email"
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label className="text-lg">Area</label>
            <select className="w-full bg-gray-100 p-2 rounded-md">
              <option>Simlapal</option>
              <option>Lakhisagar</option>
              <option>Jorisha</option>
              <option>Jamda</option>
            </select>
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label className="text-lg">Employee</label>
            <select className="w-full bg-gray-100 p-2 rounded-md">
              <option>Rajesh</option>
              <option>Subrata</option>
              <option>Sourav</option>
              <option>Jamda</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="balancedue" className=" text-lg">
              Balance Due
            </label>
            <input
              type="number"
              placeholder="How Much Amount Due "
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label className="text-lg">Plan Expiry</label>
            <select className="w-full bg-gray-100 p-2 rounded-md">
              <option>1 Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>8 Month</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Address
            </label>
            <textarea
              typeof="text"
              className="h-[10rem] bg-gray-100 rounded-md p-2 resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      {/* HARDWARE DETAILS  */}

      <div className=" mt-5 flex flex-col gap-2">
        <div className=" text-xl primary-linear-bg text-white text-center rounded-md mt-5">
          <h1 className=" py-1">Hardware Details</h1>
        </div>
        {!isBoardband ? (
          <div className="flex justify-start items-center gap-4 mt-5">
            <div className=" flex flex-col justify-center gap-1 w-full">
              <label htmlFor="name" className=" text-lg">
                STB No
              </label>
              <input
                type="number"
                placeholder=" Customer STB Number"
                className="w-full p-2 bg-gray-100 rounded-md"
              />
            </div>
            <div className=" flex flex-col justify-center gap-1 w-full">
              <label htmlFor="customerid" className=" text-lg">
                STB Count
              </label>
              <input
                type="number"
                placeholder="Enter Customer Id"
                className="w-full p-2 bg-gray-100 rounded-md"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-start items-center gap-4 mt-5">
            <div className=" flex flex-col justify-center gap-1 w-full">
              <label htmlFor="name" className=" text-lg">
                Mac Adress
              </label>
              <input
                type="number"
                placeholder=" Customer STB Number"
                className="w-full p-2 bg-gray-100 rounded-md"
              />
            </div>
          </div>
        )}
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="customerid" className=" text-lg">
              Customer Id
            </label>
            <input
              type="number"
              placeholder="Enter Customer Id"
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
          {!isBoardband && (
            <div className=" flex flex-col justify-center gap-1 w-full">
              <label htmlFor="number" className=" text-lg">
                VC No
              </label>
              <input
                type="number"
                placeholder="Customer VC Number"
                className="w-full p-2 bg-gray-100 rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Plan Details */}

      <div className=" mt-10 mb-10 flex flex-col gap-2">
        <div className=" text-xl primary-linear-bg text-white text-center rounded-md mt-5">
          <h1 className=" py-1">Plan Details</h1>
        </div>
        <div className="flex justify-start items-center gap-4 mt-5">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Plan Type
            </label>
            <select className="w-full bg-gray-100 p-2 rounded-md">
              <option>Silver</option>
              <option>Bronch</option>
              <option>Gold</option>
              <option>Diamond</option>
            </select>
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="number" className=" text-lg">
              Plan Price
            </label>
            <input
              disabled
              type="number"
              placeholder="Plan Price"
              className="w-full p-2 bg-gray-100 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Plan Description
            </label>
            <textarea
              disabled
              typeof="text"
              className="h-[10rem] bg-gray-100 rounded-md p-2 resize-none "
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCustomer;
