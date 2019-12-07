import axios from 'axios'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
// import router from '../router'
import { store } from '../store/modules/auth'

class AuthService {
  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.authenticated = this.isAuthenticated()
    this.authNotifier = new EventEmitter()
  }
  getequiponumeroserie (equipo) {
    // const accessToken = JSON.parse(localStorage.getItem('access_token'))
    let urll = AUTH_CONFIG.apibase + '/api/equipo_no_serie' + '?no_serie=' + equipo
    console.log(urll)
    axios.get(urll,
      {
        headers: {
          Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0MGM3YzgwNzdmMWVhMzI1NDI1MzA5YmFjNmQ2M2ZlMzdkOWJjNmYxZDdiNTYzNmRkNzgzNGU3NDM4ODg0NmU0NDgyNmEyYmQ1NjU3ZDYwIn0.eyJhdWQiOiI4IiwianRpIjoiNjQwYzdjODA3N2YxZWEzMjU0MjUzMDliYWM2ZDYzZmUzN2Q5YmM2ZjFkN2I1NjM2ZGQ3ODM0ZTc0Mzg4ODQ2ZTQ0ODI2YTJiZDU2NTdkNjAiLCJpYXQiOjE1NzU2MDM3NTUsIm5iZiI6MTU3NTYwMzc1NSwiZXhwIjoxNTg4NTYzNzU1LCJzdWIiOiIyMyIsInNjb3BlcyI6WyIqIl19.M5hkLkrE4tXj2LxCcgPiRqowaqIFzGtC5xEYcB-7DUMo5EBqJr98NMyUEat_qgaWW0L2HmCkHSrO8nf3gamOoFrE35chWyc_xFUm7bo3e2lRCuAupP0LVRtQHoe2r5mYo2YlXeMStAs3i2RshOoCDLyu7EdCRo-oKtpzwya9K4tO2V56kJcw5qb6OCz6HBydNNiREEBGUDQ3qk7Xa61oa7KO9MPJvXDc8yseE1VsBJtsVtZSJfQwnexJDk-peeAzdUaKxZGgJPBSki-0ll-U-y4nwrntLPCMvV2yw1f_pA2_c7TIJusM-zpej07HbIduVpDNE94Wk-WUc5iOSsrTkCqoiCSvR0wvpSQ0eNpOxLxMpHruaytDs14pl28GCqsnbhaEazej6EAz3-3uMa8QryM2JkVuBFPJE8oUWXI2Mptvf1CHe6yWXHVIdy3Gem-la6FP-ieWy6I2L590XnTBvHDMfCNVhIWC3Vts5sdEVhSozOb5w-SaLBGz3V6fD4hY2dZln0Le9ThV8v25aVQNXaXzUitT6LvrEu3liBBI5cgZKxj_rqMvw-tYSSSvT0ccMOQFTxsCd81MFlr8wMMGFki49vtyLici_3RJ6UqX_DepVCEFx1gAFF4h40YrfGo895xxdexs3IDU6l48yvs5B-baqMfpN6rqfH9MiOefq4Q'
        }
      }
    )
      .then(resp => resp.data)
      .then(response => {
        localStorage.setItem('equipo_data', JSON.stringify(response))
        return response
      }).catch(e => {
        return false
      })
  }
  login () {
    // https://github.com/wcadena/inventarioAppDesktopJava/blob/63f388fac1830563a51a0c2b2159378c064c273c/src/main/java/utils/ConectarRestfull.java
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.post(AUTH_CONFIG.domain, {
      client_id: AUTH_CONFIG.clientId,
      client_secret: AUTH_CONFIG.clientSecret,
      grant_type: AUTH_CONFIG.grantType,
      username: AUTH_CONFIG.username,
      password: AUTH_CONFIG.password,
      scope: AUTH_CONFIG.scope
    })
      .then(response => {
        const rs = response.data
        const authResult = {
          accessToken: rs.access_token,
          idToken: 5,
          expiresIn: rs.expires_in,
          refreshToken: rs.refresh_token
        }

        this.access_token = response.data.access_token
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          // router.replace('/default/dashboard/ecommerce')
          location.reload()
          return true
        }
      })
      .catch(error => {
        if (error) {
          // router.replace('/')
          console.log(error)
          alert(`Error: ${error}. Check the console for further details.`)
          return false
        }
      })
  }

  handleAuthentication () {
    console.log('Entroaca.....12sai')
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // router.replace('/default/dashboard/ecommerce')
        return true
      } else if (err) {
        // router.replace('/')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
        return false
      }
    })
  }

  setSession (authResult) {
    // store.dispatch('signInUserWithAuth0', authResult)
    localStorage.setItem('isUserSigninWithAuth0', true)
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('refresh_token', authResult.refreshToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_in', expiresAt)
    localStorage.setItem('equipo', JSON.stringify(authResult.equipo))
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    store.dispatch('signOutUserFromAuth0')
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_in')
    localStorage.removeItem('equipo')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    // router.push('/session/login')
    return false
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_in'))
    return new Date().getTime() < expiresAt
  }
}

export default AuthService
