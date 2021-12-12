const requireEnv = (name: string): string => {
  const env = process.env[name];
  if (!env) {
    throw new Error(`[requireEnv]: ${name} is not set`);
  }
  return env;
};

export default {
  API_URL: requireEnv('REACT_APP_API_URL'),
  COVALENT_API_KEY: requireEnv('REACT_APP_COVALENT_API_KEY'),

  // APP_URL: requireEnv('REACT_APP_URL'),
  APP_URL: 'http://localhost:3000',
};
