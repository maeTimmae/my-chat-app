import { Lucia } from "lucia";
import { PostgresJsAdapter } from "@lucia-auth/adapter-postgresql";
import postgres from "postgres"

const sql = postgres();

export const lucia = new Lucia(new PostgresJsAdapter(sql, {
    user : "users",
    session : "user_session"
}),{
    sessionCookie: {
        expires : false,
        attributes : {
            secure: process.env.NODE_ENV === "production"
        }
    },
    getUserAttributes : (attributes) => {
        return {
            email : attributes.email,
            password : attributes.password
        }
    }

});

declare module "lucia" {
    interface Register {
      Lucia: typeof Lucia;
      DatabaseUserAttributes : DatabaseUserAttributes;
    }
  }

interface DatabaseUserAttributes {
    email : string,
    password : string
}