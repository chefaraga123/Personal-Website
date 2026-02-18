- a fundamental concept related to modular exponentiation and the computations of powers in the group 
- **Elements:**
	- [[Cyclic Group]]
	- Discrete Logarithms
	- Computational Difficulty
	
- **Discrete Logarithms**: 
	- Given a cyclic group $G$ with a generator $g$, the discrete logarithm of an element $h$ with respect to the base $g$ denoted $log_g(h)$ 
	- *if the generator is 2, and you want to find the discrete logarithm of 8, it's like asking: "What power of 2 equals 8?" The answer is 3 because 2^3 = 8.*

- **Computational Difficulty**:  
	- As the size of the group (or the modulus in [[modular arithmetic]]) grows, the number of possible elements in the group also increases exponentially
	- There is no known algorithm that can solve discrete logarithm problems efficiently for all cases. 