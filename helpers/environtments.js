const environments = {};

environments.staging = {
  port: 1998,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport = typeof (environments[currentEnvironment] ===
"object"
  ? environments[currentEnvironment]
  : environments.staging);
