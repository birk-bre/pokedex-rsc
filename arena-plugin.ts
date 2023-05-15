"use client";
declare global {
  interface Window {
    carePlanArenaPluginApi: CarePlanArenaPluginApi;
  }
}

interface CarePlanArenaPluginApi {
  patientId: () => number | null;
}

function getPatientId(): number | null {
  if (typeof window !== "undefined") {
    return window?.carePlanArenaPluginApi?.patientId();
  }
  return null;
}

export { getPatientId };
