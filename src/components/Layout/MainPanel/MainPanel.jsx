import React from "react";
import TopNav from "./TopNav";
import { Route, Routes } from "react-router-dom";
import Ecommerce from "../../../pages/Ecommerce/Ecommerce";
import Analytics from "../../../pages/Analytics/Analytics";
import UserProfile from "../../../pages/UserProfile/UserProfile";
import TasksList from "../../../pages/Tasks/TasksList";
import BasicTables from "../../../pages/Tables/BasicTables";
import DataTable from "../../../pages/Tables/DataTable";
import Inbox from "../../../pages/Email/Inbox";
import PieChart from "../../../pages/Charts/PieChart";

const MainPanel = ({ handleToggleSidebar, toggleSidebar }) => {
  return (
    <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px] overflow-hidden ">
      <TopNav
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
      />
      <div className="p-4 mx-auto md:p-6">
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/task-list" element={<TasksList />} />
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/data-tables" element={<DataTable />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/pie-chart" element={<PieChart />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPanel;
