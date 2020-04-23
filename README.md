# Notes

This uses auth0-js-9 and Lock 11

#### Auth0 and 0Auth
- Auth0 is the security provider
- 0Auth is a secruity protocal.  This is concerned with authentication and authorization.

#### 0Auth Flow
- The client app sends an authorization request that the user must accept (e.g. give me your user name and password)
- The user fills out the request and is exchanged for an authorization grant
- The app sends this grant to the auth server
- After authenticaion and grant are validated a token is issued to the app
- A this point the user can request data

#### Grant type
- This will be using the implicit grant type for client-side web apps
- This means the app will direct the browser to the Auth0 sign-in page
- Next, after logging in, Auth0 redirects the user to the callback URI we picked along with access and id tokens
- Finally, the app extracts the tokens from the URI and stores needed data in local storage

#### Sign up options
- This will be using the Auth0 lock widget.  It's probably the easiest to use.

#### AuthO.com getting started
- Got to auth0.com and sign up
- After signing up, create a tenant domain. It'll be used for the API endpoints to clients    
- Next, at the dashboard you need to create a New Application and name it.
- For application type, this example is a SPA
- The application tab should provide access the named application.  In there should be info regarding the name, domain, clientID, client secret, etc.
- In this section you need to specify the Allowed Callback URL (e.g., in this case http://localhost:3000/callback), then save changes.


#### Auth file
- You'll be using the auth0.js package installed into package.json for this

#### Tokens
- options for storing tokens: localstorage, sessionstorage, cookie, memory
- in the case of cookies, if you have a dedicated server for a react app, storing tokens in an http only cookie w/secure flag enabled is a good approach. This helps protect from x-site scripting. 
- Auth0 does not recommend storing tokens in localstorage
- In this case though, we don't have a server
- For SPA's, auth0 recommends storing tokens in memory