# Modena Resolver

This is a simple API with a reverse-proxy like behaviours that works as a resolver for multiple did-methods.

## Overview

The Modena Resolver exposes the ***/resolve/:did*** endpoint, taking a **DID** document URI as an argument and delegating it to the resolver of the did-method that it specifies.

## Mappingss

The mapping of the did method to the corresponding resolver is defined in the ***config/methods.json*** file.

It contains a list comprised of entries of the following structure

```json
  {
      "pattern": "did:{your-did-method}",
      "url": "url-of-the-did-method",
      "behaviour": BEHAVIOUR_TYPE
  }
```
## Behaviour Types

Not all resolver implementations are created equal, thats why you can find the *Behaviour* interface and some implementations under the src/behaviours folder. 

The interface exposes 2 methods, resolve and validate. The first one delegates the resolution by making a request, in a specific way, while the validate method checks if the DID URI is valid by the behaviour standard.


The BehaviourManager functions as a mapping between an integer and a *Behaviour* implementing class. 
