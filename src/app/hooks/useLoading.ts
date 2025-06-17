import { useState } from "react";

export function useLoading(initial = false) {
  const [isLoading, setIsLoading] = useState(initial);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  const toggleLoading = () => setIsLoading((prev) => !prev);

  return { isLoading, startLoading, stopLoading, toggleLoading };
}
