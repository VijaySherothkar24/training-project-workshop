import React, { useState, useMemo } from "react";
import { Card, Table } from "antd";

const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num * Math.random();
  }
  return result.toFixed(2);
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(0);

  const badResult = expensiveCalculation(number);
  const goodResult = useMemo(() => expensiveCalculation(number), [number]);

  const columns = [
    {
      title: "Scenario",
      dataIndex: "scenario",
      key: "scenario",
    },
    {
      title: "What Happens",
      dataIndex: "explanation",
      key: "explanation",
    },
    {
      title: "Performance Impact",
      dataIndex: "impact",
      key: "impact",
    },
  ];

  const data = [
    {
      key: "1",
      scenario: "❌ Without useMemo",
      explanation:
        "Even if you just click a button unrelated to the calculation, it recalculates everything from scratch.",
      impact: "Slower, unnecessary work every render",
    },
    {
      key: "2",
      scenario: "✅ With useMemo",
      explanation:
        "Only recalculates when the number you care about changes. Saves time otherwise.",
      impact: "Faster, avoids extra work",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card
        title={<span className="text-lg font-semibold">🚀 useMemo Example</span>}
        className="w-full max-w-4xl shadow-xl rounded-xl border border-gray-200"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setNumber(number + 1)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              Increment Number ({number})
            </button>
            <button
              onClick={() => setOtherState(otherState + 1)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
            >
              Change Other State ({otherState})
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="font-semibold text-red-600">❌ Bad Result</p>
              <p>{badResult}</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="font-semibold text-green-600">✅ Good Result (useMemo)</p>
              <p>{goodResult}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-gray-300 shadow-sm">
            <h3 className="text-md font-bold mb-2">📊 Comparison Table (Layman Terms)</h3>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              rowClassName={(record) =>
                record.scenario.includes("❌") ? "bg-red-50" : "bg-green-50"
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UseMemoExample;
