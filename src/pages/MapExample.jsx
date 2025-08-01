import React, { useState, memo } from "react";
import { Table, Button, Card, Row, Col } from "antd";

const BadRow = ({ user }) => {
  console.log(`🔴 BadRow rendered: ${user.name}`);
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

const GoodRow = memo(({ user }) => {
  console.log(`🟢 GoodRow rendered: ${user.name}`);
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
});

const TableRenderDemo = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User 1", email: "user1@email.com" },
  ]);

  const addUser = () => {
    const id = users.length + 1;
    setUsers([
      ...users,
      { id, name: `User ${id}`, email: `user${id}@email.com` },
    ]);
  };

  return (
    <Card title="Table Render Demo - Ant Design">
      <Button type="primary" onClick={addUser}>
        Add User
      </Button>

      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <h3 className="font-semibold">❌ Bad Table (index key, no memo)</h3>
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <BadRow key={index} user={user} />
              ))}
            </tbody>
          </table>
        </Col>

        <Col span={12}>
          <h3 className="font-semibold">✅ Good Table (id key + React.memo)</h3>
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <GoodRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </Col>
      </Row>

      <div className="bg-gray-100 p-4 mt-6 rounded">
        <h2 className="font-bold">🔍 Explanation:</h2>
        <p>
          Clicking "Add User" appends a new row. Watch the console logs:
        </p>
        <ul className="list-disc pl-4">
          <li>
            ❌ <strong>Bad Table</strong> re-renders all rows every time.
          </li>
          <li>
            ✅ <strong>Good Table</strong> only renders the new row — thanks to stable keys and <code>React.memo</code>.
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default TableRenderDemo;
