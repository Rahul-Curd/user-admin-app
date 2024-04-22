import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import UserContextProvider from "./contexts/UserContextProvider";
import Home from "./pages/home/Home";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users">
        <Route index element={<UserList />} />
        <Route path=":userId" element={<User />} />
        <Route path="new">
          <Route index element={<NewUser />} />
          <Route path=":userId" element={<NewUser />} />
        </Route>
      </Route>
    </Routes>
  );
}
