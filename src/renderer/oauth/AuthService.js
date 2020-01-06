import axios from 'axios'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import { store } from '../store/modules/auth'
const settings = require('electron-settings')
// import router from '../router'

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
    localStorage.setItem('equipo3', equipo)
    console.log(accesToken1 + '-------------------------------------------------------------------------------------------------------------->')
    // const accessToken = JSON.parse(localStorage.getItem('access_token'))
    let urll = AUTH_CONFIG.apibase + '/api/equipo_no_serie' + '?no_serie=' + equipo
    console.log(urll)
    axios.get(urll,
      {
        headers: {
          Authorization: 'Bearer ' + '' + accesToken1 // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY3N2JhMGE3NzEzMDJkNWU4NzBmNDBhZWM4OWQyZGM5Y2MwN2MyOTdmYWE5N2ZiM2E5Yjc3YzE2MDQyNzY1OWNiOTRjN2U5OTBkNDdlMGJlIn0.eyJhdWQiOiIxIiwianRpIjoiZjc3YmEwYTc3MTMwMmQ1ZTg3MGY0MGFlYzg5ZDJkYzljYzA3YzI5N2ZhYTk3ZmIzYTliNzdjMTYwNDI3NjU5Y2I5NGM3ZTk5MGQ0N2UwYmUiLCJpYXQiOjE1NzgyNjcwODgsIm5iZiI6MTU3ODI2NzA4OCwiZXhwIjoxNTkxMjI3MDg3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.oWSp35NNJ4-UqUXzLwlzliNRAOPyKP9iasMpi510R-qHwXfLEj_QUsYNvOSkfg1KCCB-SF2DfpbtmIdOndCUz-lBleEn0p9wfMcCPhoXpn7Dtonawo1MSSw_9FMGiWWzyBqZjy6wsV0AW6P6rHLUgsy8hVpJJG2RvXofzsOyNVfVtgW9cAge7tjg1_nzoy1cM0XWJGKuRjU-PANYWY07GtMwLT_myWVPqqGS85f-p-ZJKRNsmMXJmX2-0M8t6XD2PKmRkQpLEaLEVlBnuWVbJlzrt7mO53dYNroWGj92ZlViYdwiiZE6ju5s5ywMJIWwMpN8J1jnKmBYNfg1X-3inc5dukmQz6-8dUbvsTyNMqyyJ81ZgM_ElUR_c-05WFBkcwxrQua5th7IYkylt-UUzIbmxENL2OjFh0xPZNddbOCVW7SK0keOkgIcEOQ92-wUbbziBRnc_I0SCFFuwn82L0Qd27AlOO-_qUwcqzAV6bSpVcoIXLRhzm3vWBULwM4YqrfmoMvu19T8PmNKtRRiySpZ4Gos_5JEuzuVbjbM33A3UXhe-PWO1pPorMdF1TU63zuFBQQN5_mw4xy2CYoLQ9itV2AbSsYwwfbLHV1WF_gOAeZgphDenEmVOfuOnz2rujCbzg1kroMAvxduefaPclKzpWTIKTxbgOJ055uEKmc'
        }
      }
    )
      .then(resp => {
        console.log(resp.data)
        localStorage.setItem('equipo_data1', JSON.stringify(resp.data))
        alert('Equipo consultado con esxito.')
      })
      .then(response => {
        return response
      }).catch(e => {
        console.log(e)
        return false
      })
  }
  login (equipoxci1) {
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
          this.getequiponumeroserie(equipoxci1, rs.access_token)
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
