// import React, { useState, useTransition } from "react";
// import { Card } from "antd";

// const UseTransitionExample = () => {
//   const [input, setInput] = useState("");
//   const [list, setList] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     const val = e.target.value;
//     setInput(val);

//     startTransition(() => {
//       const newList = [];
//       for (let i = 0; i < 10000; i++) {
//         newList.push(`${val} ${i}`);
//       }
//       setList(newList);
//     });
//   };

//   return (
//     <Card title="useTransition Example" className="m-4 shadow-lg">
//       <input
//         className="border p-2 w-full rounded"
//         placeholder="Type to generate large list"
//         value={input}
//         onChange={handleChange}
//       />
//       {isPending && <p>Loading...</p>}
//       <ul className="h-40 overflow-auto border p-2 mt-2 rounded">
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//       <div className="bg-gray-100 p-2 mt-4 rounded">
//         <strong>Explanation:</strong>
//         <p>
//           <code>useTransition</code> defers non-urgent updates like rendering large lists, keeping the UI responsive.
//         </p>
//       </div>
//     </Card>
//   );
// };

// export default UseTransitionExample;

import { useState, useTransition } from 'react';

const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [regularList, setRegularList] = useState([]);

  // Much larger list size
  const LIST_SIZE = 20000;

  // Artificial delay function
  const artificialDelay = () => {
    const start = performance.now();
    while (performance.now() - start < 1) {
      // Block for 1ms per item to simulate complex rendering
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    // Without useTransition - will block UI while rendering
    const regularItems = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      regularItems.push(value);
      artificialDelay(); // Add artificial delay
    }
    setRegularList(regularItems);
    
    // With useTransition - won't block UI
    startTransition(() => {
      const transitionItems = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        transitionItems.push(value);
        artificialDelay(); // Add artificial delay
      }
      setList(transitionItems);
    });
  };

  return (
    <div style={{ padding: '20px', margin: '0 auto' }}>
      <p>Type quickly in the input to see the difference</p>
      
      <input
        type="text"
        value={input}
        onChange={handleChange}
        style={{ padding: '8px', width: '100%' }}
        placeholder="Type something quickly..."
      />

      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <p>
          <strong>Try this:</strong> Type quickly and watch how the left side (without useTransition) 
          becomes unresponsive, while the right side (with useTransition) remains smooth.
        </p>
        <h3>What's happening?</h3>
        <p>
          We're simulating expensive rendering by:
        </p>
        <ul>
          <li>Creating a list of 20,000 items</li>
          <li>Adding an artificial 1ms delay per item</li>
          <li>Forcing React to process all items at once</li>
        </ul>
        <p>
          <strong>Without useTransition</strong>, React must finish rendering all items before handling new input events.
        </p>
        <p>
          <strong>With useTransition</strong>, React can interrupt the rendering to handle urgent updates (like your typing).
        </p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '48%', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Without useTransition</h2>
          <p>UI will freeze while rendering:</p>
          <div style={{ height: '100px', overflow: 'auto', backgroundColor: '#fff9f9' }}>
            {regularList.length > 0 ? (
              <>
                <p>First 5 items (of {regularList.length}):</p>
                <ul>
                  {regularList.slice(0, 5).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No items yet</p>
            )}
          </div>
          <p style={{ color: 'red' }}>
            {regularList.length > 0 ? 'UI was blocked during this render' : ''}
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default UseTransitionExample;
