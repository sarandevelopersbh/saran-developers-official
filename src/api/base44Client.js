// src/api/base44Client.js
// --- BASE44 SDK BYPASS FOR STATIC HOSTING ---

console.log("⚠️ Base44 SDK mocked: Running in static mode");

export const base44 = {
  // 1. Mock the 'auth' system so the app thinks we are a guest user
  auth: {
    getUser: async () => null,
    signIn: async () => { console.log("Fake Sign In"); return {}; },
    signOut: async () => { console.log("Fake Sign Out"); }
  },

  // 2. Mock the 'collection' system
  // This prevents the "App Not Found" error by returning empty lists instead of making a network request
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
