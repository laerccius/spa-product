interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'secretkey_secretkey123!',
    CLIENT_DOMAIN: 'localhost:5050/api', // e.g., you.auth0.com
    AUDIENCE: 'DemoAudience',
    REDIRECT: 'http://localhost:4200/products',
    SCOPE: 'openid profile email'
  };