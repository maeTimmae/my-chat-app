import  { db } from "@vercel/postgres";

export const connect = async() => {
    
    const dbClient = await db.connect();
    
    return dbClient;

}

