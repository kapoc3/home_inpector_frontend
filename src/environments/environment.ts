import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'HomeInspector',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44345',
    redirectUri: baseUrl,
    clientId: 'HomeInspector_App',
    responseType: 'code',
    scope: 'offline_access HomeInspector',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44345',
      rootNamespace: 'HomeInspector',
    },
  },
} as Environment;
