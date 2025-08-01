import React from "react";
import { Card, Divider } from "antd";
import ThemeToggle from "../components/ThemeToggle";
import UserContextExample from "./UserContextExample";

const ContextExample = () => (
  <>
  <Card title="Avoid Prop Drilling with Context (Theme)" className="m-4 shadow-lg">
    <ThemeToggle />

    <div className="bg-gray-100 p-2 mt-4 rounded">
      <strong>Explanation:</strong>
      <p>
        This component uses <code>useGlobalContext()</code> to manage theme globally. No props were passed down manually.
      </p>
    </div>
    
  </Card>
  <Divider/>
  <UserContextExample />
  </>
);

export default ContextExample;
