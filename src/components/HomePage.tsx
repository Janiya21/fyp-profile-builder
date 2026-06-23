"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to Portfolio Generator</h1>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <Link href="/dashboard">Go to Dashboard</Link>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
