import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('better-auth-db');

export const auth = betterAuth({
   emailAndPassword: { 
    enabled: true, 
  },

  socialProviders:{
    google:{
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.BEETER_AUTH_GOOGLE_SECRET
    }
  },
  socialProviders:{
    github:{
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET
    }
  },
  socialProviders:{
    discord:{
      clientId: process.env.BETTER_AUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_DISCORD_SECRET
    }
  },

  database: mongodbAdapter(db, {
    client,
  }),
  //...
});
