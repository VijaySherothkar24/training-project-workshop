import React from "react";
import { Card } from "antd";
import UserInfo from "../components/UserInfo";

const UserContextExample = () => (
  <Card title="Avoid Prop Drilling with Context (User Role)" className="m-4 shadow-lg">
    <UserInfo />
    <div className="bg-gray-100 p-2 mt-4 rounded">
      <strong>Explanation:</strong>
      <p>
        This uses <code>useUserContext()</code> to access and change the user role globally without passing props.
      </p>
    </div>
  </Card>
);

export default UserContextExample;
