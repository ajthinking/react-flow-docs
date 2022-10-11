import React, { useCallback } from 'react';

import ReactFlow, { addEdge, useNodesState, useEdgesState, MarkerType } from 'reactflow';

import CustomNode from './CustomNode';
import FloatingEdge from './FloatingEdge';
import FloatingConnectionLine from './FloatingConnectionLine';

import 'reactflow/dist/style.css';
import './style.css';

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Drag to Connect' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'Drag to Connect' },
    position: { x: 250, y: 320 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'Drag to Connect' },
    position: { x: 40, y: 300 },
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'Drag to Connect' },
    position: { x: 300, y: 0 },
  },
];

const initialEdges = [];

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: 'black',
};

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: 'black' },
  type: 'floating',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'black',
  },
};

const NodeTypeChangeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineComponent={FloatingConnectionLine}
      connectionLineStyle={connectionLineStyle}
    />
  );
};

export default NodeTypeChangeFlow;
