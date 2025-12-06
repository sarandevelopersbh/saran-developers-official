// --- BASE44 SDK BYPASS FOR STATIC HOSTING ---
// This mocks the database connection so the site can load 
// without the real @base44/sdk dependency.

console.log("⚠️ Base44 SDK bypassed: Running in static mode");

export const base44 = {
    // 1. Mock the 'auth' system so the app thinks we are a guest user
    auth: {
        getUser: async () => null,
        signIn: async () => { console.log("Fake Sign In"); return {}; },
        signOut: async () => { console.log("Fake Sign Out"); }
    },

    // 2. Mock the 'collection' system (for fetching property data)
    // We return empty lists so the page loads (even if empty) instead of crashing
    collection: (collectionName) => ({
        list: async () => [],
        get: async () => ({}),
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
    }),

    // 3. Mock storage for images
    storage: {
        getUrl: () => ""
    }
};