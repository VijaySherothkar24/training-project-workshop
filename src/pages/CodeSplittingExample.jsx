import React, { lazy, Suspense, useState } from "react";
import { Card, Spin, Table, Button } from "antd";

// Lazy component
const LazyComponent = lazy(() => import("../components/LazyComponent"));

// Data for AntD Table
const dataSource = [
  {
    key: "1",
    concept: "React.lazy",
    meaning: "Loads a component only when it is needed",
  },
  {
    key: "2",
    concept: "Suspense",
    meaning: "Shows a fallback UI (like spinner) while the lazy component loads",
  },
  {
    key: "3",
    concept: "Benefit",
    meaning: "Faster initial load, better performance and UX",
  },
];

const columns = [
  {
    title: "Concept",
    dataIndex: "concept",
    key: "concept",
  },
  {
    title: "Explanation",
    dataIndex: "meaning",
    key: "meaning",
  },
];

const CodeSplittingExample = () => {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <Card title="Code Splitting with React.lazy & Suspense" className="m-4 shadow-lg">
      <div className="flex flex-col gap-4">
        <Button
          type="primary"
          onClick={() => setShowLazy(true)}
          className="w-fit"
        >
          Load Lazy Component
        </Button>

        {showLazy && (
          <Suspense fallback={<Spin tip="Loading component..." />}>
            <LazyComponent />
          </Suspense>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Layman Explanation</h2>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            bordered
          />
        </div>
      </div>
    </Card>
  );
};

export default CodeSplittingExample;
