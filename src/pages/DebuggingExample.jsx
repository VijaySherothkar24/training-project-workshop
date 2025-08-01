import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Button,
  Typography,
  Space,
  Divider,
  Alert,
  Table,
  Tag,
  Collapse,
} from "antd";
import {
  BugOutlined,
  ConsoleSqlOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const DebuggingExample = () => {
  const [count, setCount] = useState(0);
  const [debugInfo, setDebugInfo] = useState([]);
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const [error, setError] = useState(null);
  const renderCountRef = useRef(0);

  // Track render count
  renderCountRef.current += 1;

  // Debug logging effect
  useEffect(() => {
    console.log("🔍 Component rendered", {
      count,
      timestamp: new Date().toISOString(),
    });

    setDebugInfo((prev) => [
      ...prev,
      {
        type: "render",
        message: `Component rendered (count: ${count})`,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, [count]);

  // Simulate error for error boundary demo
  const triggerError = () => {
    setError(
      new Error("This is a simulated error for debugging demonstration")
    );
  };

  const clearDebugInfo = () => {
    setDebugInfo([]);
  };

  const debuggingTools = [
    {
      key: "1",
      tool: "React DevTools",
      purpose: "Inspect component tree, props, state, and hooks",
      usage: "Browser extension - Components and Profiler tabs",
      benefits: "Visual component hierarchy, real-time state inspection",
    },
    {
      key: "2",
      tool: "Console.log",
      purpose: "Basic debugging output",
      usage: "console.log('Debug info:', data)",
      benefits: "Quick debugging, no setup required",
    },
    {
      key: "3",
      tool: "useEffect Debugging",
      purpose: "Track effect execution and dependencies",
      usage: "console.log in useEffect with dependency tracking",
      benefits: "Understand when effects run and why",
    },
    {
      key: "4",
      tool: "React.StrictMode",
      purpose: "Detect side effects and deprecated APIs",
      usage: "Wrap app in <React.StrictMode>",
      benefits: "Catches common mistakes in development",
    },
    {
      key: "5",
      tool: "Error Boundaries",
      purpose: "Catch and handle component errors",
      usage: "Wrap components in error boundary",
      benefits: "Prevents app crashes, graceful error handling",
    },
    {
      key: "6",
      tool: "Performance Profiler",
      purpose: "Measure component render performance",
      usage: "React DevTools Profiler tab",
      benefits: "Identify performance bottlenecks",
    },
  ];

  const columns = [
    {
      title: "Tool",
      dataIndex: "tool",
      key: "tool",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
      key: "purpose",
    },
    {
      title: "Usage",
      dataIndex: "usage",
      key: "usage",
      render: (text) => <Text code>{text}</Text>,
    },
    {
      title: "Benefits",
      dataIndex: "benefits",
      key: "benefits",
    },
  ];

  const debugLogs = [
    {
      key: "1",
      type: "info",
      message: "Component mounted",
      timestamp: new Date().toISOString(),
    },
    {
      key: "2",
      type: "warning",
      message: "State update detected",
      timestamp: new Date().toISOString(),
    },
    {
      key: "3",
      type: "error",
      message: "Simulated error triggered",
      timestamp: new Date().toISOString(),
    },
  ];

  const logColumns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => {
        const color =
          type === "error" ? "red" : type === "warning" ? "orange" : "blue";
        return <Tag color={color}>{type.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (timestamp) => new Date(timestamp).toLocaleTimeString(),
    },
  ];

  return (
    <div className="space-y-6">
      <Card title={<Title level={3}>React Debugging Workshop</Title>}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Interactive Debug Section */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <Title level={4}>🔧 Interactive Debugging NEW COMMIT</Title>
            <Space>
              <Button
                type="primary"
                onClick={() => setCount((c) => c + 1)}
                icon={<ReloadOutlined />}
              >
                Increment Count ({count})
              </Button>
              <Button danger onClick={triggerError} icon={<BugOutlined />}>
                Trigger Error
              </Button>
              <Button
                onClick={() => setShowDebugPanel(!showDebugPanel)}
                icon={<EyeOutlined />}
              >
                {showDebugPanel ? "Hide" : "Show"} Debug Panel
              </Button>
              <Button onClick={clearDebugInfo}>Clear Logs</Button>
            </Space>

            <div className="mt-4">
              <Text strong>Render Count: </Text>
              <Tag color="blue">{renderCountRef.current}</Tag>
            </div>
          </div>

          {/* Debug Panel */}
          {showDebugPanel && (
            <Card title="📊 Debug Information" size="small">
              <div className="space-y-4">
                <div>
                  <Text strong>Current State:</Text>
                  <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
                    {JSON.stringify(
                      { count, renderCount: renderCountRef.current },
                      null,
                      2
                    )}
                  </pre>
                </div>

                <div>
                  <Text strong>Debug Logs:</Text>
                  <Table
                    dataSource={debugInfo.slice(-5)}
                    columns={logColumns}
                    pagination={false}
                    size="small"
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Error Display */}
          {error && (
            <Alert
              message="Error Caught"
              description={error.message}
              type="error"
              showIcon
              closable
              onClose={() => setError(null)}
            />
          )}

          <Divider />

          {/* Debugging Tools Table */}
          <div>
            <Title level={4}>🛠️ Debugging Tools & Techniques</Title>
            <Table
              dataSource={debuggingTools}
              columns={columns}
              pagination={false}
              bordered
              size="middle"
            />
          </div>

          {/* Best Practices */}
          <Collapse>
            <Panel header="💡 Debugging Best Practices" key="1">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <Text strong>Use descriptive console messages:</Text>{" "}
                  <Text code>
                    console.log('User clicked:', userId, 'at:', timestamp)
                  </Text>
                </li>
                <li>
                  <Text strong>Group related logs:</Text>{" "}
                  <Text code>console.group('API Call')</Text>
                </li>
                <li>
                  <Text strong>Use different log levels:</Text>{" "}
                  <Text code>
                    console.warn(), console.error(), console.info()
                  </Text>
                </li>
                <li>
                  <Text strong>Remove debug logs in production</Text>
                </li>
                <li>
                  <Text strong>
                    Use React DevTools for component inspection
                  </Text>
                </li>
                <li>
                  <Text strong>
                    Implement error boundaries for graceful error handling
                  </Text>
                </li>
              </ul>
            </Panel>

            <Panel header="🚨 Common Debugging Scenarios" key="2">
              <div className="space-y-4">
                <div>
                  <Text strong>Infinite Re-renders:</Text>
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                    {`// ❌ Bad - causes infinite re-renders
useEffect(() => {
  setCount(count + 1);
}, [count]);

// ✅ Good - stable dependency
useEffect(() => {
  setCount(prev => prev + 1);
}, []);`}
                  </pre>
                </div>

                <div>
                  <Text strong>Memory Leaks:</Text>
                  <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                    {`// ❌ Bad - no cleanup
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
}, []);

// ✅ Good - with cleanup
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);`}
                  </pre>
                </div>
              </div>
            </Panel>
          </Collapse>

          {/* Common Error Types Section */}
          <div>
            <Title level={4}>🚨 Common Error Types & Solutions</Title>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="🔤 Syntax Errors" key="1">
                <div className="space-y-4">
                  <div>
                    <Text strong>Missing Semicolons:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Syntax Error
const name = "John"
console.log(name)

// ✅ Fixed
const name = "John";
console.log(name);`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Unclosed Brackets/Parentheses:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Syntax Error
const Component = () => {
  return (
    <div>
      <h1>Hello World
    </div>
  )
}

// ✅ Fixed
const Component = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Invalid JSX:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Syntax Error
const Component = () => {
  return (
    <div>
      {if (condition) {
        <p>Condition is true</p>
      }}
    </div>
  );
};

// ✅ Fixed
const Component = () => {
  return (
    <div>
      {condition && <p>Condition is true</p>}
    </div>
  );
};`}
                    </pre>
                  </div>
                </div>
              </Panel>

              <Panel header="⚡ Runtime Errors" key="2">
                <div className="space-y-4">
                  <div>
                    <Text strong>Undefined Variables:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Runtime Error
const Component = () => {
  return <div>{userName}</div>; // userName is not defined
};

// ✅ Fixed
const Component = () => {
  const [userName, setUserName] = useState('');
  return <div>{userName}</div>;
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Cannot Read Property of Undefined:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Runtime Error
const Component = ({ user }) => {
  return <div>{user.name}</div>; // user might be undefined
};

// ✅ Fixed
const Component = ({ user }) => {
  return <div>{user?.name || 'No name'}</div>;
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Type Errors:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Runtime Error
const handleClick = (event) => {
  console.log(event.target.value); // event might not have target
};

// ✅ Fixed
const handleClick = (event) => {
  if (event?.target?.value) {
    console.log(event.target.value);
  }
};`}
                    </pre>
                  </div>
                </div>
              </Panel>

              <Panel header="🧠 Logical Errors" key="3">
                <div className="space-y-4">
                  <div>
                    <Text strong>Incorrect State Updates:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Logical Error
const [count, setCount] = useState(0);
const increment = () => {
  setCount(count + 1); // Might use stale state
};

// ✅ Fixed
const [count, setCount] = useState(0);
const increment = () => {
  setCount(prev => prev + 1); // Uses latest state
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Infinite Loops:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Logical Error
useEffect(() => {
  setCount(count + 1);
}, [count]); // Infinite re-renders

// ✅ Fixed
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Runs only once`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Incorrect Dependencies:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Logical Error
const [data, setData] = useState([]);
useEffect(() => {
  fetchData();
}, []); // Missing fetchData in dependencies

// ✅ Fixed
const [data, setData] = useState([]);
const fetchData = useCallback(() => {
  // fetch logic
}, []);
useEffect(() => {
  fetchData();
}, [fetchData]);`}
                    </pre>
                  </div>
                </div>
              </Panel>

              <Panel header="🔄 State/Props Issues" key="4">
                <div className="space-y-4">
                  <div>
                    <Text strong>Props Not Updating:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Props Issue
const ChildComponent = ({ data }) => {
  const [localData, setLocalData] = useState(data);
  // localData won't update when props change
  
  return <div>{localData}</div>;
};

// ✅ Fixed
const ChildComponent = ({ data }) => {
  const [localData, setLocalData] = useState(data);
  
  useEffect(() => {
    setLocalData(data);
  }, [data]);
  
  return <div>{localData}</div>;
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>State Mutation:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ State Mutation
const [items, setItems] = useState([]);
const addItem = (newItem) => {
  items.push(newItem); // Mutates state directly
  setItems(items); // Won't trigger re-render
};

// ✅ Fixed
const [items, setItems] = useState([]);
const addItem = (newItem) => {
  setItems(prev => [...prev, newItem]); // Creates new array
};`}
                    </pre>
                  </div>

                  <div>
                    <Text strong>Async State Updates:</Text>
                    <pre className="bg-red-50 p-2 rounded mt-1 text-sm border border-red-200">
                      {`// ❌ Async State Issue
const [count, setCount] = useState(0);
const incrementTwice = () => {
  setCount(count + 1);
  setCount(count + 1); // Uses same stale value
};

// ✅ Fixed
const [count, setCount] = useState(0);
const incrementTwice = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1); // Uses updated value
};`}
                    </pre>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>

          {/* Interactive Error Examples */}
          <div>
            <Title level={4}>🧪 Interactive Error Examples</Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Card title="Test Error Scenarios" size="small">
                <Space>
                  <Button
                    danger
                    onClick={() => {
                      // Simulate undefined variable error
                      console.log(undefinedVariable);
                    }}
                  >
                    Trigger Undefined Error
                  </Button>
                  <Button
                    danger
                    onClick={() => {
                      // Simulate type error
                      const obj = null;
                      console.log(obj.property);
                    }}
                  >
                    Trigger Type Error
                  </Button>
                  <Button
                    danger
                    onClick={() => {
                      // Simulate syntax error in console
                      console.log("This will cause a syntax error:");
                      console.log("const x = ;"); // Invalid syntax
                    }}
                  >
                    Log Syntax Error
                  </Button>
                </Space>
              </Card>
            </Space>
          </div>

          {/* Console Instructions */}
          <Alert
            message="📱 Open Browser Console"
            description="Open your browser's developer tools (F12) and check the Console tab to see real-time debug logs as you interact with the buttons above."
            type="info"
            showIcon
          />
        </Space>
      </Card>
    </div>
  );
};

export default DebuggingExample;
