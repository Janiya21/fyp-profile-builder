"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/complete-profile"); // Redirect after login
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => signIn("google")} className="px-4 py-2 rounded-lg">
        Sign in with Google
      </button>
    </div>
  );
}
