- HTML5 has a native drag-&-drop API 
- **Steps**
	- **Set the draggable element**
		- HTML elements must have the `draggable` attribute set to true 
	- **Drag events**
		- There are several events associated with the drag & drop process:
			- `dragstart`
			- `drag`
			- `dragend`
	- **Drop events**
		- `dra`
	- **Data transfer**


------------


- To implement drag & drop functionality in React using Typescript you will need to define **event handlers** for drag events and apply them to the appropriate elements in your .jsx
	- what are event handlers?

- ```  // Drag start handler

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, player: Player) => {

    e.dataTransfer.setData("text/plain", player.id);

  };

  

  // Drag over handler to prevent default behavior

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault(); // Necessary to allow dropping

  };

  

  // Drop handler for the pitch

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {

    e.preventDefault();

    const playerId = e.dataTransfer.getData("text/plain");

    // Logic to update the player's position state

    // ...

  };
```