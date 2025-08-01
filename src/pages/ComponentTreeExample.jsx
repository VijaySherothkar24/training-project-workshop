import React from "react";
import { Card } from "antd";

// ❌ Still not ideal - monolithic component
const MonolithicComponent = () => {
  return (
    <div>
      <h3>Monolithic Component</h3>
      <div>User Profile Section</div>
      <div>Order History</div>
      <div>Preferences</div>
      <div>Notifications</div>
    </div>
  );
};

// ✅ Better - Modular components
const ContentSection = ({ title, content }) => (
  <div className="p-4 border rounded mb-2">
    <h4>{title}</h4>
    {content && <p>{content}</p>}
  </div>
);

const ModularComponent = () => {
  const sections = [
    { title: "User Profile", content: "User details..." },
    { title: "Order History", content: "Recent orders..." },
    { title: "Preferences" },
  ];

  return (
    <>
      <h3>Modular Component</h3>
      {sections.map((section) => (
        <ContentSection
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}
    </>
  );
};

const ComponentTreeExample = () => (
  <Card title="Component Composition Best Practices" className="m-4 shadow-lg">
    <MonolithicComponent />
    <div className="my-4 border-t"></div>
    <ModularComponent />
    <div className="bg-gray-100 p-4 mt-4 rounded">
      <strong>Explanation:</strong>
      <p className="mt-2">
        Breaking UI into smaller components improves:
        <ul className="list-disc pl-5 mt-1">
          <li>Readability</li>
          <li>Maintainability</li>
          <li>Reusability</li>
          <li>Testability</li>
        </ul>
      </p>
    </div>
  </Card>
);

export default ComponentTreeExample;