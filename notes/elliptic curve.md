- Elliptic Curve Cryptography (ECC) is a form of public-key cryptography based on the algebraic structure of elliptic curves over **finite fields**
	- A finite field, aka a Galois field is a mathematical system composed of a finite number of elements where you can perform addition/subtraction/multiplication/division and still get results within the set 
	- [[Types of finite fields]] 
	
- It offers a similar level of security to algorithms like RSA but it requires smaller key sizes, resulting in faster computations 
- **An elliptic curve is represented by an equation of the form**
	- $y^2=x^3+ax+b$
	- The set of solutions to this equations, along with a point at infinity forms a group under a defined addition operation 
	
- ECC can be used to create secure keys for encrypting data, key generation
	- **Choose a curve** and a **public base point** G on the curve
		- To choose a curve means to select specific parameters that define the elliptic curve and a point on that curve 
		- a public base point means a specific point on the chosen elliptic curve that is used as the starting point for ECC operation. It is called a base as it serves as the base for generating public keys through scalar multiplication
	- Select a private key, which is a random number d
	- Calculate the public key Q by computing d X G