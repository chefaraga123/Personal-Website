# An Introduction to Zero Knowledge in Gaming 
My article is laid out in three sections 
- **What ZKs are**: specifically laying out what is meant by zero-knowledge
    - Introduction
    - Interactive Proofs 
    - Non-Interactive Proofs 
        - NARK: Non-Interactive Arguments of Knowledge 
        - SNARK: Succint Non-Interactive Arguments of Knowledge 
        - ZK-SNARK: a Zero-Knowledge SNARK
- **ZKs for games**: functionally how ZKs can be useful in gaming
- **An implemented example**: how to implement and understand a simple ZK game End-2-End  

So...

## What is ZK
### Introduction 
The essence of zero knowledge is being able to prove possession of knowledge without revealing the knowledge itself. 

A typical, applied examples of a zero knowledge arrangement is being able to prove that you're over a certain age without revealing your actual age. 

Zero-knowledge is an umbrella term to a type of cryptography where a statement about some knowledge can be verified as either true or false without the verifier knowing what the thing itself is.

The typical setup is of a **prover** and a **verifier**.
- **Provers generate proofs** 
- **Verifiers verify proofs** 

What this specifically means, the prover is an entity who is interested demonstrating the validity of a statement, and a verifier is an entity which can verify whether the statement underlying the proof is true or false. 

There are two types of zero knowledge proofs: interactive proofs and non-interactive proofs. In the context of blockchain we are typically most interested in non-interactive proofs, the most discussed type being **SNARKs**, which I'll come onto later.

### Interactive Zero-Knowledge Proofs 
**What is meant by interaction?** By interaction we mean that rather than passively reading a proof the verifier engages in a non-trivial interaction with the prover. 
An interesting aspect of interactive proofs is the probabilistic component, this will become clear in an example. 
#### Proving colours to a blind verifier 
The setup of this is that there is a sheet of paper with a different colour on either side.
- The prover can tell the difference between these two colours
- The verifier is colour-blind and cannot perceive a difference between the two colours, they know that they are colour blind and could be convinced that the paper has two colours on it 
Process:
1) 

### Non-Interactive Zero-Knowledge Proofs 


## ZKs for games

## Implementing your first ZK-Dapp


