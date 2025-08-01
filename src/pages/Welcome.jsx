import { Card, Table, Tag, Collapse } from "antd";

const { Panel } = Collapse;

const Welcome = () => {
  const columns = [
    {
      title: "Concept",
      dataIndex: "concept",
      key: "concept",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
      key: "purpose",
    },
    {
      title: "When to Use",
      dataIndex: "whenToUse",
      key: "whenToUse",
    },
    {
      title: "Performance Impact",
      dataIndex: "performance",
      key: "performance",
      render: (text) => {
        const color =
          text === "High" ? "red" : text === "Medium" ? "orange" : "green";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Example",
      dataIndex: "example",
      key: "example",
    },
  ];

  const data = [
    {
      key: "1",
      concept: "useMemo",
      purpose: "Memoize expensive calculations",
      whenToUse:
        "When you need to cache computation results between re-renders",
      performance: "Medium",
      example:
        "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
    },
    {
      key: "2",
      concept: "useCallback",
      purpose: "Memoize functions",
      whenToUse: "When passing callbacks to optimized child components",
      performance: "Medium",
      example:
        "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);",
    },
    {
      key: "3",
      concept: "Code Splitting",
      purpose: "Split code into smaller chunks",
      whenToUse: "For large applications to reduce initial load time",
      performance: "High",
      example:
        'const OtherComponent = React.lazy(() => import("./OtherComponent"));',
    },
    {
      key: "4",
      concept: "map()",
      purpose: "Transform arrays into React elements",
      whenToUse: "Rendering lists of items",
      performance: "Low",
      example: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
    },
    {
      key: "5",
      concept: "Anonymous Functions",
      purpose: "Inline function definitions",
      whenToUse: "Simple event handlers or short functions",
      performance: "Low (but can cause unnecessary re-renders)",
      example: "<button onClick={() => handleClick()}>Click</button>",
    },
    {
      key: "6",
      concept: "Strict Mode",
      purpose: "Highlight potential problems",
      whenToUse: "During development to catch common bugs",
      performance: "None (development only)",
      example: "<React.StrictMode><App /></React.StrictMode>",
    },
    {
      key: "7",
      concept: "Debounce/Throttle",
      purpose: "Limit function execution rate",
      whenToUse: "For scroll/resize handlers or search inputs",
      performance: "High",
      example: "const debouncedSearch = debounce(searchAPI, 300);",
    },
    {
      key: "8",
      concept: "Context API",
      purpose: "Share data across components",
      whenToUse: "When prop drilling becomes cumbersome",
      performance: "Medium",
      example: "const ThemeContext = React.createContext();",
    },
    {
      key: "9",
      concept: "useTransition",
      purpose: "Mark updates as non-urgent",
      whenToUse: "For smooth transitions during heavy updates",
      performance: "High",
      example: "const [isPending, startTransition] = useTransition();",
    },
    {
      key: "10",
      concept: "Component Tree",
      purpose: "Component hierarchy structure",
      whenToUse: "Always (fundamental React concept)",
      performance: "N/A",
      example: "Parent > Child > Grandchild component relationships",
    },
    {
      key: "11",
      concept: "Effect Scope",
      purpose: "Control effect execution scope",
      whenToUse: "When managing side effects in components",
      performance: "Medium",
      example: "useEffect(() => { /* effect */ }, [dependencies]);",
    },
    {
      key: "12",
      concept: "Image Optimization",
      purpose: "Reduce image file sizes",
      whenToUse: "For all images in production apps",
      performance: "High",
      example: "Using WebP/SVG formats, lazy loading",
    },
    {
      key: "13",
      concept: "Debugging",
      purpose: "Identify and fix issues",
      whenToUse: "During development and troubleshooting",
      performance: "Development Only",
      example: "React DevTools, console.log, error boundaries",
    },
  ];

  return (
    <>
      <div className="text-center text-gray-700 mb-8">
        <h1 className="text-3xl font-bold">
          Welcome to the React Performance Workshop! 🚀
        </h1>
        <p className="text-lg mb-2">
          Select a topic from the top menu to explore various performance
          optimization techniques in React.
        </p>
        <p className="text-sm text-muted-foreground">
          💡 This entire application is built using{" "}
          <span className="font-semibold">React.lazy</span> and{" "}
          <span className="font-semibold">Suspense</span> for code splitting and
          lazy loading — only the route you visit is loaded into the browser!
        </p>
      </div>
      <Card title="React Concepts Comparison" className="m-4 shadow-lg">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          expandable={{
            expandedRowRender: (record) => (
              <div className="p-2 bg-gray-50 rounded">
                <strong>Key Notes:</strong>
                <ul className="list-disc pl-5 mt-1">
                  {record.key === "1" && (
                    <li>Prevents recalculating values on every render</li>
                  )}
                  {record.key === "2" && (
                    <li>
                      Helps prevent unnecessary re-renders of child components
                    </li>
                  )}
                  {record.key === "3" && (
                    <li>Implemented using React.lazy() and Suspense</li>
                  )}
                  {record.key === "4" && (
                    <li>
                      Always include a unique key prop when rendering lists
                    </li>
                  )}
                  {record.key === "5" && (
                    <li>
                      Avoid in dependency arrays as they recreate on each render
                    </li>
                  )}
                  {record.key === "6" && (
                    <li>
                      Detects unsafe lifecycles, legacy API usage, and more
                    </li>
                  )}
                  {record.key === "7" && (
                    <li>
                      Debounce: delay execution, Throttle: limit execution rate
                    </li>
                  )}
                  {record.key === "8" && (
                    <li>
                      Consider performance for frequently updated contexts
                    </li>
                  )}
                  {record.key === "9" && (
                    <li>Part of React's Concurrent Features</li>
                  )}
                  {record.key === "10" && (
                    <li>Keep it shallow for better performance</li>
                  )}
                  {record.key === "11" && (
                    <li>Cleanup functions prevent memory leaks</li>
                  )}
                  {record.key === "12" && (
                    <li>Can improve LCP (Largest Contentful Paint) metric</li>
                  )}
                  {record.key === "13" && (
                    <li>Essential for development workflow and bug fixing</li>
                  )}
                </ul>
              </div>
            ),
          }}
        />

        <Collapse className="mt-4">
          <Panel header="Performance Tips" key="1">
            <ul className="list-disc pl-5">
              <li>
                Use <Tag>useMemo</Tag> and <Tag>useCallback</Tag> judiciously -
                they have their own overhead
              </li>
              <li>Code splitting works best with route-based splitting</li>
              <li>
                Context API works best for static or rarely changing values
              </li>
              <li>
                Debounce/throttle window events for better scroll/resize
                performance
              </li>
              <li>Optimize images during build time (WebP conversion)</li>
            </ul>
          </Panel>
          <Panel header="Common Pitfalls" key="2">
            <ul className="list-disc pl-5">
              <li>
                Forgetting dependency arrays in <Tag>useEffect</Tag>
              </li>
              <li>
                Creating new objects/functions in render causing unnecessary
                re-renders
              </li>
              <li>Overusing Context API for frequently updated values</li>
              <li>Not adding keys to list items</li>
              <li>Using anonymous functions in dependency arrays</li>
            </ul>
          </Panel>
        </Collapse>
      </Card>
    </>
  );
};

export default Welcome;
