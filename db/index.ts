import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import ws from 'ws';

// Add fallback for DATABASE_URL
const dbUrl = process.env.DATABASE_URL || 'postgres://default:password@localhost:5432/elastos';

// Create connection with error handling
let sql;
try {
  sql = neon(dbUrl, { 
    webSocketConstructor: ws
  });
} catch (error) {
  console.error('Failed to connect to database:', error);
  // Provide a fallback that won't break the app but will log errors
  sql = {
    query: async () => {
      console.error('Database unavailable, operation failed');
      return [];
    }
  };
}

const db = drizzle(sql, { schema });

// Export the database instance
export { db };

// Neon SQL Client doesn't support event listeners
// Database errors will be caught in query try/catch blocks