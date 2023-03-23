import React from "react";
import { useForm } from "react-hook-form";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

const DashboardNavbar = ({children}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col w-full pt-10">
    <div className="flex justify-between px-10 w-full">
      <div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <SearchIcon /> 
          <input
            type="text"
            placeholder="Search"
            {...register("text")}
            className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
          />
        </form>
      </div>
      <div className="flex">
        <NotificationsNoneIcon className="text-2xl mx-1"/>
        <PersonIcon className="text-xl"/>
      </div>
    </div>
    <div className="block px-10 mt-20">
      {children}
    </div>
  </div>
  
  
  
  );
};

export default DashboardNavbar;
