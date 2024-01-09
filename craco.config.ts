import path from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';
import options from './tsconfig.json';

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(options.compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};

