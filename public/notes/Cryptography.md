- Tag: [[Cryptographic Proofs]]

- The essential problem of cryptography is of ensuring the security of communications across an insecure medium. 
- The most basic unit of any cryptographic system is the key, the key is a secret value that helps us secure messages.
- Many cryptographic algorithms and functions require a key as input to lock/unlock some secret

- There are two main key models in modern cryptography
	- [[Symmetric-Key Encryption]] and 
	- [[Asymmetric Key Encryption]]
	
- In cryptography there are [[three main security properties]], there are different [[types of security definitions]]
- 

- [[Kerchoffs Principle]] 
- ![[Pasted image 20240203220728.png]]

- **What are the different types of threat models?**
	- Ciphertext only attack 
	- Plaintext attack
	- Replay attack
	- **[[Chosen-plaintext attack]]** 
	- Chosen-ciphertext attack
	- Chosen-plaintext/cyphertext attack 
	

- **Encryption basics:**
	- A has a message, m, they want to send privately to B 
		- *We call m the plaintext*
	- we assume that A can transform m, into a value c,
		- *We call c the ciphertext* 
		- *We call the transformation an Encryption*
	- When B receives c, he runs a decryption algorithm to recover m. S




- [[Pseudorandom functions]]