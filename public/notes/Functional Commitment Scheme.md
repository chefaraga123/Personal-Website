- **tag**: [[Zero Knowledge Proofs]], [[Cryptography]]

- A cryptographic object: its security depends on certain cryptographic assumptions 

- A commitment scheme is composed of two algorithms:
	- $commit(m, r)$ -> $com$
		- **input**: a message m, and some randomness r
		- **output**: a commitment 
	- $verify(m, com, r)$ -> $accept$ or $reject$
	
- A commitment scheme satisfies two properties:
	- **Binding**: Once committed, you are bound to the committed message. 
	- **Hiding**: commitment scheme reveals nothing about committed data 
	
**Standard Construction**
- Using a hash function
- hash message with salt 
- For a suitable hash function the commitment scheme satisfies our two properties 

**Committing to a function** 
- **Committer (Prover)**
	- Prover commits to
	
- **Verifier** 

**Committing to a function**: **syntax** 


There are multiple [[types of important functional commitments]]