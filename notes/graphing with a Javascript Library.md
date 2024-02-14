
- For a dynamic & interactive graph you can use a JS library like
	- D3.js
	- Vis.js
	- Sigma.js
	
- Need to install `npm install react-force-graph
	- this includes D3.js automatically 
- need to [[render markdown content]]
- 

- Export the Obsidian Vaults Markdown files and parse them to identify links between notes 

- Prepare data: typically, graph data consists of two main components; nodes and edges e.g. 
	- [[creating a script to prepare my data]]
- ```const graphData = {
  nodes: [
    { id: 'node1', label: 'Node 1', group: 1 },
    { id: 'node2', label: 'Node 2', group: 1 },
    // ... more nodes
  ],
  links: [
    { source: 'node1', target: 'node2' },
    // ... more links
  ],
};
- A force-directed graph AKA a force-directed layout / spring graph is a type of graph drawing that is used to position the nodes of a graph in 2D or 3D space so that all edges are of approximately equal length and there are as few crossing edges as possible
- Where to store the JSON file in the React application 
	- **Public Directory**: files in the public folder can be accessed directly via the URL making them suitable for public static assets
	````useEffect(() => {   fetch('/graph-data.json')     .then(response => response.json())     .then(data => setGraphData(data)); }, []);`

	- **Src Directory**:    
```import graphData from './data/graph-data.json';
useEffect(() => {
  // You can use graphData directly since it's imported
  setGraphData(graphData);
}, []);