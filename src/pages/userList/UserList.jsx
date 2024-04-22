import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
import "./UserList.scss";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list__container">
        <Navbar />
        <div className="list__container--header">
          <h1>Users List</h1>
          <Link to="/users/new" style={{ textDecoration: "none" }}>
            <button className="addButton">Add User</button>
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default UserList;
