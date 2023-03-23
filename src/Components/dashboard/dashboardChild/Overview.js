import React from "react";
import DashboardNavbar from "../DashboardNavbar";
import MonthlyRev from "./OverviewChild/MonthlyRev";




const Overview = () => {
  return (
    <DashboardNavbar>
      <>
        <sectoin className="flex w-full">
          <div className="w-2/4 mx-2 rounded bg-blue-400 py-10 px-10">
            <h3 className="font-semibold text-white text-xl">
              Total Users : 6
            </h3>
            <p className="text-white ">Users Details</p>
          </div>
          <div className="w-2/4 mx-2 rounded bg-violet-400 py-10  px-10">
            <h3 className="font-semibold text-white text-xl">
              Total Roles : 4
            </h3>
            <p className="text-white ">Roles Details</p>
          </div>
        </sectoin>
        <sectoin className="flex w-full mt-5">
          <div className="w-2/4 mx-2 rounded bg-green-400 py-10 px-10">
            <h3 className="font-semibold text-white text-xl">
              Total Users : 6
            </h3>
            <p className="text-white ">Users Details</p>
          </div>
          <div className="w-2/4 mx-2 rounded bg-emerald-400 py-10  px-10">
            <h3 className="font-semibold text-white text-xl">
              Total Roles : 4
            </h3>
            <p className="text-white ">Roles Details</p>
          </div>
        </sectoin>
        <section className="flex mt-5">
          <div className="w-2/4 mx-2">
            <MonthlyRev/>
          </div>
          <div className="w-2/4 mx-2">
            <MonthlyRev/>
          </div>
        </section>
      </>
    </DashboardNavbar>
  );
};

export default Overview;
