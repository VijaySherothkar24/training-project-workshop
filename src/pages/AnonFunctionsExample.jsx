import React, { useState, useCallback } from "react";
import { Card, Table, Typography } from "antd";

const { Title, Paragraph } = Typography;

// Memoized Button to track re-renders
const Button = React.memo(({ onClick, label }) => {
  console.log(`🔄 Re-rendered Button: ${label}`);
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mx-2"
    >
      {label}
    </button>
  );
});

const AnonFunctionsExample = () => {
  const [count, setCount] = useState(0);

  // Stable function using useCallback
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const data = [
    {
      key: "1",
      case: "❌ Anonymous Function",
      description: "A new function is created on each render",
      result: "Button always re-renders",
    },
    {
      key: "2",
      case: "✅ useCallback Function",
      description: "Stable function reference across renders",
      result: "Button only re-renders when dependencies change",
    },
  ];

  const columns = [
    {
      title: "Case",
      dataIndex: "case",
      key: "case",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
    },
  ];

  return (
    <Card title="Avoid Anonymous Functions in JSX" className="m-4 shadow-lg">
      <Title level={4}>Demonstration:</Title>
      <div className="mb-4">
        <Button
          onClick={() => setCount(count + 1)}
          label="❌ Anonymous"
        />
        <Button
          onClick={handleClick}
          label="✅ useCallback"
        />
      </div>
      <Paragraph>
        Current Count: <strong>{count}</strong>
      </Paragraph>

      <Title level={5}>Why this matters:</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        size="small"
        className="mt-4"
      />

      <div className="bg-gray-100 p-4 mt-6 rounded">
        <Title level={5}>Explanation:</Title>
        <Paragraph>
          When you pass an anonymous function (like <code>() =&gt; setCount(count + 1)</code>)
          inside JSX, it creates a new reference every time the component renders. This causes
          memoized children (like the <code>Button</code> with <code>React.memo</code>) to
          re-render unnecessarily.
        </Paragraph>
        <Paragraph>
          Using <code>useCallback</code> ensures a stable function reference, improving rendering performance.
        </Paragraph>
      </div>
    </Card>
  );
};

export default AnonFunctionsExample;
