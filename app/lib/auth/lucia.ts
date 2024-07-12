import { Lucia, Session, User } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import { prisma } from "../prisma";
import { IncomingMessage, ServerResponse } from "http";

const adapter = new PrismaAdapter(

  prisma.session,  
  prisma.user

);

export const lucia = new Lucia(
    adapter, 
    {
      sessionCookie: {
        // this sets cookies with super long expiration
        // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
        expires: false,
        attributes: {
        // set to `true` when using HTTPS
          secure: process.env.NODE_ENV === 'production',
        },
      },
      getUserAttributes: (attributes) => {
        return {
          // attributes has the type of DatabaseUserAttributes
          email: attributes.email,
        };
      },
    }
);
  
  declare module 'lucia' {
    interface Register {
      Lucia: typeof lucia;
      DatabaseUserAttributes: DatabaseUserAttributes;
    }
  }
  
  interface DatabaseUserAttributes {
    email: string  | undefined;
  }

    export type Auth = typeof lucia;


export async function validateRequest(
	req: IncomingMessage,
	res: ServerResponse
): Promise<{ user: User; session: Session } | { user: null; session: null }> {
	const sessionId = lucia.readSessionCookie(req.headers.cookie ?? "");
	if (!sessionId) {
		return {
			user: null,
			session: null
		};
	}
	const result = await lucia.validateSession(sessionId);
	if (result.session && result.session.fresh) {
		res.appendHeader("Set-Cookie", lucia.createSessionCookie(result.session.id).serialize());
	}
	if (!result.session) {
		res.appendHeader("Set-Cookie", lucia.createBlankSessionCookie().serialize());
	}
	return result;
}