// components/ErrorBoundary.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function setupGlobalErrorHandling() {
  if (typeof window === 'undefined') return;

  // const originalOnError = window.onerror;
  
  // window.onerror = function (message, source, lineno, colno, error) {
  //   console.error('Global error:', { message, source, lineno, colno, error });
  //   window.location.href = '/internal-server-error';
  //   return originalOnError?.(message, source, lineno, colno, error) || true;
  // };

  // window.onunhandledrejection = function (event) {
  //   console.error('Unhandled rejection:', event.reason);
  //   window.location.href = '/internal-server-error';
  //   event.preventDefault();
  // };
}

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // useEffect(() => {
  //   setupGlobalErrorHandling();
    
  //   // Handle React errors that escape the error boundary
  //   const handleError = (error: ErrorEvent) => {
  //     console.error('Global error caught:', error.error);
  //     router.push('/internal-server-error');
  //   };

  //   const handleRejection = (event: PromiseRejectionEvent) => {
  //     console.error('Unhandled rejection:', event.reason);
  //     router.push('/internal-server-error');
  //   };

  //   // Handle fetch errors (including 404)
  //   const originalFetch = window.fetch;
  //   window.fetch = async (...args) => {
  //     try {
  //       const response = await originalFetch(...args);
  //       if (!response.ok) {
  //         // Handle HTTP errors (404, 500, etc.)
  //         console.error('Fetch error:', response.status, response.statusText);
  //         router.push('/internal-server-error');
  //         return Promise.reject(new Error('Request failed'));
  //       }
  //       return response;
  //     } catch (error) {
  //       console.error('Fetch exception:', error);
  //       router.push('/internal-server-error');
  //       return Promise.reject(error);
  //     }
  //   };

  //   window.addEventListener('error', handleError);
  //   window.addEventListener('unhandledrejection', handleRejection);

  //   return () => {
  //     window.fetch = originalFetch; // Restore original fetch
  //     window.removeEventListener('error', handleError);
  //     window.removeEventListener('unhandledrejection', handleRejection);
  //   };
  // }, [router]);

  return <>{children}</>;
}