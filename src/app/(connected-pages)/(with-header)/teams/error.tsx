"use client";

import { Shell } from "@/src/components/atoms/Shell";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Shell>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </Shell>
  );
}
