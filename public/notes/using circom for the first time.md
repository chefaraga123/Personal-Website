- **Circom is built on node.js**
- **Get relevant packages:**
	- [[installing circom]]
	- `npm install snarkjs`
	
- **Create a circuit** 
	- e.g. [[Circom Sudoku Example]]
	
- **Compiling a circuit** 
	- `circom <filename> --r1cs --wasm -sym -o .`
	- This command generates several files including the R1CS constraint system for the circuit `<filename>.r1cs`, the WASM file for witness generation `<filename>.wasm` and a symbols file useful for debugging `<filename>.sym`
	
- **Generate a witness**
	- This involves **creating an input file** (in JSON format) and using the WASM file generated earlier. Create a file name `input.json` with your inputs 
	- then generate the witness by running 
	- `snarkjs wtns calculate <filename>.wasm input.json witness.wtns`
	
- **Setup & generate the zk-SNARK proof**
	- First: generate the proving and verification keys 
	`snarkjs groth16 setup <filename>.r1cs pot12_final.ptau <filename>_0000.zkey`

	- Then: generate the zk-SNARK proof and the verification key
`snarkjs groth16 prove <filename>_0000.zkey witness.wtns proof.json verification_key.json`	

- **Verify the proof** 
	- Verify the proof using the verification key 
	- ``````snarkjs groth16 verify verification_key.json public.json proof.json
