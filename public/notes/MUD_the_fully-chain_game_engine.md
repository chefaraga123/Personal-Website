- A framework for building complex ethereum applications 
- MUD provides conventions for organising data and logic and abstracts away low-level complexity so that developers can focus on the functionality of the application. 
- The latest version of MUD has five components:
	- **[Store](../notes/Store)**: an on-chain **[database](../notes/database)**
	- World
	- Tools
	- Client-side data storage 
	- MODE: a **[Postgres database](../notes/Postgres_database)** that can be queried using SQL 
- The core ideas of MUD has three central aspects:
	- All on-chain data is stored in the **[store](../notes/store)** 
	- The logic is stateless and partitioned across contracts with customised permissions 
	- No indexers or subgraphs are needed and the front-end stays synchronised: the state of the chain is kept up-to-date by translating it to the SQL database in real-time via the MODE node. 