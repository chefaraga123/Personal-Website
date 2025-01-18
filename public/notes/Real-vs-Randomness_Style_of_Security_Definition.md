- **Intuitively**: *An encryption scheme is good if its ciphertexts are entirely uninteresting to an attacker* 

- Security definitions always considers the attacker’s view of the system - what is the interface that the message sender & receiver expose to the attacker by their use of cryptography - does the particular interface benefit the attacker?

- Hence extending the intuition 

- **Intuitively**: *An encryption scheme is good if its ciphertexts are entirely uninteresting to an attacker , when each key is secret and used to encrypt only one plaintext even when the attacker chooses the plaintexts*.