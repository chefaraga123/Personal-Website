- NARK stands for Non-interactive ARgument of Knowledge 
- A NARK is applied to **[arithmetic circuits](../notes/arithmetic_circuits)**

- Public Arithmetic Circuit (Public Statement, Secret Witness)
- Pre-processing (AKA setup) algorithm 
- A pre-processing NARK is a triple (S, P, V)

- Where S
	- Takes as input C (the arithmetic circuit) 
	- Outputs our public parameters for the prover and the verifier 
- Where P(pp, x, w) = $\pi$
- Where V(vp, x, $\pi$ ) -> accept or reject 


A NARK satisfies a couple of requirements 
- Completeness: if the proof is valid then the verifier always accepts the proof
- Knowledge Sound: If V accepts the proof, then P must know the *W* s.t. C(x, $w$) =0
- **optionally: Zero Knowledge:** (C, pp, vp, x, $\pi$) reveals nothing about the  $w$
- 