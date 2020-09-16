module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '(*)': '<rootDir>/src/$1',
  },
  'ts-jest': {
    tsConfigFile: 'tsconfig.json',
    enableTsDiagnostics: true,
  },
};
