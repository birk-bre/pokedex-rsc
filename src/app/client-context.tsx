"use client";
import { createContext } from "react";

export const KeyContext = createContext({ key: "" });

export function ClientContext({ children }: { children: React.ReactNode }) {
  return (
    <KeyContext.Provider value={{ key: "test" }}>
      {children}
    </KeyContext.Provider>
  );
}
