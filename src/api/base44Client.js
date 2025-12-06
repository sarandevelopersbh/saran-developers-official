// src/api/base44Client.js
console.log("⚠️ Base44 SDK mocked: Running in static mode");

export const base44 = {
  // 1. Mock 'entities' (Used by Portfolio.jsx)
  entities: {
    Project: {
      list: async () => [] // Return empty list so it doesn't crash
    }
  },

  // 2. Mock 'collection' (Used by other pages)
  collection: (collectionName) => ({
    list: async () => [],
    get: async () => ({}),
    create: async () => ({}),
  }),

  // 3. Mock Auth & Storage
  auth: {
    getUser: async () => null,
    signIn: async () => ({}),
    signOut: async () => {}
  },
  storage: {
    getUrl: () => ""
  }
};
