resource "okta_idp_oidc" "entra_id" {
  name             = "EntraID-Federation"
  issuer_url       = "https://login.microsoftonline.com/tenant-id/v2.0"
  client_id        = "your-client-id"
  client_secret    = "your-client-secret"
  authorization_url = "https://login.microsoftonline.com/tenant-id/oauth2/v2.0/authorize"
  token_url        = "https://login.microsoftonline.com/tenant-id/oauth2/v2.0/token"
  jwks_url         = "https://login.microsoftonline.com/tenant-id/discovery/v2.0/keys"
  scopes           = ["openid", "profile", "email"]
}
