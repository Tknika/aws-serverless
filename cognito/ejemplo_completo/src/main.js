import { UserManager } from 'oidc-client-ts'

const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_vOCJWCbza',
  client_id: '435e2jo7bo6lmidv9itlt1fqt8',
  redirect_uri: 'http://localhost:5173/index.html',
  response_type: 'code',
  scope: 'phone openid email',
}

// create a UserManager instance
export const userManager = new UserManager({
  ...cognitoAuthConfig,
})

export async function signOutRedirect() {
  const clientId = '435e2jo7bo6lmidv9itlt1fqt8'
  const logoutUri = 'http://localhost:5173/index.html'
  const cognitoDomain =
    'https://us-east-1vocjwcbza.auth.us-east-1.amazoncognito.com'
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
    logoutUri
  )}`
}
