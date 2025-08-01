import React, { useState, useMemo } from "react";
import { Card } from "antd";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

const DebounceThrottleExample = () => {
  const [text, setText] = useState("");

  const debouncedChange = useMemo(
    () =>
      debounce((value) => {
        console.log("🔵 Debounced:", value);
      }, 1000),
    []
  );

  const throttledChange = useMemo(
    () =>
      throttle((value) => {
        console.log("🟢 Throttled:", value);
      }, 1000),
    []
  );

  return (
    <Card title="Debounce vs Throttle" className="m-4 shadow-lg">
      <div className="space-y-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Debounce Input"
          onChange={(e) => debouncedChange(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Throttle Input"
          onChange={(e) => throttledChange(e.target.value)}
        />
        <div className="bg-gray-100 p-2 rounded">
          <strong>Explanation:</strong>
          <p><code>debounce</code> delays execution until user stops typing.</p>
          <p><code>throttle</code> ensures the callback runs at fixed intervals.</p>
        </div>
      </div>
    </Card>
  );
};

export default DebounceThrottleExample;
