- Tag: **[Games](../notes/Games)**
- One of the first **[Fully On-Chain Games](../notes/Fully_On-Chain_Games)**
- The core part of the game uses **[Zero Knowledge Proofs](../notes/Zero_Knowledge_Proofs)** technology.
- The game founder Brian Gu, created **[0xParc](../notes/0xParc)**, and and **[Lattice](../notes/Lattice)**

---------
### Introduction 
- Dark Forest is one of the first blockchain game implementations of **[ZK-SNARK](../notes/ZK-SNARK)**s, this **enables a system of incomplete information**, or an on-chain "Fog of war" 
- That is players, can exist in a shared world and make moves that are verified on a blockchain, crucially: *players can commit a verifiably legitimate move to a public chain without revealing what the move specifically was*
- There are alternative ways of handling hidden information on-chain, such as through a **[Functional Commitment Scheme](../notes/Functional_Commitment_Scheme)** - however this is the basis of **[Interactive Proofs](../notes/Interactive_Proofs)**. However, as it is an *interactive* proof its not necessarily ideal for gaming for x? reason.

### Game Mechanics 
- Dark forest runs entirely in-browser using a thin **[client](../notes/client)** with all game calculations being done by on-chain **[Smart Contract](../notes/Smart_Contract)**s 
- When a player starts a game they can only see the area right around them, in order to expand through the universe they need to explore the undiscovered space. 
- Exploring a pair of coordinates requires
	- Computing a hash of the location coordinates = Location Hash
	- The Location Hash is then compared against the hashed values of the universe's contents. 
	- If there is a match the location can be moved to 
- This is similar to proof of work 
- The world generation itself is crowd-sourced on-demand, this works due to the mathematical properties of **[Perlin noise](../notes/Perlin_noise)**. The use of Perlin Noise enables the creation of a pattern of infinite size given an initialisation seed, the game can calculate the properties of any arbitrary coordinate. 
- This means that the on-chain smart contract doesn't need to expend a huge computation on game/universe loading. 
- Uniquely-enabled aspects
	- Smart Contracts playing a role in the game 
	- RMT Marketplace 

### What ZK means for Blockchain Gaming 
- Collectible card games as well as inventories in MMORPGs are interesting applications of **[ZK-SNARK](../notes/ZK-SNARK)**s
- Poker would not be playable on-chain 
- Verifying proofs is computationally trivial, of complexity O(1), but generating proofs is computationally expensive. **Smart Contracts can only verify, they cannot create proofs.** 