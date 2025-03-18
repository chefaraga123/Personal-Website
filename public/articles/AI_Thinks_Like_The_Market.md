
# Markets Think Like AI 


## Introduction 
Both financial markets and Large Language Models (LLMs) are prediction machines: markets are efficient aggregators of all publicly available information, continuously adjusting prices based on new data, while LLMs generate coherent, contextually appropriate text by processing vast amounts of linguistic data and predicting likely continuations.

This notion of markets as cognitive entities generating an optimal price traces back to the Austrian School, however the way in which its contemporarily expressed is through the Efficient Markets Hypothesis (EMH).

LLMs represent the global application of the epistemics of the EMH. Financial markets and Large Language Models share a fundamental epistemological framework: both are inductive reasoning systems that process vast amounts of information to generate predictions, and both struggle with similar flaws: self-referentiality, hallucinations, and any event that breaks the inductive mould. 
They share a similar internal logic, faulty markets inflate bubbles, LLMs fabricate plausible-sounding falsehoods. Markets rely on regulation to prevent distortions, LLMs require fact-checking to avoid hallucination spirals. Understanding these parallels may offer insight into the limitations of both systems


### What This Article Will Explore
- **How the EMH treats markets as cognitive machines**—digesting information and generating prices.

- **How LLMs operate similarly, but on a broader epistemic scale**—predicting the next token rather than prices.

- **How both systems share vulnerabilities**—self-referentiality, feedback loops, and distorted signals.

--- 

## EMH Overview
***“The best predictor of tomorrow’s price is today’s price.”***

The Efficient Markets Hypothesis (EMH), first formalised by Eugene Fama in the 1960s, asserts that asset prices fully reflect all publicly available information. Practically speaking, this means it's impossible for most investors to consistently achieve returns greater than the overall market using publicly known data alone. This idea resonates intuitively: contemporary wisdom is that investing in index funds, rather than actively trying to beat the market, tends to be more reliable over the long term… Although this isn’t the end of the index funds story. 

Building on Alfred Cowles' 1930s research showing that professional fund managers rarely beat the market consistently, the EMH conceptualizes markets as complex, decentralized information-processing systems. Mathematically grounded in stochastic processes (particularly Geometric Brownian Motion), the EMH implies that asset prices follow a random walk where future movements are independent of historical trends.

The efficient markets hypothesis can be understood as a kind of informational efficiency. Market structures have been increasingly framed as information processors as inspired by computational developments. 

### The different forms of the EMH 

There are three distinct forms of the EMH which represent different assumptions about the extent to which information influences prices. 

- Weak Form Efficiency : Asset prices reflect all past market data. Looking at past data cannot generate excess returns into the future because price movements follow a random walk. 

- Semi-strong: Asset prices reflect all publicly available information. Only new information not yet known to the public can impact stock prices. 

- Strong-form: Asset prices reflect all information: public and private. Under this condition not even insiders can make excess returns. 

Strong-form efficiency is often rejected out of hand given the regularity at which insiders make excess profits. And practically it is most reasonable to view the market as semi-strong. 

The epistemic basis of the EMH is Bayesian, the average market participant is assumed to be rational and updatetheir beliefs in the light of new information. 

### Critique of the EMH

While the EMH is generally valid, it rests on assumptions of rational market participants that don't always hold. Robert Shiller's landmark research ("Do Stock Prices Move Too Much to Be Justified by Subsequent Changes in Dividends") demonstrated that markets frequently overreact and underreact to information in way that's inconsistent with purely rational behavior, explaining observed market inefficiencies.

Viewed through the lens of the EMH, the Efficient Market appears Hayekian: a cognitive structure that digests diverse inputs to produce a single output (price), albeit imperfectly due to participants' cognitive limitations. This history traces itself in part back to Ludwig Mises' part in Socialist Calculation Debate of the 1920s which argued that markets are too computationally complex to be calculated by a central planner.

--- 

## LLMs Overview 
Large Language Models (LLMs) are a specific type of neural network designed to generate and understand language by identifying patterns in massive amounts of text data. To understand how LLMs work, it’s helpful first to grasp neural networks more generally.

Neural networks, and hence LLMs, represent an inductive mode of reasoning.

### Neural Networks and How They Learn
***Can skip if already familiar…***

Neural networks are computational models designed to recognise patterns, learn from data and make predictions. They consist of layers of interconnected units called neurons.

### The Perceptron
The simplest neural network, it has computing units arranged in two layers: an input layer and an output layer. 
It maps an input pattern onto an output pattern. An input pattern is a structured set of numerical values that are fed into the neural network and hence generate an output pattern. 

The output pattern is the result produced by the neural network given its inputs. It is the predicted category/numerical value/decision generated by the network.  The association between input and output pattern is created by training the neural net. 

### Training a Neural Network
When the model is born, it's a blank slate. 

To train a neural network (make it learn) we apply an input pattern to the input layer of the NN, and then fix a desired activation pattern at the output layer. Concretely, the input may be some vectorised image of a plant, and the output pattern may be the name of that plant. 

The training involves applying this input and seeing how far the prediction generated by the neural network is from the actual target which is measured by some loss function. Through the method of back propagation, the weights are adjusted to reduce the loss using gradient descent. The weights are reflected in the connections between neurons, not inside the neurons themselves. 

Platonically, a neural network can be regarded as an ideal Bayesian engine. Given some priors i.e. the weights connecting each node in the input layer to each node in the output and given new information the weights are updated to reduce that loss function and converge towards the ideal response. Training resembles Bayesian updating of priors, although not perfectly as the exact mechanism through which priors (weights) are updated is gradient-based optimisation to minimise a loss function rather than the application of Bayes’ theorem.  

Neural networks contain a model of the world . 

### What Makes LLMs Unique
The epistemic basis of LLMs is grounded in probabilistic inference. Probabilistic inference is the process of using probabilities to make predictions or decisions under uncertainty. 
LLMs can be viewed as performing a form of Bayesian inference where they update their internal probability distribution based on patterns in data.  

LLMs have a probabilistic model of language where each work (token) in a sequence is assigned a probability based on prior context.

Unlike a structured knowledge graph, LLMs store knowledge in their neural weights in a distributed manner. An LLMs internal representation of particular pieces of knowledge is not stored in any one place. No single neuron in an LLM stores a complete representation of the whole reality represented by the LLMs weights, if a single neuron is deleted the LLM will still function because knowledge is spread across the entire architecture. This is similar to the market - no single investor knows the true price, it is an emergent aggregate. 

### How LLMs reason
When you ask an LLM to write something the model conducts the following process: 

**Step 1: Tokenisation** | The input text is split into tokens, tokens are the basic units of text that the model processes. Tokens may be words, subwords, characters or punctuation marks. Most modern LLMs use subword tokenisation. 

Example: "The cat sat on the mat" → ["The", "cat", "sat", "on", "the", "mat", "."]

**Step 2: Embedding** | Tokenized output:  [50256, 464, 812, 1324, 318, 262, 1525, 13]
Each token ID is converted into a high dimensional vector using an embedding matrix. This vector represents the token’s semantics. 

**Step 3: Contextual Relationships** | The relationship of each token to other tokens is determined. The LLM captures the contextual relationship between words, determining meaning from their interactions.

**Step 4: Prediction** | Finally, the model calculates the probabilities of all possible next tokens. The token with the highest probability is chosen as the model’s output.



Hallucination occurs because LLMs generate text/tokens by predicting the most likely sequence of words based on probabilities - not by retrieving factual knowledge. 


Bayesianism and Inductive Reasoning
Inference in LLMs exhibits some Bayesian-like characteristics. When an LLM generates text it predicts the next token based on a probabilistic distribution over possible tokens. 

A trained LLM at a particular point in time represents the complete set of internal/self-referential/inductive relationships of all its training data 



Inference resembles Bayesian reasoning. Training resembles Bayesian updating. 
Just as markets price in new information, LLMs predict the next token based on past data.

--- 

## The convergence of the market and LLMs 

Throughout our exploration, we've primarily discussed financial markets as represented by the Efficient Markets Hypothesis (EMH). However, markets exist at various levels of complexity and resolution, each exhibiting different degrees of informational efficiency. While large, highly liquid markets (such as major stock exchanges) approximate the EMH closely, smaller or less liquid markets often show inefficiencies due to limited information flow, lower trading volumes, or regulatory factors.

Despite these variations, markets generally move toward greater efficiency over time, driven by technological advances, increased transparency, and more effective regulatory frameworks. The EMH fundamentally claims that market participants cannot systematically outperform the market through publicly available information. This assertion implies that markets, viewed as cognitive structures, continuously digest new data, immediately incorporating this information into price signals.

**Large Language Models (LLMs) converge with markets in their foundational cognitive process**: both systems continuously assimilate enormous volumes of data to generate predictions. Markets generate asset prices reflecting all known information, while LLMs produce text and knowledge-based outputs reflecting linguistic and informational patterns learned from their training data.
At their theoretical limit, with vast and continuously updated datasets, LLMs closely resemble markets in their inductive reasoning and predictive capabilities. Both systems effectively aggregate massive amounts of data to produce emergent outcomes—whether that's asset prices in the case of markets or coherent, contextually relevant information in the case of LLMs. This parallel underscores the idea that markets and LLMs, though superficially different, operate on fundamentally similar epistemological principles.

--- 

## Reflexivity and Self-Referentiality: How Markets and LLMs shape themselves. 
Both LLMs and the market operate via inductive reasoning. The semi-strong form of the EMH is asserting that the market reflects all available public information including all historical market-data. The state of the market at a particular point in time is an output of all that information. LLMs 
Markets—much like LLMs—can exhibit irrational behaviors, a phenomenon often described as "hallucination." Market bubbles and financial manias, such as the dot-com bubble or cryptocurrency hype cycles, can be viewed as forms of hallucination where prices deviate significantly from underlying fundamentals.

The negative effects of information are put forward by Robert Shiller. Certain types of information can actually exacerbate volatility, herd behaviour and market inefficiency.

George Soros built a career around the idea of reflexivity, a phenomena that is most perfectly observed within crypto markets where the underlying fundamental is often nothing or close to nothing.

Market reflexivity: market participants’ beliefs and behaviours share market outcomes, which in turn influence those same beliefs and behaviours. In other words, markets don’t reflect reality - they actively shape it through feedback loops. In reality, markets are self-referential and reflexive, just like LLMs….

Index funds are an increasingly relevant source of structural self-referentiality. Index funds are supposed to track prices passively, however as index funds have become a dominant source of liquidity - an increasing proportion of the market is ignoring fundamentals and buying stocks simply due to their presence in the index. 
LLMs exhibit a similar self-referential pattern. As these models increasingly generate content that becomes part of their own training data, they risk reinforcing biases, misinformation, and hallucinated facts—effectively "learning from themselves." This parallels the reflexive behavior seen in markets, where participants’ actions shape outcomes, which in turn reshape participant beliefs and behaviors.

--- 

## Markets and LLMs are imperfect Cognitive Machines

Both financial markets and Large Language Models (LLMs) serve as enormous inductive reasoning engines, processing vast amounts of information to produce predictions and insights. Markets aggregate countless data points—news, economic indicators, investor sentiments—to generate prices. Similarly, LLMs analyze vast text datasets, generating predictions about the most probable continuation of text or ideas.

A concern with the future of LLMs is the problem of self-referentiality. LLMs’ text generation relies on previous tokens, meaning that output is conditioned on itself. LLMs can be poisoned through biased or incorrect data, leading to hallucinations. Ultimately a hallucination is just an LLM output that doesn’t accord with the base reality. 

Markets can be poisoned by bad data, e.g. the collapse of Enron with their falsified financials mislead investors leading to it being incorrectly priced ahead of collapse. In 2013 a false report in about an explosion at the White House caused a 140-point drop in the Dow Jones in minutes before markets realized the news was fake (Johnson).
To mitigate these vulnerabilities, both systems require external correction mechanisms. Financial markets rely on regulatory bodies and oversight mechanisms to prevent the problems of poisoned data, concretely they seek to curb manipulation, fraud, and systemic risks. LLMs need human-led fact-checking, oversight, and careful curation of training data to ensure accuracy and reliability.

Expanding on these parallels, I propose that LLMs represent a generalized form of the epistemology underlying the Efficient Markets Hypothesis (EMH). While markets focus narrowly on pricing assets, LLMs apply a similar inductive logic across all domains of knowledge

Financial markets, in this framing, can be considered a form of narrow superintelligence—highly optimized for one specific goal: efficiently aggregating information into asset prices. By contrast, LLMs embody a more versatile cognitive architecture, capable of adapting across diverse domains. Interestingly, despite the rapid growth in AI investment and computational resources, these still pale in comparison to the scale and complexity of global financial markets.

--- 

## Notes

Neural Net Description
Bayesian Inference 
Pure Notes

Glossary
Ontology - the structure representation of knowledge - concepts, categories and relationships. 


Work Cited
Johnson, Steven C. “False White House tweet exposes instant trading dangers.” Edited by Reuters. 23rd April 2013, https://www.reuters.com/article/business/false-white-house-tweet-exposes-instant-trading-dangers-idUSBRE93M1FE/.

--- 

## Diagrams