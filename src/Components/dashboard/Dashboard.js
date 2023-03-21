import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar className="bg-gray-200 h-screen">
        <div className="my-10">
          <h3 className="ml-5 text-2xl">Admin Panel</h3>
        </div>

        <Menu>
          <MenuItem className="hover:text-orange-600">
            <Link to="/dashboard/overview">Overview</Link>
          </MenuItem>
          <MenuItem className="hover:text-orange-600">
            <Link to="/dashboard/roleCreation">Role Creation</Link>
          </MenuItem>

          <MenuItem className="hover:text-orange-600">
            <Link to="/dashboard/roleSelection">Role Selection</Link>
          </MenuItem>
          <MenuItem className="hover:text-orange-600">
            <Link to="/dashboard/inventory">Inventory</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default Dashboard;
