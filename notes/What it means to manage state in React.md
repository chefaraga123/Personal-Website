- Managing state in React refers to the process of tracking and updating the data that determines the behaviour & rendering of components in a React application
- State may be anything that changes over time in response to actions or events: such as user inputs, API response, or interactions within the application
- **Key concepts of React State Management:**
	- **Local (Component) State**: 
		- Managed within a single component using the *useState* hook in functional components, or *this.state* in class components 
			- [[Hooks in software development]] 
		- Affects only the component it is defined in & potentially its child components if passed down as props
	- **Lifting State Up** 
		- when multiple components need to access or modify the same state, that state is often "lifted up" to their closest common ancestor & then passed down to the components that need it via props 
	- **Global State**
		- When the application grows, managing state across many components at different levels in the hierarchy can become complex. Global state management solutions like [[Redux]], [[Context API]], or MobX help manage state
		
- **How State Management Works in React**
	- **Initialisation**: State is initialised with a default value when a component mounts 
		- **What does it mean for a component to mount?**
	- **Reading state**: components read their own state & render UI based on the current state values 
	- **Updating State**: State is updated in response to events (e.g. user input). In functional components, hooks like `useState` or `useReducer` are used
	- **Reactivity**: React automatically re-renders the component (and its children) whenever the state changes 
		- **what are children of components?**
	
- **Example of using state**
	- `const [count, setCount] = useState(0);`
		- the initial state is set to be 0 

- ![[Pasted image 20240127152101.png]]
- 
