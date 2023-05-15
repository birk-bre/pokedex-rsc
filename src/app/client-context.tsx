"use client";
import { createContext } from "react";
import { getPatientId } from "../../arena-plugin";

export const KeyContext = createContext<{ key: string | number }>({ key: "" });

export function ClientContext({ children }: { children: React.ReactNode }) {
  const patientId = getPatientId() ?? "browser";
  console.log("PATIENT ID", patientId);
  return (
    <KeyContext.Provider value={{ key: patientId ?? "browser" }}>
      {children}
    </KeyContext.Provider>
  );
}
