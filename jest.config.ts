import type { Config } from 'jest';

const config: Config = {
  preset: '@stencil/core/testing',
  testEnvironment: 'jsdom',
};

export default config;
