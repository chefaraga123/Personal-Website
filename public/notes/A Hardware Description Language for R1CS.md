- tag: [[Rank 1 Constraint Systems]]

- **[[Hardware Description Languages are very different to Programming Languages]]**
- HDLs are used to **design digital circuits** e.g. computer processor, HDLs for digital circuits
	- Verilog
	- System Verilog
	- VHDL
	- Chisel 
- **Circom: an HDL for R1CS**
	- **Wires**: R1CS variables
	- **Gates**: R1CS constraints
	- A circom circuit does 2 things
		- Sets variable values 
		- Creates R1CS constraints 
		
## **Circom Example:** 
- multiplying 2 field elements
- to create a circuit in circom is using the `template` keyword
- A `signal` is a wire 
- `<--` sets signal values 
- `===` is the operator that creates Rank 1 constraints
	- one side: linear
	- other side: quadratic 
- `<==` both sets the signal value and creates a Rank 1 Constraint 
- **Example:** 
- `template Multiply () {
	`signal input x;
	`signal input y;`
    `signal output z;`
	 `z <-- x * y;`
	 `z === x * y`
	`}`
	 ` component main {public[x]} = Multiply();`

-  **Circom: Metaprogramming language** 
	- **Template arguments: fixed at compile time** 
	- Signal arrays
	- Variables
		- Mutable
		- Not signals
		- Evaluated at compile time 
	- Loops
	- if statements 
	- array accesses
	- `template RepeatedSquaring(n) {
	- `signal input x;
	- ```signal output y;
	- `signal xs[n+1];
	- `for (var i = 0; i < n; i++) {
			`xs[i+1] <== xs[i] * xs[i]`
	- `}
	- ``y <== xs[n];
	- `}
	- `component main {public[x]} = RepeatedSquaring(1000);`


-  **Circom: Witness Computation and sub-circuits** 
	- creating a template that ensures its input is non-zero
		- `template NonZero() {
		    ` signal input in;
			   `signal inverse;`
			   `inverse <-- 1 / in;` NOT R1CS
			   `1 === in ** signal;` //is R1CS    
	- Components hold sub-circuits, access inputs/outputs with dot-notation. 
		- ![[Pasted image 20240204121949.png]]

- [[Circom Sudoku Example]]
- [[using circom for the first time]]