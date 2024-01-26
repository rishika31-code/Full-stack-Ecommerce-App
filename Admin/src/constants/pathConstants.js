import { RxDashboard } from "react-icons/rx";
import { AiFillShopping } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { TbLayersSubtract } from "react-icons/tb";

const sideBarPaths = [
    {
        icon: RxDashboard,
        text: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: AiFillShopping,
        text: "Orders",
        path: "/orders"
    },
    {
        icon: BsBoxSeam,
        text: "Products",
        path: "/products"
    },
    {
        icon: MdOutlineCategory,
        text: "Categories",
        path: "/categories"
    },
    {
        icon: TbLayersSubtract,
        text: "Sub Categories",
        path: "/subcategory"
    },
    {
        icon: TbLayersSubtract,
        text: "Types",
        path: "/types"
    },


]


export { sideBarPaths }