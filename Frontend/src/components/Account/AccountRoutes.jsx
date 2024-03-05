import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Addresses from "./Addresses";
import OrderDetails from "./OrderDetails";

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:orderid" element={<OrderDetails />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="*" element={<Orders />} />
    </Routes>
  );
};

export default AccountRoutes;
