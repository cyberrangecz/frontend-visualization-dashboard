// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  assetsRoot: '',
  restBaseUrl: 'https://147.251.124.129:8083/kypo2-rest-training/api/v1/',

  // OIDC SETTINGS
  // Url of the Identity Provider
  issuer: 'https://oidc.muni.cz/oidc/',
  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin,
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,
  // The SPA's id. The SPA is registered with this id at the config-server
  clientId: 'b53f2660-8fa0-4d32-94e4-23a59d7e7077',
  // set the scope for the permissions the client should request
  scope: 'openid profile email',
  sessionChecksEnabled: false,
};
