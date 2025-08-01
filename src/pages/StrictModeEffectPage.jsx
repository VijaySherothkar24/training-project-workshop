import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";

// ✅ Mount-Only: No cleanup
const MountOnlyEffect = () => {
  useEffect(() => {
    console.log("📥 MountOnlyEffect mounted!");
  }, []);

  return <p>👀 Open console: MountOnlyEffect logs only on mount.</p>;
};

// 🔁 Mount with Cleanup (Unmount)
const MountWithCleanupEffect = () => {
  useEffect(() => {
    console.log("📥 MountWithCleanupEffect mounted!");

    return () => {
      console.log("🧹 MountWithCleanupEffect unmounted (cleanup)!");
    };
  }, []);

  return <p>👀 Open console: MountWithCleanupEffect logs on both mount and unmount.</p>;
};

const columns = [
  {
    title: "Scenario",
    dataIndex: "scenario",
    key: "scenario",
  },
  {
    title: "Mount Log",
    dataIndex: "mountLog",
    key: "mountLog",
  },
  {
    title: "Unmount/Cleanup Log",
    dataIndex: "cleanupLog",
    key: "cleanupLog",
  },
  {
    title: "StrictMode Behavior",
    dataIndex: "strictMode",
    key: "strictMode",
  },
];

const data = [
  {
    key: "1",
    scenario: "MountOnlyEffect",
    mountLog: "📥 MountOnlyEffect mounted!",
    cleanupLog: "❌ No cleanup logic present",
    strictMode: "Mount logs once, no cleanup run",
  },
  {
    key: "2",
    scenario: "MountWithCleanupEffect",
    mountLog: "📥 MountWithCleanupEffect mounted!",
    cleanupLog: "🧹 MountWithCleanupEffect unmounted (cleanup)!",
    strictMode:
      "Effect runs, cleanup runs → helps detect cleanup correctness",
  },
];

const StrictModePage = () => {
  const [show, setShow] = useState(true);

  return (
    <Card
      title="React Strict Mode: Mount vs Unmount"
      className="m-4 shadow-lg"
    >
      <button
        className="bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => setShow(!show)}
      >
        Toggle Components
      </button>

      <div className="mt-4 space-y-4">
        {show && (
          <>
            <Card title="Example 1: Mount-Only Effect">
              <MountOnlyEffect />
            </Card>

            <Card title="Example 2: Mount + Cleanup Effect">
              <MountWithCleanupEffect />
            </Card>
          </>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">
          🔍 What's the difference?
        </h2>
        <Table columns={columns} dataSource={data} pagination={false} bordered />
      </div>
    </Card>
  );
};

export default StrictModePage;
