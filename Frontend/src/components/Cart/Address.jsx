const Address = () => {
  return (
    <div className="w-full bg-white flex flex-col gap-1 py-4 px-2 rounded-md shadow-md ">
      <div className=" flex flex-col gap-2 px-2">
        <h1 className=" font-semibold">Home</h1>
        <h1>
          Jamda, Tilabani, Simlapal, Bankura, 722160, West Bengal, 6294543902
        </h1>
      </div>
      <button className="flex px-2 mt-2 primary-color-darker-pink font-medium">
        CHANGE ADDRESS
      </button>
      <button className="primary-bg-darker-pink text-white py-2 rounded-md my-4 mx-2">
        CONTINUE TO PAYEMNT
      </button>
    </div>
  );
};

export default Address;
