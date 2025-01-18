- Tag: **[Cryptographic Proofs](../notes/Cryptographic_Proofs)**
- Both the sender and the receiver of the cryptographic message need to know the secrete key, and must secure their communications using this shared secrete value 

An SKE scheme consists of the following algorithms:
- **KeyGen**: A randomised algorithm that ouputs a key *k* which is part of set $K$
	- we call $K$ the key space 
- **Enc**: a (possibly randomised) algorithm that takes a key and plaintext as input and outputs a ciphertext c 
	- We call $M$ the message space
	- We call $C$ the ciphertext space of the scheme 
- **Dec**: a deterministic algorithm that takes a key and a ciphertext as input and outputs a plaintext m. 
Sometimes we refer to the scheme (the collection of the three algorithms) by a single variable.

- Decrypting a ciphertext with the same key that was used for encryption must always result in the original plain text. 

- **Example: IND-CPA Security**
	- as per our **[three main security properties](../notes/three_main_security_properties)**, by confidentiality we mean an attacker cannot read our messages. This is quite a capacious idea, is it considered confidential to be able to read only a subset of the message. 
	- **a tighter definition of confidentiality is that:** 
		- the ciphertext, C, should give the attacker no additional information about the message, M. And seeing C should not provide the attacker any new information 
	- 