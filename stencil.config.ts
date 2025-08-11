import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

setPluginConfigurationDefaults({
  enableDebug: false,
  tailwindCssPath: './src/styles/tailwind.css',
});

export const config: Config = {
  namespace: 'ds-web-components',
  globalStyle: 'src/styles/global.css',
  enableCache: false,
  sourceMap: false,
  outputTargets: [
    // Hydrate script para SSR
    {
      type: 'dist-hydrate-script',
      dir: './dist/hydrate',
    },

    // Build principal do Stencil
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },

    // Versão custom elements (caso precise importar direto no browser)
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
     },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null
    },
    // Vue proxies
    vueOutputTarget({
      componentCorePackage: 'ds-web-components',
      proxiesFile: './dist/vue/components.ts',
    }),

    // React proxies com suporte a SSR
    reactOutputTarget({
      outDir: './dist/react',
      stencilPackageName: 'ds-web-components',
      hydrateModule: 'ds-web-components/hydrate',
      customElementsDir: 'dist/components',
      clientModule: 'ds-web-components',
    }),

  ],
  plugins: [
    sass(),
    tailwind(),
    tailwindHMR(),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  extras: {
    enableImportInjection: true
  }
};
