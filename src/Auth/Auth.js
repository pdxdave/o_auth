import auth0 from 'auth0-js'

export default class Auth {
    // passing in react router history
    constructor(history){
        this.history = history
        this.auth0 = new auth0.WebAuth ({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            responseType: "token id_token",
            scope: "openid profile email"
        })
    }

    login = () => {
        // this method is available on the auth0 webauth
        // when called it will redirect browser to auth0 login page
        this.auth0.authorize()
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            // get these pieces out of the URL
            if(authResult && authResult.accessToken && authResult.idToken) {
                // write them to the session
                this.setSession(authResult)
                this.history.push('/')
            } else if (err){
                this.history.push('/')
                alert(`Error: ${err.error}. Check console`)
            }
        })
    }

    setSession = (authResult) => {
        // set time the access token will expire
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    };
}