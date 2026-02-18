- tag: [[topology]]

### Introduction
- The definition of a topological space must be general enough to allow a wide range of different structures as spaces. 
- We would like to consider a finite discrete set of points as a space, or equally, a whole uncountable continuum of points such as the real line. 
- Crucially, the definition of a space, must contain enough information, so that we can **define the notion of continuity for functions between spaces**. 


### Neighbourhoods
- The notion of each point in a space having a collection of neighbourhoods, the neighbourhoods in turn leading to a good definition of a continuous functions is the crucial one. In defining neighbourhoods in a Euclidean space we used very strongly the Euclidean distance between points. In constructing an abstract space we would like to retain the concept of neighbourhoods whilst ridding ourselves of the any dependence on a **distance function** (topological equivalence doesn't preserve distance)

- Let $f$ be a function between two [[Euclidean Space]]s, say $f : E^m -> E^n$.
- The classical definition of continuity for $f$ goes as follows:
	$f$ is continuous at $x \in E^m$ , if given $\epsilon > 0$ there exists $\delta > 0$ s.t. $||f(y)-f(x)<\epsilon$ whenever $||y-x||<\delta$.
	
	The function is continuous if it satisfies this condition for each $x\in E^m$ 

How to interpret this in space?

### Axioms underpinning the concept of topological space 
- $x$ lies in each of its neighbourhoods 
![[Pasted image 20240226130034.png]]
- The intersection of two neighbourhoods of $x$ is itself a neighbourhood of $x$
![[Pasted image 20240226130137.png]]
- If N is a neighbourhood of $x$ and if U is a subset of X which contains N, then U is a neighbourhood of $x$
- ![[Pasted image 20240226130237.png]]
- If N is a neighbourhood of $x$ and if $N'$ denotes the set
		**{$z \in N|N$ is a neighbourhood of $z$}**
- Then $N'$ is a neighbourhood of $x$. (The set $N'$ is called the interior of N )

- The assignment of a collection of neighbourhoods satisfying all the above axioms to each point $x \in X$ is called a topology on the set $X$. 

### Defining a surface in topological space 
- **Definition: A surface is a topological space in which each point has a neighbourhood homeomorphic to the plane, and for which any two distinct points possess disjoint neighbourhoods.**
- The requirement that each point of the space should have a neighbourhood that is [[Homeomorphic]] to the plane fits the intuitive idea of what a surface should be. 
- Considering the Earth, topologically it is a essentially a sphere (or oblate spheroid!) yet locally it looks distinctly planar. 
- We ask that some neighbourhood of each point of our space to be [[Homeomorphic]] to the plane. We have to then treat this neighbourhood as a topological space in its own right. The neighbourhood is a subset of the given space and we can therefore supply it with subspace [[topology]]


### A classification theorem
- We shall restrict ourselves to a nice class of surfaces, and consider only those **without boundaries**, and which are in some sense closed up on themselves (i.e. closed up on themselves), in addition we ask that our surfaces be connected i.e. **consists of a single piece**. 
- The **sphere, torus and klein bottle are exemplary of this class of nice surfaces**, whilst the **cylinder and the mobius strip are ruled out** due to having edges. 
- **We can construct examples of closed surfaces as follows:**
	- Take the ordinary sphere
	- Remove two disjoint discs & then add on a cylinder by identifying its two boundary circles with the boundaries of the wholes in the sphere 
	- this is known as "adding a handle"
	- Through repetition we can create a sphere with an arbitrary number of handles 
- The others don't admit representation in 3D [[Euclidean Space]] 