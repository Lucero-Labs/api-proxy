export interface CreateDIDRequest {
    didMethod: string,
    modenaRequest: any,
}
export enum ModenaPublicKeyPurpose {
    Authentication = "authentication",
    AssertionMethod = "assertionMethod",
    KeyAgreement = "keyAgreement",
    CapabilityInvocation = "capabilityInvocation",
    CapabilityDelegation = "capabilityDelegation",
}

export interface ModenaPublicKeyModel {
    id: string;
    type: string;
    publicKeyJwk: any; // Use a more specific type if available
    purposes?: ModenaPublicKeyPurpose[];
}

export interface ModenaDocumentModel {
    publicKeys?: ModenaPublicKeyModel[];
    services?: any[]; // Use a more specific type if available
}

export interface ModenaRequest {
    // Define properties based on the expected request structure
    // This might need adjustment based on the actual Modena API requirements
    delta: {
        patches: Array<{
            action: string; // e.g., 'replace'
            document: ModenaDocumentModel;
        }>;
    };
    // Add other properties as needed
}

// Assuming ModenaRequest has a static method createCreateRequest
// This might need to be defined or imported if it exists elsewhere
// For now, we'll assume it's part of this file or a related utility.
// Example placeholder if needed:
/*
export class ModenaRequest {
    static createCreateRequest(input: any): ModenaRequest {
        // Implementation based on Modena API
        return {
            delta: {
                patches: [{
                    action: 'replace',
                    document: input.document
                }]
            }
        };
    }
}
*/