
module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts$': 'babel-jest',
        '^.+\\.(t|j)sx?$': 'babel-jest'
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',  // Ensure this path points to your tsconfig file
        useESM: true,
      }
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1', // Helps Jest to understand paths for JS files
      },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testEnvironment: 'jest-environment-node',
    extensionsToTreatAsEsm: ['.ts'],
  };