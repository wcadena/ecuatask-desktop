export const AUTH_CONFIG = {
  clientId: 8,
  clientSecret: 'gWKflHgHzlKPX9FQpVZmgPDzv60iXnKujzRyzwVV',
  domain: 'https://devinventario.ecuatask.com/oauth/token',
  apibase: 'https://devinventario.ecuatask.com',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/callback' : 'http://vuely.theironnetwork.org/callback',
  apiUrl: 'API_IDENTIFIER',
  grantType: 'password',
  username: 'admin@admin.com',
  password: 'password',
  scope: '*'
}
