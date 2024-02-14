- Tag: [[Cryptography]], aka [[Asymmetric Key Encryption]]
- Public Key Cryptography is a crypto-system that relies on a pair of keys:
	- **a public key**: Widely distributed, typically used for encryption or verifying digital signatures 
	- **a private key**: Known only to the owner, used to decrypt messages encrypted with the corresponding public key or for generating [[Digital Signatures]]
- These keys are mathematically related but are kept secret from each other 
- The main functionalities of public key cryptography include:

- **Encryption**: A sender can encrypt a message using the recipient's public key. Once encrypted, only the recipient possessing the corresponding private key can decrypt and read the message.
    
- **Digital Signatures**: A sender can sign a message using their private key. The recipient can then verify the signature using the sender's public key, ensuring that the message was indeed sent by the claimed sender and that it has not been altered in transit.
    

Public key cryptography is widely used in various applications, including secure communication over the internet (such as HTTPS), secure email communication (PGP/GPG), digital signatures for verifying software authenticity, and securing financial transactions (e.g., with digital signatures in cryptocurrencies). It provides a powerful tool for ensuring confidentiality, authenticity, and integrity in communication and transactions over insecure channels.