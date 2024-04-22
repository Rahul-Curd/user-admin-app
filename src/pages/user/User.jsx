import React, { useState, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./User.scss";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";

const User = () => {
  const { userData } = useContext(UserContext);
  let { userId } = useParams();
  const [user] = useState(userData.filter((item) => item.id === +userId));
  return (
    <div className="user">
      <Sidebar />
      <div className="user__container">
        <Navbar />
        <div className="user__container-main">
          <div className="user__container-main--left">
            <Link
              to={{
                pathname: `/users/new/${user[0].id}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Full Name:</span>
                  <span className="itemValue">{user[0].fullName}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User Name:</span>
                  <span className="itemValue">
                    {user[0].fullName.toLowerCase().split(" ").join("_")}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user[0].email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{user[0].role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Sector-3, HSR Layout, Bengaluru
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="user__container-main--right">
            <Chart aspect={2.5 / 1} title="User Posts ( Last 6 Months)" />
          </div>
        </div>
        <div className="user__container-bottom">
          <Chart aspect={4/ 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
    </div>
  );
};

export default User;
