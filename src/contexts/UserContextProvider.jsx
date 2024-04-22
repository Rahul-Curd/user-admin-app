import React, { useState } from "react";
import userInfo from "../userData.json";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(userInfo);
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
