'use client';
import { Suspense, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spinner } from '@heroui/react';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import PageLoader from '@/components/PageLOader';


export default function UserProfileWithSession() {
  return (
    <SessionProviderWrapper>
      <Suspense fallback={<PageLoader />}>
        <SignInPage />
      </Suspense>
    </SessionProviderWrapper>
  )
}

function SignInPage() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get('error');
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  // Handle session expiration redirect
  useEffect(() => {
    if (status === 'authenticated') {
      // Redirect to original requested page after successful login
      router.push(callbackUrl);
    } 
    // else if (error === 'SessionExpired') {
    //   // Auto-trigger Google sign-in for expired sessions
    //   signIn('google', { callbackUrl });
    // }
  }, [status, error, callbackUrl, router]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {error === 'SessionExpired' && (
          <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
              Session Expired
            </h2>
            <p className="text-yellow-700 dark:text-yellow-300">
              Your session has expired. Please sign in again to continue.
            </p>
          </div>
        )}

        <h1 className="text-2xl font-bold text-center mb-6">
          Sign In to Continue
        </h1>

        <button
          onClick={() => signIn('google', { callbackUrl : '/' })}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.8-1.677-4.174-2.699-6.735-2.699-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.672-0.067-1.336-0.189-1.981h-9.811z" />
          </svg>
          Continue with Google
        </button>

        {callbackUrl !== '/' && (
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            You'll be redirected back to your previous page after signing in.
          </p>
        )}
      </div>
    </div>
  );
}