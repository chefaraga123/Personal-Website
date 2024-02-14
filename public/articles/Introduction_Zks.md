# An Introduction to Zero Knowledge  
My article is laid out in a few  sections 
- Introduction
- Interactive Proofs 
- Non-Interactive Proofs 
- NARK: Non-Interactive Arguments of Knowledge 
- SNARK: Succint Non-Interactive Arguments of Knowledge 

## Introduction 
The essence of zero knowledge is being able to prove possession of knowledge, or properties of the knowledge, without revealing the knowledge itself. 

A typical, applied examples of a zero knowledge arrangement is being able to prove that you're over a certain age without revealing your actual age. 

The typical setup is of a **prover** and a **verifier**.
- **Provers generate proofs** 
- **Verifiers verify proofs** 

What this specifically means: the prover is an entity who is interested demonstrating the validity of a statement, and a verifier is an entity which can verify whether the statement underlying the proof is true or false. 

There are two types of zero knowledge proofs: interactive proofs and non-interactive proofs. In the context of blockchain we are typically most interested in non-interactive proofs, the most discussed type being **SNARKs**, which I'll come onto later.

## Interactive Proofs 
**What is meant by interaction?** By interaction we mean that rather than passively reading a proof the verifier engages in a non-trivial interaction with the prover. 
An interesting aspect of interactive proofs is the probabilistic component, this will become clear in an example. 
#### Example of a Zero-Knowledge Interactive Proof: Proving colours to a blind verifier 
#### The Setup 
- **The objective of the Prover**: 
- There is a sheet of paper which may be of a single colour, or have a different colour on either side.
- The prover can tell the difference between these two colours
- The verifier is colour-blind and cannot perceive a difference between the two colours, they know that they are colour blind and could be convinced that the paper has two colours on it.
- At any given point there is a single side of the paper facing up. 
- The verifier wants to find out if there are 2 colours on the page  
- The verifier asks the prover to prove that there are 2 colours on the page | if the prover can perceive changes in the state of the page then it proves there are different states


#### Interactive Proof Algorithm:
1) The verifier asks the prover what the current colour is
2) The prover responds
3) The verifier flips a coin as to whether to flip the piece of paper 
4) The verifier asks the prover what the new colour is
5) The prover responds, if the paper was flipped and the prover doesn't change their answer then there is only a single colour, if the prover is right there is a 50% chance now that the prover is telling the truth and that hence there are two colours 
6) steps 1-5 are repeated until the verifier is convinced 


#### Why is this zero-knowledge?
- The prover possesses knowlege that the verifier lacks due their being colour blind. 
- The prover demonstrates the existence of two colours without revealing the specific colours themselves.
- The verifier gains confidence in the existence of 2 colours without learning any information about what those colours actually are

#### Example of a Non-Zero-Knowledge Interactive Proof: The Graph Non-Isomorphism Problem

#### The Setup
- **The objective of the Prover**: Given two graphs *G1* & *G2*, the prover wants to prove to the verifier that *G1* & *G2* are not **[isormorphic](/Personal-Website/notes/Isomorphism%20between%20Graphs.md)**. 


#### Interactive Proof Algorithm:
1) The prover generates a random **[permutation](/Personal-Website/notes/Permutation.md)** of the vertices of G1 
2) The prover sebds this random permutation to the verifier 
3) The verifier randomly chooses a vertex from G1 and requests its image under pi
4) the prover sends pi(v) to the verifier 
5) the verifier checks if the images of the neightbours of v under pi match the neighbours of pi(v) in G2
6) steps 1-5 are repeated until the verifier is convinced 

#### Why is this not zero-knowledge?
- In the process of demonstrating non-isomorphism, specific information about the structure of the graphs is revealed to the verifier. 
- Recap: ZK Proofs are designed to convince a verifier of a statement's truthfulness without disclosing any informaiton beyond the validity of a statement. 

## Non-Interactive Proofs 
**What is meant by Non-interaction?** By non-interaction we mean that a prover can provide a proof that can be verified by the verifier without any further interaction or communication between the two parties. The proof is self-contained and can be verified independently by the verifier. Non-interactive proofs are desirable when there are constraints on communication bandwidth. 

### Example: Schnorr Protocol, A non-interactive proof of knowledge for a discrete logarithm
**Context:** 
- A non-interactive proof of knowledge for a discrete logarithm
- We have a cyclic group G of prime order q with a generator g and h is some element in G that we want tor prove knowledge of its discrete logarithm. I.e. to prove we know the x for which h = g^x
- **The prover**: chooses a random r from (the set of integers modulo q)
- Computes R = g^r
- Computes a **[challenge](/Personal-Website/notes/Cryptographic%20Challenge.md)** e based on R and h 
- Computes s=r+ex mod q
- **The verifier**: recievers R and s
- computes the chalennge e based on R and h 
- Verifies that R = g^s g^-e


## What are SNARKs?
### NARK: Non-Interactive Argument of Knowledge
- A cryptographic protcol that allows a **prover** to convince a **verifier** that they possess certan knolwedge or information without any further interaction beyond an initial exchange. 
- NARKs rely on certain mathematical properties that allow for the creation of proofs that reveal minimal information about the prover's knowledge beyond the validity of the statement being proved 

### SNARK: Succint Non-Interactive Argument of Knowledge
- SNARKs are differentiated from NARKs according to this idea of *succint*ness.
- Recapping, a NARK is a cryptographic protocol where provers generate proofs and verifiers verify proofs. A key characteristic is thus how efficiently are these proofs generated and how quickly are they verified. 
- A SNARK is thus a NARK for which the time taken to generate a proof is short, and the time taken to verify the proof is short. 
- In computer science complexity is measured by **Big O notation**,  

### The Key Properties of SNARKs
- Zero-Knowledge
- Succintness 
- Soundness 

## ZK-SNARK Construction 
### High-Level Steps:
* Writing and Compiling the circuit 
* Generating the proving and verification keys 
* Generate the zk-SNARK proof

* snarkjs provides support for Groth16. Using snarkjs to generate the proving and verification keys required for the Growth16 zk-SNARK construction. 

*According to chatGPT*

* Circuit Compilation: 
* Setup phase: perform a one-time setup phase, involves generating the public parameters (Proving Key, Verification Key, Public Parameters) necessary for the zk-SNARK protocol.  
* Proof Generation: To generate a zk-SNARK proof for a specific computation/statement the prover needs a "witness". The witness ia set of inputs that satisfy the conditions which specify the computation as being proven. It represents he private knowledge that the prover possesses and wishes to prove without revealing. 
* Constructing the Proof: The prover uses a zk-SNARK construction such as Groth16 to construct a proof. The proof demonstrates that the prover knows a witness that satisfies the constraints defined by the circuit, wihtout revealing any information about the witness itself. 

* A zk-SNARK consists of three algorithms: G, P, V, defined as follows: 
* **G = Key Generator**
* **P = Prover**
* **V = Verifier**

The **key generator** takes a secret parameter and a  program and generates two publicly available kets a proving ket and a verification key. These keys are public parameters that only need to be generated once for a given program C.
The **prover** takes as input the proving key pk, a public input x, and a private witness w. The algorithm generates a proof = P(pk, x, w) that the prover knows a witness w and that the witness satisfies the program. 
The Verifier computes V(vk, x, proof) which returns true if the proof is valid, and false if invalid. The function returns true if the prover knows a witness satisfying `C(x,w) == true`


### Writing and Compiling the Circuit 
#### Abstraction Level 1: Arithmetic Circuits 
* Arithmetic circuits (AC) are a way of representing complex computations in terms of simple components. The complexity is broken down into simple components of addition, subtraction, 
* multiplication and division operations. The AC repsents the problem or computation you want to prove you've solved correctly 
* The AC captures the entire computation process 
* However a useful AC may have 20,000 gates, this wouldn't be very intuitive, we need a level of abstraction on top of the AC which we can deal with. 

#### Abstraction Level 2: Rank 1 Constraint Systems (R1CS)
* R1CS is a framework commonly used in the construction of zk-SNARKs.
* This is an abstraction on top of an Arithmetic Circuit
* The underlying arithmetic circuit may be very complex, as it is a network of interconnected gates performing arithmetic operations such as addition & subtraction. 
* R1CS simplifies this representation by focusing on the constraints that the inputs and outputs of the computation must satisfy rather than the specific details of the circuit topology 
* Computations are expressed as a set of constraints that the inputs and ouputs of the computation must satsify. These constraints are typically represented as linear equations over finite fields. 
* Each constraint is a linear equation that involves a combination of input/intermediate/output variables. 
* Allows us to represent computations in a concise and structure, however we would rather than deal with the logic - we need another level of abstraction!  

#### Abstraction Level 3 Hardware Description Languages, Circom
* We probably don't want to write the R1CS directly, we want to deal with the logic of the computation 
* Lets say we want to write a circuit that verifies the sum of two numbers, the example Circom code would be: 
```text
template Adder() {
    signal input a; // First private input
    signal input b; // Second private input
    signal input c; // Public input (expected sum)
    
    signal output out; // Output signal to indicate if the sum is correct

    // Define the computation
    signal sum;
    sum <== a + b;

    // Check if the computed sum matches the public input
    out <== sum === c;
}

component main = Adder();
```
* The Circom program is translated into a Rank-1 Constraint System 
* The circuit has two private inputs: a & b
* C is the public input 
* The circuit computes *sum = a + b*, using the syntax `sum <== a + b;`
* The circuit outputs 1 if the sum of a & b is equal to the expected sum `signal output out;`



### Putting it all together: How our Circom compiles -> R1CS -> AC
* The Circom compiler translates the high-level, human-readable, Circom program into R1CS
* The R1CS serves as an intermediate step between our high-level description of the computation and the Arithmetic circuit. It provides a way to express computation in terms of mathematical constraints *I really struggle to understand this idea*
* The Arithmetic Circuit is what is actually used to generate and verify Zero-Knowledge Proofs 
* The AC represents the computation/algorithm you want to prove knowledge of 
* A way to ground the the process of creating the ZK circuit, is at the micro-level to show how circom translates into Rank-1 Constraint Systems which thus resolves into an Arithmetic circuit. 
* **Translating our Circom into R1CS** 
    * **Addition Constraint**: the operation `sum <== a + b;` translates to a constraint that ensures the sum of `a` and `b` = `sum`, in R1CS this can be represented as (a)*(1) + (b)*(1)-(sum)*(1)=0
    * **Equality Constraint**: The check `out <== sum === c;` is a little more complex, **R1CS fundamentally represents equations - not boolean checks**. 


## Trusted Setup Phase
* Cryptographic Parameter Generation
* The trusted setup generates public parametsr that are used by both the prover and the verifier. These parameters depend on a secret that must not be disclosed - revealing the secret could compromise the security of the entire system
* These public parametsers enable the prove to construct ZK-PRoofs that demonstrate that they have correctly performed a computation (as per the Arithmetic Circuit) without revealing the computation's inputs or outputs. 
* Post-generation the parameters must be securely disposed of 
**Multi-Party Computation Ceremony**

## Proof Generation
### Generating a Witness
* A witness is a set of inputs/data that satisfies the conditions specified by the computation being proven. A witness is a set of inputs that when fed into a circuit results in an output that satisfies certain conditions. The witness is associated with the specific instance of the computation/statement being proven 
* In the context of ZK-Proofs, the witness is considered private knowledge

## Proof Construction
* The proof is created by executing the computation within the constraints of the AC and using the cryptographic parameters generated during the trusted setup phase to transform this execution into a succint non-interactive proof 

**Script I ran to generate the zk-SNARK proof** 
1) **Compile the circuit:** `circom <filename> --r1cs --wasm -sym -o .`
2) **Generate a witness** `snarkjs wtns calculate <filename>.wasm input.json witness.wtns`
3) **Generate the proving and verification keys** `snarkjs groth16 setup <filename>.r1cs pot12_final.ptau <filename>_0000.zkey`
4) **Generate the zk-SNARK proof and the verification key** `snarkjs groth16 prove <filename>_0000.zkey witness.wtns proof.json verification_key.json`	



### Proof Verification
* Verifying Proofs
* Efficiency 


### Deployment and Integration
TBD -> Another Article