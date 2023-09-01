import React, { useCallback } from 'react';
import Lesson from '../pages/LessonForm/Lesson/Lesson';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
  } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'component App' },
      position: { x: 250, y: 25 },
      style:{
        background: 'linear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box',
        width:500,
        fontSize: 20,
      }
    },
  
    {
      id: '2',
      data: { label: <div>Pages</div> },
      position: { x: 300, y: 125 },
      style:{
        width:400,
        fontSize: 15,
        background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)',
      }
    },
    {
      id: '3',
      data: { label: <div> Home page</div> },
      position: { x: 0, y: 250 },
      style:{
        width:300
      }
    },
    {
        id: '4',
        data: { label: <div> Hero Block</div> },
        position: { x: 0, y: 350 },
    }

  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true ,label: 'component',aggregateLabel: true,type: 'aggregation'},
  ];const Diagram = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
      <MiniMap  />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>
  );
};

export default Diagram;
