"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>something went wrong! {error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
