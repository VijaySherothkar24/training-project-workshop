import React, { useState, useCallback } from "react";
import { Card, Button, Typography, Divider, Space, Tag, Table } from "antd";

const { Title, Paragraph, Text } = Typography;

const BadChild = ({ onClick }) => {
  console.log("🔴 BadChild rendered");
  return (
    <Button type="default" danger onClick={onClick}>
      ❌ Bad Click
    </Button>
  );
};

const GoodChild = React.memo(({ onClick }) => {
  console.log("✅ GoodChild rendered");
  return (
    <Button type="primary" onClick={onClick}>
      ✅ Good Click
    </Button>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Created fresh on every render
  // Causes BadChild to re-render whenever anything changes in the parent
  const badClick = () => setCount((c) => c + 1); 

  // Created once and cached
  // Passed to GoodChild, which will not re-render unless goodClick changes
  const goodClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const data = [
    {
      key: "1",
      action: "🔁 Update Other State",
      count: "❌ No",
      otherState: "✅ Yes",
      badChild: "✅ Yes (not memoized)",
      goodChild: "❌ No (memoized + stable function)",
    },
    {
      key: "2",
      action: "❌ Bad Click",
      count: "✅ Yes",
      otherState: "❌ No",
      badChild: "✅ Yes (function changes)",
      goodChild: "✅ Yes (props changed)",
    },
    {
      key: "3",
      action: "✅ Good Click",
      count: "✅ Yes",
      otherState: "❌ No",
      badChild: "✅ Yes",
      goodChild: "❌ No (function is stable)",
    },
  ];

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Affects count?",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Affects otherState?",
      dataIndex: "otherState",
      key: "otherState",
    },
    {
      title: "Re-renders BadChild?",
      dataIndex: "badChild",
      key: "badChild",
    },
    {
      title: "Re-renders GoodChild?",
      dataIndex: "goodChild",
      key: "goodChild",
    },
  ];

  return (
    <Card
      title={<Title level={4}>🧠 useCallback Optimization</Title>}
      bordered={false}
      className="m-4 shadow-lg"
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Space>
          <Tag color="blue">Counter: {count}</Tag>
          <Tag color="gold">Other State: {otherState}</Tag>
          <Button onClick={() => setOtherState((s) => s + 1)} type="dashed">
            🔁 Update Other State
          </Button>
          <BadChild onClick={badClick} />
          <GoodChild onClick={goodClick} />
        </Space>
        <Typography>
          <Title level={5}>🧾 Explanation</Title>
          <Paragraph>
            When the parent component re-renders:
            <ul>
              <li>
                <Text strong>BadChild</Text> always re-renders because the function{" "}
                <Text code>badClick</Text> is recreated every time.
              </li>
              <li>
                <Text strong>GoodChild</Text> is wrapped in <Text code>React.memo</Text>, and since
                <Text code>goodClick</Text> is memoized using <Text code>useCallback</Text>, it doesn’t re-render unnecessarily.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            This demonstrates how <Text code>useCallback</Text> helps prevent unnecessary renders by stabilizing function references.
          </Paragraph>
        </Typography>

        <Title level={5}>📊 Behavior Summary Table</Title>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          size="middle"
          bordered
        />
      </Space>
    </Card>
  );
};

export default UseCallbackExample;
