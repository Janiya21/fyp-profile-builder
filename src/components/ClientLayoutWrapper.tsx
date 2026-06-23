// components/ClientLayoutWrapper.tsx
'use client';

import { useEffect } from 'react';
import { setupGlobalErrorHandling } from './ErrorBoundry';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setupGlobalErrorHandling();
  }, []);

  return <>{children}</>;
}