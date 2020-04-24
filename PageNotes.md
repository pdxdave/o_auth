#### Home page
Nothing particularly special about this page.  It will have a login button.  It will also check to see if the person is already logged in.  If so, the button will change to logged in.


#### ENV
- This holds our unique auth0 info from auth0.com
- All settings found in dashboard under applications
- Obviously I won't be showing the values for this project.  
REACT_APP_AUTH0_DOMAIN=    
REACT_APP_AUTH0_CLIENT_ID=    
REACT_APP_AUTH0_CALLBACK_URL=    

#### Auth.js
- A lot of stuff happening on this page
- The react router history is passed into the constructor so we can interact with react router and have a reference to the history object
- We need to instantiate the auth0.webAuth().  It's here that we can access the .env info
- the responseType is what kind of info we want back after authenticating a user.  The token is so we can make API calls. The id_token is from OpenIdConnect. It's a layer over 0Auth.
- scope is where we specify permissions. 
- LOGIN  when this.auth0.authorize() is called it will redirect the browser to the Auth0 login page.  This needs to be instantiated in the App.js page.  It will be in the constructor.
- LOGOUT make sure in auth0.com the following is in the applications: Allowed Logout URLs should be http://localhost:3000 and save.
- GET ACCESS TOKEN does just that.  It gets the token from local storage.
- GET PROFILE will return the profile if it's already found.  Notice that it's initialized in the constructor at top. If we don't have a user profile, we'll call the userInfo on Auth0 and pass it the access token.
- 

#### App.js
- Something to note. In index.js we wrapped the App within a Router. This means it'll get the history object from react router. 
- We use a render to pass the props down to the Home component.

#### Callback.js
- This is where we will be directed to after a successful login
- Callback will use regex looking for search items. 