import agentIcon from '../assets/agent.png';
import { useState } from 'react';
import generateAgent from '../logic/agentGenerator.js';

export default function Sidebar() {
  const handleAgentClick = (agent) => {};
  const [testAgent, setTestAgent] = useState(generateAgent(1));

  return (
    <div className="flex h-full w-full flex-col items-start gap-4 bg-gray-200 p-4">
      {['p1', 'p2', 'p3'].map((val, key) => (
        <div key={key} className="group flex">
          <img
            className="h-20 w-20 rounded bg-gray-300"
            src={agentIcon}
            alt="agent"
            onClick={handleAgentClick(val)}
          />
          <div className="ml-1 hidden min-w-48 rounded bg-gray-300 p-2 shadow-md group-hover:block">
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Age: </span>
              {testAgent.age}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">spec: </span>
              {testAgent.spec}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">sex: </span>
              {testAgent.sex}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">effective range: </span>
              {testAgent.effectiveRangeStart}-{testAgent.effectiveRangeEnd}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
