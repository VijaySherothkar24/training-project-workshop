import React from "react";
import { useUserContext } from "../context/UserContext";

const UserInfo = () => {
  const { user, toggleUser } = useUserContext();

  return (
    <div className="p-4 border rounded">
      <p className="mb-2 font-semibold">Name: {user.name}</p>
      <p className="mb-2">Role: {user.role}</p>
      <p className="mb-2">Permissions: {user.permissions.join(", ") || "None"}</p>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
        onClick={toggleUser}
      >
        Switch User
      </button>
    </div>
  );
};

export default UserInfo;
