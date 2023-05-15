// usePersistedStateIDB.js
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { setItem, getItem, removeItem } from "./idbHelper";
import { KeyContext } from "./app/client-context";
import { useId } from "@react-aria/utils";

export function usePersistedStateIDB<T>(
  defaultValue: T,
  key: string,
  expiry?: number
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const keyContext = useContext(KeyContext);

  const resolvedKey = `${key}:${keyContext.key}`;

  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    (async () => {
      const storedValue = await getItem(resolvedKey);

      if (storedValue !== undefined) {
        const { value, timestamp } = storedValue;
        if (!expiry || Date.now() < timestamp + expiry) {
          setState(value);
        } else {
          // If the data is expired, remove it from IndexedDB
          await removeItem(resolvedKey);
        }
      }
    })();
  }, [resolvedKey, expiry]);

  const setPersistedState = async (action: React.SetStateAction<T>) => {
    const newState =
      typeof action === "function"
        ? (action as (prevState: T) => T)(state)
        : action;
    await setItem(resolvedKey, {
      value: newState,
      timestamp: Date.now(),
    });
    setState(newState);
  };

  return [state, setPersistedState];
}
