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
}