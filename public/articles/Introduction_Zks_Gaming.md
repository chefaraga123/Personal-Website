# An Introduction to Zero Knowledge in Gaming 
My article is laid out in three sections 
1) **What ZKs are**: specifically laying out what is meant by zero-knowledge
    - Introduction
    - Interactive Proofs 
    - Non-Interactive Proofs 
        - NARK: Non-Interactive Arguments of Knowledge 
        - SNARK: Succint Non-Interactive Arguments of Knowledge 
        - ZK-SNARK: a Zero-Knowledge SNARK
2) **ZKs for games**: functionally how ZKs can be useful in gaming
3) **An implemented example**: how to implement and understand a simple ZK game End-2-End  

I also provide Github repository if you're interested in implementations of some of what's discussed:  [ZK Gaming Introduction Repository](https://github.com/chefaraga123/ZK-Gaming-Introduction)

So...

## 1. What is ZK
### Introduction 
The essence of zero knowledge is being able to prove possession of knowledge, or properties of the knowledge, without revealing the knowledge itself. 

A typical, applied examples of a zero knowledge arrangement is being able to prove that you're over a certain age without revealing your actual age. 


The typical setup is of a **prover** and a **verifier**.
- **Provers generate proofs** 
- **Verifiers verify proofs** 

What this specifically means: the prover is an entity who is interested demonstrating the validity of a statement, and a verifier is an entity which can verify whether the statement underlying the proof is true or false. 

There are two types of zero knowledge proofs: interactive proofs and non-interactive proofs. In the context of blockchain we are typically most interested in non-interactive proofs, the most discussed type being **SNARKs**, which I'll come onto later.

### Interactive Zero-Knowledge Proofs 
**What is meant by interaction?** By interaction we mean that rather than passively reading a proof the verifier engages in a non-trivial interaction with the prover. 
An interesting aspect of interactive proofs is the probabilistic component, this will become clear in an example. 
#### High-Level Example: Proving colours to a blind verifier 
**The Setup** 
- **The objective of the Prover**: 
- There is a sheet of paper which may be of a single colour, or have a different colour on either side.
- The prover can tell the difference between these two colours
- The verifier is colour-blind and cannot perceive a difference between the two colours, they know that they are colour blind and could be convinced that the paper has two colours on it.
- At any given point there is a single side of the paper facing up. 
- The verifier wants to find out if there are 2 colours on the page  
- The verifier asks the prover to prove that there are 2 colours on the page | if the prover can perceive changes in the state of the page then it proves there are different states


**Interactive Proof Algorithm:**
1) The verifier asks the prover what the current colour is
2) The prover responds
3) The verifier flips a coin as to whether to flip the piece of paper 
4) The verifier asks the prover what the new colour is
5) The prover responds, if the paper was flipped and the prover doesn't change their answer then there is only a single colour, if the prover is right there is a 50% chance now that the prover is telling the truth and that hence there are two colours 
6) The verifier flips the coin again and flips or doesn't depending on the result 
7) The verifier asks the prover what the new colour is
8) The verifier responds, and if they're answers aligns with the actions of the verifier there is now a 100% - 50%^2 = 75% chance 

This process of interaction, of the verifier randomly changing the state of the paper and the prover responding whether the state of the paper has changed or not continues. For everytime that the prover is right the verifier builds confidence until the verifier effectively converges on complete confidence in the prover

#### Lower-Level Example: the Graph Non-Isomorphism Problem
**The Setup**
- **The objective of the Prover**: Given two graphs *G1* & *G2*, the prover wants to prove to the verifier that *G1* & *G2* are not **[isormorphic](/Personal-Website/notes/Isomorphism%20between%20Graphs.md)**. 


**Interactive Proof Algorithm:**
1) The prover generates a random **[permutation](/Personal-Website/notes/Permutation.md)** of the vertices of G1 
2) The prover sebds this random permutation to the verifier 
3) The verifier randomly chooses a vertex from G1 and requests its image under pi
4) the prover sends pi(v) to the verifier 
5) the verifier checks if the images of the neightbours of v under pi match the neighbours of pi(v) in G2
6) steps 1-5 are repeated until the verifier is convinced 


### Non-Interactive Zero-Knowledge Proofs 
**What is meant by Non-interaction?** By non-interaction we mean that 
#### Example:  
**The setup** 

-----

## 2. ZKs for games


----- 

## 3. Implementing your first ZK-Dapp

