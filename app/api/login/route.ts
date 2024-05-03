import { db } from "@vercel/postgres";

export const client = db.connect();