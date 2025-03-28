// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration local` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

const OIDC_URL = 'https://localhost:8080';
const API_URL = 'http://localhost:3000';
// frontend home url
const HOME_URL = 'https://localhost:4200';

export const environment = {
    production: false,
    sessionChecksEnabled: false,
    dashboardVisualizationConfig: {
        trainingServiceUrl: API_URL + '/training/api/v1/',
    },
    authConfig: {
        guardMainPageRedirect: 'visualization',
        guardLoginPageRedirect: 'login',
        interceptorAllowedUrls: [API_URL, OIDC_URL, 'https://localhost', 'http://localhost'],
        authorizationStrategyConfig: {
            authorizationUrl: API_URL + '/user-and-group/api/v1/users/info',
        },
        providers: [
            {
                label: 'Login with local Keycloak',
                textColor: 'white',
                backgroundColor: '#1e2173',
                oidcConfig: {
                    requireHttps: true,
                    clearHashAfterLogin: true,
                    issuer: OIDC_URL + '/keycloak/realms/CRCZP',
                    clientId: 'CRCZP-client',
                    redirectUri: HOME_URL,
                    scope: 'openid email profile offline_access',
                    logoutUrl: OIDC_URL + '/keycloak/realms/CRCZP/protocol/openid-connect/logout',
                    silentRefreshRedirectUri: HOME_URL + '/silent-refresh.html',
                    postLogoutRedirectUri: HOME_URL + '/logout-confirmed',
                },
            },
        ],
    },
};
