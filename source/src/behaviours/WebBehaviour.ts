import Behaviour from "./Behaviour";

const didDocumentStore: Map<string, any> = new Map();

export default class WebBehaviour implements Behaviour {

    async registry(request: any, url: string): Promise<any> {
        // For did:web, we don't send to a Sidetree node
        // Instead, we create and host the DID document based on the incoming Sidetree-like request

        const domain = "lucerolabs.xyz"; // Fixed domain as per clarification
        const path = undefined; // No path for now

        // The modenaRequest is already parsed in the service layer
        const sidetreeRequestData = request;

        // Extract publicKeys and services from the parsed Sidetree data
        // Assuming the structure is request.delta.patches[0].document
        const publicKeys = sidetreeRequestData?.delta?.patches?.[0]?.document?.publicKeys || [];
        const services = sidetreeRequestData?.delta?.patches?.[0]?.document?.services || [];

        // 1. Create the DID identifier
        // Using fixed domain and no path
        const did = `did:web:${domain}`;

        console.log('>>>>>:', did);

        // 2. Construct the DID document
        const didDocument = {
            "@context": ["https://www.w3.org/ns/did/v1"],
            id: did,
            verificationMethod: publicKeys, // Map Sidetree publicKeys to verificationMethod
            service: services // Map Sidetree services to service
            // Add authentication, assertionMethod, etc. if needed based on publicKeys purposes
            // For simplicity, we'll just include verificationMethod and service for now
        };

        // 3. Host the document using the in-memory store
        const webPath = this.getWebPath(domain, path);
        // In-memory hosting: store the document by its web path
        didDocumentStore.set(webPath, didDocument);
        console.log(`DID Document hosted in memory at path: ${webPath}`);


        return {
            did: did,
            didDocument: didDocument,
            webPath: webPath
        };
    }

    async resolve(did: string, method: string, url: string): Promise<any> { // Changed return type to any to match other behaviours
        // Extract domain and path from DID
        const { domain, path } = this.parseDid(did);

        // Build the web path for the in-memory store
        const webPath = this.getWebPath(domain, path);

        // Fetch the DID document from the in-memory store
        const didDocument = didDocumentStore.get(webPath);

        if (!didDocument) {
            console.error(`DID Document not found in memory for path: ${webPath}`);
             return { // Return structure similar to other behaviours on error
                didDocument: null,
                didDocumentMetadata: {},
                didResolutionMetadata: {
                  error: "notFound",
                  errorMessage: `DID Document not found for did: ${did}`
                }
              };
        }

        console.log(`DID Document resolved from memory for path: ${webPath}`);
        return { // Return structure similar to other behaviours on success
            didDocument: didDocument,
            didDocumentMetadata: {
              created: new Date().toISOString(), // Placeholder
              deactivated: false, // Placeholder
              versionId: "1" // Placeholder
            },
            didResolutionMetadata: {
              contentType: "application/did+ld+json"
            }
          };
    }

    validate(did: string, method: string): boolean {
        // Simple validation for did:web format
        const pattern = /^did:web:[a-zA-Z0-9.-]+(:[a-zA-Z0-9.-]+)*$/; // Updated regex to allow multiple path segments separated by ':'
        return pattern.test(did);
    }

    private getWebPath(domain: string, path?: string): string {
        // Convert DID path segments (separated by ':') back to URL path segments (separated by '/')
        const urlPath = path ? path.replace(/:/g, '/') : '';
        if (urlPath) {
            return `${domain}/${urlPath}/did.json`;
        }
        return `${domain}/.well-known/did.json`;
    }

    // Helper method to parse did:web into domain and path
    private parseDid(did: string): { domain: string, path?: string } {
        const parts = did.split(':');
        if (parts.length < 3 || parts[0] !== 'did' || parts[1] !== 'web') {
            throw new Error(`Invalid did:web format: ${did}`);
        }
        const domain = parts[2];
        const path = parts.slice(3).join(':'); // Join remaining parts back with ':'
        return { domain, path: path || undefined };
    }

    // buildWebUrl is not needed with in-memory storage, removing it.
    // private buildWebUrl(domain: string, path?: string): string {
    //     // This method is not needed for in-memory storage
    //     throw new Error("buildWebUrl is not used with in-memory storage");
    // }

    // hostDidDocument implementation using in-memory store
    private async hostDidDocument(webPath: string, didDocument: any, baseUrl: string): Promise<void> {
        // In-memory hosting is handled directly in the registry method.
        // This method is kept for interface consistency but does nothing.
        console.log(`Simulating hosting DID document for path: ${webPath}`);
        // No actual hosting logic needed for in-memory store here.
    }
}