import React, { useCallback } from 'react';
import './Diagram.scss';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#F04973';
    case 'secondary':
      return '#2596FF';
      case 'page':
        return '#E1DAFF';
    default:
      return '#FFDEE4';
  }
};

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'component App' },
    position: { x: 250, y: 25 },
    style: {
      background: 'linear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box',
      width: 500,
      fontSize: 24,
      color:'white'
    },
  },

  {
    id: '2',
    data: { label: <div>Header</div> },
    type: 'secondary',

    position: { x: 100, y: 125 },
    style: {
      width: 200,
      fontSize: 15,
      background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)',
      fontSize:20
    },
  },
  {
    id: '3',
    type: 'secondary',
    data: { label: <div> Main</div> },
    position: { x: 400, y: 125 },
    style: {
      width: 200,
      fontSize: 15,
      background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)',
      fontSize:20

    },
  },
  {
    id: '4',
    data: { label: <div> Footer</div> },
    type: 'secondary',
    position: { x: 700, y: 125 },
    style: {
      width: 200,
      fontSize: 15,
      background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)',
      fontSize:20,
    },
  },
  {
    id: '5',
    data: { label: <div> Home page</div> },
    type: 'page',
    position: { x: -900, y: 250 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id: '5-1',
    data: { label: <div> Hero Block</div> },
    position: { x: -1050, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'5-1-1',
    data: { label: <div> Hero Block Info</div>},
    position: { x: -1150, y: 450 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-2',
    data: { label: <div> Home Reviews</div> },
    position: { x: -850, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id: '5-2-1',
    data: { label: <div> Reviews Card</div> },
    position: { x: -900, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-2-2',
    data: { label: <div> Reviews Slider</div> },
    position: { x: -760, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-3',
    data: { label: <div> Advantages</div> },
    position: { x: -650, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id: '5-3-1',
    data: { label: <div> Advantages Card</div> },
    position: { x: -600, y: 450 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-4',
    data: { label: <div> Home Teachers</div> },
    position: { x: -950, y: 390 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id: '5-4-1',
    data: { label: <div> Teachers Card</div> },
    position: { x: -1050, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-5',
    data: { label: <div> Popular Course</div> },
    position: { x: -750, y: 390 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id: '5-5-1',
    data: { label: <div> Course Card</div> },
    position: { x: -650, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '5-6',
    data: { label: <div> How Working</div> },
    position: { x: -500, y: 390 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'5-6-1',
    data: { label: <div> Working Card</div>},
    position: { x: -450, y: 480 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id: '6',
    data: { label: <div> Catalog page</div> },
    type: 'page',

    position: { x: -300, y: 250 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'6-1',
    data: { label: <div> Catalog Articles</div>},
    position: { x: -300, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'6-2',
    data: { label: <div>Filter Catalog </div>},
    position: { x: -100, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'6-3',
    data: { label: <div> User List Catalog </div>},
    position: { x: -200, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id: '7',
    data: { label: <div> Teacher page</div> },
    type: 'page',

    position: { x: 200, y: 600 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'7-1',
    data: { label: <div> Teacher Calendar</div>},
    position: { x: 200, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-2',
    data: { label: <div> Teacher Comment</div>},
    position: { x: 400, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-3',
    data: { label: <div> Teacher Cv</div>},
    position: { x: 300, y: 700 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-4',
    data: { label: <div> Teacher Greet</div>},
    position: { x: 100, y: 700 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-5',
    data: { label: <div> Teacher Lesson</div>},
    position: { x: 0, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-6',
    data: { label: <div> Teacher Marks</div>},
    position: { x: 200, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'7-7',
    data: { label: <div> Teacher Posibility</div>},
    position: { x: 400, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },{
    id:'7-8',
    data: { label: <div> Teacher Quotes</div>},
    position: { x: 300, y: 700 },
    style: {
      background: '#FFDEE4',
    },
  },{
    id:'8',
    data: { label: <div> Article page</div>},
    type: 'page',

    position: { x: 400, y: 600 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:"9",
    data: { label: <div> Registration page</div>},
    type: 'page',

    position: { x: 900, y: 250 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'9-1',
    data: { label: <div> Authorize</div>},
    position: { x: 900, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'9-2',
    data: { label: <div> Registration</div>},
    position: { x: 1100, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'9-3',
    data: { label: <div> Registration Comp</div>},
    position: { x: 1000, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'9-4',
    data: { label: <div> Registration Student</div>},
    position: { x: 1200, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'9-5',
    data: { label: <div> Registration Succ</div>},
    position: { x: 800, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'9-6',
    data: { label: <div> Registration Teacher</div>},
    position: { x: 700, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10',
    data: { label: <div> Account</div>},
    type: 'page',

    position: { x: 1400, y: 250 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'10-1',
    data: { label: <div> Account 404</div>},
    position: { x: 1400, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-2',
    data: { label: <div> Chat Room</div>},
    position: { x: 1600, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-3',
    data: { label: <div> Company Team</div>},
    position: { x: 1500, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-4',
    data: { label: <div>  Favorite</div>},
    position: { x: 1700, y: 400 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-5',
    data: { label: <div>  My Lesson</div>},
    position: { x: 1600, y: 450 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-6',
    data: { label: <div>  Not Auth</div>},
    position: { x: 1400, y: 450 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-7',
    data: { label: <div>  Payment</div>},
    position: { x: 1500, y: 500 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-8',
    data: { label: <div>  Profile</div>},
    position: { x: 1700, y: 500 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-9',
    data: { label: <div>  Services</div>},
    position: { x: 1600, y: 550 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-10',
    data: { label: <div>  Statistics</div>},
    position: { x: 2000, y: 350 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-10-1',
    data: { label: <div>  Company View</div>},
    position: { x:2200, y: 450 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'10-10-2',
    data: { label: <div>  Student View</div>},
    position: { x: 2150, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'10-10-3',
    data: { label: <div>  Teacher View</div>},
    position: { x: 2200, y: 400 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'10-11',
    data: { label: <div>  Person Data</div>},
    position: { x: 1800, y: 450 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'10-11-1',
    data: { label: <div>  Company View</div>}, 
    position: { x: 1950, y: 550 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'10-11-2',
    data: { label: <div>  Student View</div>},
    position: { x: 1900, y: 600 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'10-11-3',
    data: { label: <div>  Teacher View</div>},
    position: { x: 2000, y: 500 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'11',
    data: { label: <div>  404</div>},
    type: 'page',

    position: { x: 2000, y: 250 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'12',
    data: { label: <div>  Forum</div>},
    type: 'page',

    position: { x: 660, y: 600 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'12-1',
    data: { label: <div> Item Forum </div>},
    position: { x: 660, y: 700 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'12-2',
    data: { label: <div> Item Mess Forum </div>},
    position: { x: 860, y: 700 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'12-3',
    data: { label: <div> List Forum </div>},
    position: { x: 750, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'12-4',
    data: { label: <div> View Forum </div>},
    position: { x: 950, y: 750 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'13',
    data: { label: <div>  Online Lesson</div>},
    type: 'page',

    position: { x: -900, y: 800 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'13-1',
    data: { label: <div>  Online Lesson Meet</div>},
    position: { x: -900, y: 900 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14',
    data: { label: <div>  Lesson</div>},
    type: 'page',

    position: { x: -600, y: 800 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'14-1',
    data: { label: <div>  Lesson Form</div>},
    position: { x: -600, y: 900 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-2',
    data: { label: <div>  Lesson Display</div>},
    position: { x: -400, y: 900 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-3',
    data: { label: <div>  Lesson Input</div>},
    position: { x: -500, y: 950 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-4',
    data: { label: <div>  Lesson Dropdown</div>},
    position: { x: -300, y: 950 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-5',
    data: { label: <div>  Lesson Date</div>},
    position: { x: -400, y: 1000 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-6',
    data: { label: <div> Lesson Group</div>},
    position: { x: -200, y: 1000 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'14-6-1',
    data: { label: <div> Group Modal</div>},
    position: { x: -100, y: 1100 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'14-6-2',
    data: { label: <div> Group Tag</div>},
    position: { x: 100, y: 1100 },
    style: {
      background: '#D0EEFB',
      width:100,
      fontSize:9,
    },
  },
  {
    id:'15',
    data: { label: <div>  Groupe Lesson</div>},
    type: 'page',

    position: { x: -200, y: 800 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'15-1',  
    data: { label: <div>  Lesson Modal</div>},
    position: { x: -100, y: 900 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'15-2',
    data: { label: <div> Lesson Tag</div>},
    position: { x: 100, y: 900 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'16',
    data: { label: <div>  Chat</div>},
    type: 'page',

    position: { x: 550, y: 850 },
    style: {
      width: 150,
      background: '#E1DAFF',
    },
  },
  {
    id:'16-1',
    data: { label: <div>Group  Chat</div>},
    position: { x: 550, y: 950 },
    style: {
      background: '#FFDEE4',
    },
  },
  {
    id:'16-2',
    data: { label: <div>Messeges Chat</div>},
    position: { x: 750, y: 950 },
    style: {
      background: '#FFDEE4',
    },
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e4-3', source: '3', target: '5',label: 'page' },
  { id: 'e5-6', source: '5', target: '5-1', animated: true, label: 'component' },
  { id: 'e5-7', source: '5', target: '5-2', animated: true, label: 'component' },
  { id: 'e5-8', source: '5', target: '5-3', animated: true, label: 'component' },
  { id: 'e5-9', source: '5', target: '5-4', animated: true, label: 'component' },
  { id: 'e5-10', source: '5', target: '5-5', animated: true, label: 'component' },
  { id: 'e5-11', source: '5', target: '5-6', animated: true, label: 'component' },
  { source: '3', target: '6', label: 'page'},
  { source: '6', target: '6-1', label: 'component',animated: true, },
  { source: '6', target: '6-2', label: 'component',animated: true, },
  { source: '6', target: '6-3', label: 'component',animated: true, },
  { source: '3', target: '7', label: 'page'},
  { source: '7', target: '7-1', label: 'component',animated: true, },
  { source: '7', target: '7-2', label: 'component',animated: true, },
  { source: '7', target: '7-3', label: 'component',animated: true, },
  { source: '7', target: '7-4', label: 'component',animated: true, },
  { source: '7', target: '7-5', label: 'component',animated: true, },
  { source: '7', target: '7-6', label: 'component',animated: true, },
  { source: '7', target: '7-7', label: 'component',animated: true, },
  { source: '7', target: '7-8', label: 'component',animated: true, },
  { source: '3', target: '8', label: 'page'},
  { source: '3', target: '9', label: 'page'},
  { source: '9', target: '9-1', label: 'component',animated: true, },
  { source: '9', target: '9-2', label: 'component',animated: true, },
  { source: '9', target: '9-3', label: 'component',animated: true, },
  { source: '9', target: '9-4', label: 'component',animated: true, },
  { source: '9', target: '9-5', label: 'component',animated: true, },
  { source: '9', target: '9-6', label: 'component',animated: true, },
  { source: '3', target: '10', label: 'page'},
  { source: '10', target: '10-1', label: 'component',animated: true, },
  { source: '10', target: '10-2', label: 'component',animated: true, },
  { source: '10', target: '10-3', label: 'component',animated: true, },
  { source: '10', target: '10-4', label: 'component',animated: true, },
  { source: '10', target: '10-5', label: 'component',animated: true, },
  { source: '10', target: '10-6', label: 'component',animated: true, },
  { source: '10', target: '10-7', label: 'component',animated: true, },
  { source: '10', target: '10-8', label: 'component',animated: true, },
  { source: '10', target: '10-9', label: 'component',animated: true, },
  { source: '10', target: '10-10', label: 'component',animated: true, },
  { source: '10', target: '10-11', label: 'component',animated: true, },
  { source: '3', target: '11', label: 'page'},
  {source:'3',target:'12',label:'page'},
  {source:'12',target:'12-1',label:'component',animated:true},
  {source:'12',target:'12-2',label:'component',animated:true},
  {source:'12',target:'12-3',label:'component',animated:true},
  {source:'12',target:'12-4',label:'component',animated:true},
  {source:'3',target:'13',label:'page'},
  {source:'13',target:'13-1',label:'component',animated:true},
  {source:'3',target:'14',label:'page'},
  {source:'14',target:'14-1',label:'component',animated:true},
  {source:'14',target:'14-2',label:'component',animated:true},
  {source:'14',target:'14-3',label:'component',animated:true},
  {source:'14',target:'14-4',label:'component',animated:true},
  {source:'14',target:'14-5',label:'component',animated:true},
  {source:'3',target:'15',label:'page'},
  {source:'15',target:'15-1',label:'component',animated:true},
  {source:'15',target:'15-2',label:'component',animated:true},
  {source:'3',target:'16',label:'page'},
  {source:'16',target:'16-1',label:'component',animated:true},
  {source:'16',target:'16-2',label:'component',animated:true},
  {source :'5-1',target:'5-1-1',label:'component',animated:true},
  {source :'5-2',target:'5-2-1',label:'component',animated:true},
  {source :'5-2',target:'5-2-2',label:'component',animated:true},
  {source :'5-4',target:'5-4-1',label:'component',animated:true},
  {source :'5-6',target:'5-6-1',label:'component',animated:true},
  {source :'5-5',target:'5-5-1',label:'component',animated:true},
  {source :'5-3',target:'5-3-1',label:'component',animated:true},
  {source :'10-11',target:'10-11-1',label:'component',animated:true},
  {source :'10-11',target:'10-11-2',label:'component',animated:true},
  {source :'10-11',target:'10-11-3',label:'component',animated:true},
  {source :'10-10',target:'10-10-1',label:'component',animated:true},
  {source :'10-10',target:'10-10-2',label:'component',animated:true},
  {source :'10-10',target:'10-10-3',label:'component',animated:true},
  {source:'14',target:'14-6',label:'component',animated:true},
  {source:'14-6',target:'14-6-1',label:'component',animated:true},
  {source:'14-6',target:'14-6-2',label:'component',animated:true},

];
const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className='diagrams' style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap className='mini-map'  nodeColor={nodeColor} />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
