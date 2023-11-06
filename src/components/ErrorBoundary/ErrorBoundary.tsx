import React, { useState } from 'react';

type ErrorBoundaryProps  = {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const componentDidCatch = (error: Error) => {
    console.log("caugth error");
    setHasError(true);
    setError(error);
  };

  if (hasError) {
    return <div>Error: {error ? error.message : 'An error occurred.'}</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
