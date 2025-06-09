// authConfig.js
import { UserManager } from 'https://unpkg.com/oidc-client-ts@2.3.1/dist/esm/index.js'

export const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_TJkYwsBM2',
  client_id: '218496j1v37m94abho9lcj8tro',
  redirect_uri:
    'https://prueba-cognito-mgilav.s3.us-east-1.amazonaws.com/inicio.html',
  response_type: 'code',
  scope: 'email openid phone',
}

export const userManager = new UserManager({
  ...cognitoAuthConfig,
})

export async function signOutRedirect() {
  const clientId = cognitoAuthConfig.client_id
  const logoutUri =
    'https://prueba-cognito-mgilav.s3.us-east-1.amazonaws.com/index.html'
  const cognitoDomain =
    'https://us-east-1tjkywsbm2.auth.us-east-1.amazoncognito.com'
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
    logoutUri
  )}`
}
