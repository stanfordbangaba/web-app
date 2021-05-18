// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  // version: env.mifos_x_version,
  version: '0.0.0',
  fineractPlatformTenantId: 'default',  // For connecting to server running elsewhere update the tenant identifier
  baseApiUrl: window['env']['baseApiUrl'] || 'default',
  // allowServerSwitch: env.allow_switching_backend_instance,
  allowServerSwitch: false,
  apiProvider: '/fineract-provider/api',
  apiVersion: '/v1',
  serverUrl: '',
  debitOrderServerUrl: '',
  oauth: {
    enabled: false,  // For connecting to Mifos X using OAuth2 Authentication change the value to true
    serverUrl: ''
  },
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US'
  ]
};

// Server URL
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
environment.oauth.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}`;
environment.debitOrderServerUrl = `http://localhost:8090/api/v1`;
