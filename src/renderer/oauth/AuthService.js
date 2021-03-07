import axios from 'axios'
//import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import { store } from '../store/modules/auth'
const settings = require('electron-settings')
import router from '../router'
import qs from 'qs'

class AuthService {
  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.authenticated = this.isAuthenticated()
    this.authNotifier = new EventEmitter()
  }
  getequiponumeroserie (equipo, accesToken1) {
    console.log(equipo + '-------------------------------------------------------------------------------------------------------------->')
    settings.set('equipo', {
      nombre: equipo,
      last: 'Kramer'
    })
    console.log(settings.file())
    console.log('Comiensa consulta de API')
    localStorage.setItem('equipo3', equipo)
    console.log(accesToken1 + '-------------------------------------------------------------------------------------------------------------->')
    // const accessToken = JSON.parse(localStorage.getItem('access_token'))
    let urll = AUTH_CONFIG.apibase + '/api/equipo_no_serie' + '?no_serie=' + equipo
    console.log(urll)
    axios.get(urll,
      {
        headers: {          
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + '' + accesToken1 ,
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(resp => {
        var aunftada = JSON.stringify(resp.data)
        localStorage.setItem('equipodatax1', aunftada)
        alert('El equipo se ha consultado con éxito.')
      })
      .then(response => {
        console.log('Respuesta de Api')
        return response
      }).catch(e => {
        console.log(e)
        return false
      })
  }
  login (equipoxci1) {
    // https://github.com/wcadena/inventarioAppDesktopJava/blob/63f388fac1830563a51a0c2b2159378c064c273c/src/main/java/utils/ConectarRestfull.java
    
    //axios.defaults.proxy.host = '127.0.0.1'
    //axios.defaults.proxy.port = 8080
    //JSON.stringify(
      
      const data = {
        grant_type: AUTH_CONFIG.grantType,
        client_id: AUTH_CONFIG.clientId,
        client_secret: AUTH_CONFIG.clientSecret,      
        username: AUTH_CONFIG.username,
        password: AUTH_CONFIG.password,
        scope: AUTH_CONFIG.scope
      };
      const options2 = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: AUTH_CONFIG.domain,
        baseURL: AUTH_CONFIG.domain
      };
      
      axios(options2).then(response => {
        const rs = response.data
        const authResult = {
          accessToken: rs.access_token,
          idToken: 5,
          expiresIn: rs.expires_in,
          refreshToken: rs.refresh_token
        }
        this.access_token = response.data.access_token
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.getequiponumeroserie(equipoxci1, rs.access_token)
          this.setSession(authResult)
          // router.replace('/default/dashboard/ecommerce')
          location.reload()
          return true
        }
      })
      .catch(error => {
        console.log(error)
        if (error) {
          router.replace('/')
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
        router.replace('/')
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
    console.log(authResult)
    // localStorage.setItem('equipo', JSON.stringify(authResult.equipo))
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
