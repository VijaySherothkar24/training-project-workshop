import React, { useState, useEffect } from "react";
import { Card, Collapse, Tag, Divider, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const EffectsScopeExample = () => {
  const [globalVar] = useState("I'm global in component");
  const [activePanels, setActivePanels] = useState([]);

  // Global scope demo (runs once on mount)
  useEffect(() => {
    console.log("%c=== SCOPE DEMONSTRATION ===", 
      "font-size: 16px; font-weight: bold; color: #1890ff;");
    console.log("Click on each panel to see its scope examples\n");
  }, []);

  // Panel-specific effects
  useEffect(() => {
    if (activePanels.includes("1")) {
      console.log("\n1. GLOBAL SCOPE DEMO");
      console.log("This runs in component scope");
      console.log(`Can access globalVar: ${globalVar}`);
    }
  }, [activePanels, globalVar]);

  const ComponentScopeDemo = ({ parentVar }) => {
    const [localState] = useState("I'm local component state");
    
    useEffect(() => {
      if (activePanels.includes("2")) {
        console.log("\n2. COMPONENT SCOPE DEMO");
        console.log("Child component rendering");
        console.log(`Can access parent's globalVar: ${parentVar}`);
        console.log(`Has own localState: ${localState}`);
      }
    }, [activePanels, parentVar, localState]);
    
    return (
      <div className="p-2 bg-gray-50 rounded mt-2">
        <p>Parent prop: <Tag color="blue">{parentVar}</Tag></p>
        <p>Local state: <Tag color="green">{localState}</Tag></p>
      </div>
    );
  };

  const demonstrateScopes = () => {
    console.log("\n3. FUNCTION/BLOCK SCOPE DEMO (via button)");
    let functionScoped = "I'm function scoped";
    console.log(`functionScoped: ${functionScoped}`);

    if (true) {
      let blockScoped = "I'm block scoped";
      console.log("Inside block:");
      console.log(`Can access functionScoped: ${functionScoped}`);
      console.log(`blockScoped: ${blockScoped}`);
    }
    
    console.log("Outside block - can't access blockScoped");
  };

  useEffect(() => {
    if (activePanels.includes("3")) {
      console.log("\n3. FUNCTION SCOPE INFO");
      console.log("Click the button below to run the demo");
    }
  }, [activePanels]);

  useEffect(() => {
    if (activePanels.includes("4")) {
      console.log("\n4. EFFECT SCOPE DEMO");
      console.log("This effect runs because panel 4 opened");
      console.log("See the code for different dependency patterns");
      
      return () => {
        console.log("Cleaning up effect scope demo...");
      };
    }
  }, [activePanels]);

  return (
    <Card 
      title={
        <div>
          Understanding JavaScript & React Scopes
        </div>
      } 
      className="m-4 shadow-lg"
    >
      <div className="mb-4">
        <p className="font-semibold">Open each panel to see its specific scope examples in console.</p>
      </div>

      <Collapse
        activeKey={activePanels}
        onChange={setActivePanels}
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        <Panel header="1. Global Scope" key="1">
          <pre>{`// Available everywhere in your code
const globalVar = "I'm accessible everywhere";

function component() {
  console.log(globalVar); // Works
}`}</pre>
          <p className="mt-2">Variables declared outside components have global scope.</p>
        </Panel>

        <Panel header="2. Component Scope" key="2">
          <pre>{`function MyComponent() {
  // Component-scoped variables
  const [state] = useState('Only in this component');
  return <Child prop={state} />;
}`}</pre>
          <div className="mt-2">
            <ComponentScopeDemo parentVar={globalVar} />
          </div>
        </Panel>

        <Panel header="3. Function & Block Scope" key="3">
          <pre>{`function demo() {
  let functionScoped = 'Available in function';
  
  if (true) {
    let blockScoped = 'Only in this block';
    console.log(functionScoped); // ✅ Works
  }
  
  console.log(blockScoped); // ❌ Error
}`}</pre>
          <Button 
            type="primary" 
            onClick={demonstrateScopes}
            className="mt-2"
          >
            Run Function/Block Demo
          </Button>
        </Panel>

        <Panel header="4. Effect Dependency Scope" key="4">
          <pre>{`// Runs on mount only
useEffect(() => {
  console.log("Mounted");
}, []);

// Runs when data changes
useEffect(() => {
  console.log("Data updated");
}, [data]);`}</pre>
          <p className="mt-2">Dependency array defines when effects run.</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default EffectsScopeExample;