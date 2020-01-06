export const AUTH_CONFIG = {
  clientId: 1,
  clientSecret: 'qcbDnG3QeZ2Wr7SBViDFKKxF2vFj0jOECG8MfhHX',
  domain: 'http://inventarios.local/oauth/token',
  apibase: 'http://inventarios.local',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/callback' : 'http://vuely.theironnetwork.org/callback',
  apiUrl: 'API_IDENTIFIER',
  grantType: 'password',
  username: 'admin@admin.com',
  password: 'admin',
  scope: '*'
}
