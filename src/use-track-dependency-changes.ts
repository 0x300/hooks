import { useEffect, useRef } from "react";

/**
 * Custom hook to track changes in react dependency arrays.
 * Logs the previous and current values of each dependency to the console.
 *
 * Usage:
 * ```typescript
 * useEffect(() => {}, useTrackDependencyChanges([dep1, dep2, ...]);
 * ```
 */
const useTrackDependencyChanges = (deps: unknown[]) => {
  // Store previous dependency values.
  const prevDepsRef = useRef<unknown[]>([]);

  useEffect(() => {
    // On re-renders (skip first render)
    if (prevDepsRef.current.length > 0) {
      deps.forEach((dep, i) => {
        if (prevDepsRef.current[i] !== dep) {
          console.log(`Dependency ${i + 1} changed:\n`, prevDepsRef.current[i], "\n\n", dep);
        }
      });
    }
    // Update previous dependencies.
    prevDepsRef.current = deps;
  }, deps);

  return deps;
};

export default useTrackDependencyChanges;
