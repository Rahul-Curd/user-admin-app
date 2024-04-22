import React, { useContext } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullName", headerName: "Full name", width: 240 },
  {
    field: "userName",
    headerName: "User name",
    width: 180,
    sortable: false,
    valueGetter: (value, row) =>
      `${row.fullName || ""}`.toLowerCase().split(" ").join("_"),
  },
  { field: "email", headerName: "Email", width: 250, sortable: false },
  {
    field: "role",
    headerName: "Role",
    width: 140,
  },
];

const DataTable = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      const updatedUsers = userData.filter((item) => item.id !== id);
      setUserData(updatedUsers);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{
                pathname: `/users/${params.row.id}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <span className="viewButton">View</span>
            </Link>
            <span
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={userData}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
