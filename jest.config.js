const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss|less|module\\.css)$": "identity-obj-proxy",
  },
};

module.exports = createJestConfig(customJestConfig);
