import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const dummyUsers = {
  guest: {
    name: "Guest User",
    role: "guest",
    permissions: [],
  },
  admin: {
    name: "Admin Alpha",
    role: "admin",
    permissions: ["view", "edit", "delete"],
  },
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(dummyUsers.guest);

  const toggleUser = () => {
    setUser((prev) =>
      prev.role === "admin" ? dummyUsers.guest : dummyUsers.admin
    );
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
