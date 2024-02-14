- tags: [[Zero Knowledge Proofs]]
- To recap: a ZKP system is a way for a prover to convince a verifier that some statement or predicate is true without revealing information about why it is true 
- Prover Knows:
	- A predicate: $\sigma$ 
	- A public input: $x$
	- A private input: $w$
- Verifier Knows: 
	- A predicate: $\sigma$ 
	- A public input: $x$
- The ZKP allows the prover to show the predicate is satisfied in a way that hides the private input W
- To program ZKPs we use [[arithmetic circuits]], these are similar to [[boolean circuits]]
- We wish to express field equations as a DAGS
	- ![[Pasted image 20240204114255.png]]
	- ![[Pasted image 20240204114315.png]]
- a format that ZKP systems understand

- Writing an AC as a [[Rank 1 Constraint Systems]]

Turning a pictoral AC into a R1CS
![[Pasted image 20240204115643.png]]

- Step 1: for each intermediate variable introduce a new witness
- Step 2: for each gate there is a constraint 
	- $w_0$ x $w_1$ = $w_2$
	- $w_3$ = $w_2$ + $x_0$
	- $w_1$ x $x_0$ = $w_4$
	- $w_3$ = $w_4$
- High-level specification for $\sigma$ -> [[Rank 1 Constraint Systems]]
- how to take a high-level idea and put it into a R1CS?? Think of the R1CS as Assembly 
- ![[Pasted image 20240204115952.png]]
- Start with **high-level code -> compiler/library -> R1CS -> ZKP System**
- Example 
	- [[Zcash]] Circuit, description of circuit is a predicate 
	- the circuit is written using a library called Bellman 
- [[A Hardware Description Language for R1CS]]
- 