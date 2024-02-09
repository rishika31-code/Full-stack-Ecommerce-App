const TotalAmount = ({ price }) => {
  return (
    <div className=" w-full bg-white flex flex-col gap-2 px-5 py-4 rounded-md shadow-md ">
      <div className=" flex justify-between items-center">
        <h1>Item Total </h1>
        <h1 className="font-semibold"> &#8377; {price}</h1>
      </div>
      <div className=" flex justify-between items-center text-sm">
        <h1>Handeling Fee </h1>
        <h1 className=" text-green-400"> &#8377; 5</h1>
      </div>
      <div className=" flex justify-between items-center text-sm ">
        <h1>Delivery Charges </h1>
        <h1 className=" text-green-400"> &#8377; 0</h1>
      </div>
      <div className=" flex justify-between items-center font-semibold">
        <h1>To Pay </h1>
        <h1> &#8377; {price + 5}</h1>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default TotalAmount;
