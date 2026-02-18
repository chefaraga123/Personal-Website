- **Polynomial commitments: commit to a univariate** 
	- $f(X) \text{ in } \mathbb{F}_p^{\leq(d)}[X]$
	
- **Multilinear commitments: commit to a multilinear** 
	- $f \text{ in } \mathbb{F}_p^{(\leq 1)}[X_1, \ldots, X_k]$ 
		- In each variable ***degree of polynomial is at most 1*** 
	
- Vector commitments (e.g. Merkle Trees)
	- We commit to a vector with d elements 
$$
\text{Commit to } \mathbf{\tilde{u}} = (u_1, \ldots, u_d) \in \mathbb{F}_{p}^d.
$$

$$
\text{Open cells: } f_{\mathbf{\tilde{u}}}(i) = u_i
$$
