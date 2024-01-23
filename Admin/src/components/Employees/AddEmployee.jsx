import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";

const AddEmployee = () => {
  // select input styles

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Jamda",
    "Tilbani",
    "Simlapal",
    "Bankura",
    "Lakhisagar",
    "Doldoria",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <form className=" flex w-full font-poppins px-7 flex-col ">
      <div className=" mt-2 flex flex-col gap-2">
        <div className="flex justify-start items-center gap-2">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Employee Name
            </label>
            <input
              type="text"
              placeholder="Enter employee Name"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="number" className=" text-lg">
              Employee Id
            </label>
            <input
              type="number"
              placeholder="Enter Employee ID"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="name" className=" text-lg">
              Phone
            </label>
            <input
              type="text"
              placeholder="Employee mobile number"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
          <div className=" flex flex-col justify-center gap-1 w-full">
            <label htmlFor="number" className=" text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Employee @gmail"
              className="w-full p-2 bg-gray-100 rounded-md"
              required
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-1 w-full">
          <label htmlFor="number" className=" text-lg">
            Area
          </label>
          <FormControl sx={{ width: "100%" }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <p>Chose Multiple area that he will work</p>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value=""></MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className=" flex flex-col justify-center gap-1 w-full">
          <label htmlFor="name" className=" text-lg">
            Employee Address
          </label>
          <textarea
            typeof="text"
            className="h-[10rem] bg-gray-100 rounded-md p-2 resize-none"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default AddEmployee;
