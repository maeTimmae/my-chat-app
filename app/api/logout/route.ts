"use server";

import { getAuth } from '@/app/lib/auth/auth';
import { lucia } from '@/app/lib/auth/lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export default async function () {
    const { session } = await getAuth();
    console.log(session);
    await lucia.invalidateSession(session!.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return redirect("/pages/login");
}