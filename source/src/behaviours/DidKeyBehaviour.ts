import Behaviour from "./Behaviour";
const didKeyDriver = require('@digitalcredentials/did-method-key').driver();

export default class DidKeyBehaviour implements Behaviour {
  
  getMethodLength = (method: string) => {
    return method.length + ((method.slice(-1) === ':') ? 0 : 1);
  }
  
  async resolve(did: string, method: string, url: string) {
    try {
      console.log(`Resolving did:key locally: ${did}`);
      
      // Use the library for resolution
      const result = await didKeyDriver.get({ did });
      
      // Return in same format as other behaviours
      return {
        didDocument: result.didDocument,
        didDocumentMetadata: {
          created: new Date().toISOString(),
          deactivated: false,
          versionId: "1"
        },
        didResolutionMetadata: {
          contentType: "application/did+ld+json"
        }
      };
      
    } catch (error) {
      console.error(`Failed to resolve ${did}:`, error.message);
      return {
        didDocument: null,
        didDocumentMetadata: {},
        didResolutionMetadata: {
          error: "notFound",
          errorMessage: error.message
        }
      };
    }
  }
  
  validate(did: string, method: string): boolean {
    // Basic did:key validation
    if (!did.startsWith('did:key:')) {
      return false;
    }
    
    const method_length = this.getMethodLength(method);
    if (did.charAt(method_length - 1) !== ':') {
      return false;
    }
    
    // Extract the key part after did:key:
    const keyPart = did.substring(method_length);
    
    // did:key should start with 'z' (multibase base58btc encoding)
    if (!keyPart.startsWith('z')) {
      return false;
    }
    
    // Basic length check (should be reasonable length for encoded key)
    if (keyPart.length < 10 || keyPart.length > 100) {
      return false;
    }
    
    return true;
  }
  
  async registry(request: any, url: string): Promise<any> {
    try {
      console.log(`Creating did:key locally with request:`, request);
      
      let didDocument;
      let keyPairs;
      
      // Check if we have verification methods with keys to use
      if (request.verificationMethods && request.verificationMethods.length > 0) {
        // For now, generate new keys (the library doesn't easily support importing existing keys)
        // This is a limitation we might need to work around
        const result = await didKeyDriver.generate();
        didDocument = result.didDocument;
        keyPairs = result.keyPairs;
        
        console.log('Generated did:key with new keys (importing existing keys not yet implemented)');
      } else {
        // Generate a new did:key
        const result = await didKeyDriver.generate();
        didDocument = result.didDocument;
        keyPairs = result.keyPairs;
      }
      
      return {
        did: didDocument.id,
        longDid: didDocument.id, // did:key doesn't have long form
        didDocument,
        keyPairs, // Include the generated key pairs
        didDocumentMetadata: {
          created: new Date().toISOString(),
          deactivated: false,
          versionId: "1"
        }
      };
      
    } catch (error) {
      console.error(`Failed to create did:key:`, error.message);
      return {
        error: "creation_failed",
        errorMessage: error.message
      };
    }
  }
}