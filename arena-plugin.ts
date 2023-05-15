declare global {
  interface Window {
    carePlanArenaPluginApi: CarePlanArenaPluginApi;
  }
}

interface CarePlanArenaPluginApi {
  patientId: () => number | null;
}

function getPatientId(): number | null {
  return window?.carePlanArenaPluginApi?.patientId();
}

export { getPatientId };
