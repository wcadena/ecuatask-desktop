import axios from 'axios'
import { AUTH_CONFIG } from '../oauth/auth0-variables'

class CheckListOpcionesCheckListController {
  getequiponumeroserie (checklistid, opcioneschecklistid, tipo, atributo, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists' + ''
    console.log(urll)
    var accesToken1 = localStorage.getItem('access_token')
    // var accesToken1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwY2EzYTMyMDljNDMwNGUxYTcwNzAxMjI5OWY5NjQ1MzhiZGYwM2M1OGZhMTVjOTU5MTk3NTkwYjgzNWZhOGU0MDExMDMwYjIzYmFkNjhjIn0.eyJhdWQiOiIxIiwianRpIjoiZDBjYTNhMzIwOWM0MzA0ZTFhNzA3MDEyMjk5Zjk2NDUzOGJkZjAzYzU4ZmExNWM5NTkxOTc1OTBiODM1ZmE4ZTQwMTEwMzBiMjNiYWQ2OGMiLCJpYXQiOjE1NzgyODI0NDEsIm5iZiI6MTU3ODI4MjQ0MSwiZXhwIjoxNTkxMjQyNDQwLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.ZTTChRuXD0whycFS0zbplBf2q1hcqUXRN-Zvmn7TyAyTLG1VtEAYc7LbKqJaUKT5_ruK814DHmdIPnqHWuEpCe7S56scnM76eKMWejIHjhMSO1xxj5pXMvdLzstZZINtRE2dSEY7M3xT9Hg33bZkdDoYpR3oFSdMkybp3eNUQhOPph7VeTO9MCW9s2XyfLZB-qTLUfpdH5eC945NNtXiBjjeuOZoeUz-VGxXfWwch4EXpttC2OS7g3F_v-K-ipb7QIApNYppsKg3_1iVNBzSm7kHsYuGbyBNJnptdxWFPzZ0qyrCBM4rZ0LNdpKyb-iW2wLRtQwKX84hP6XWaQKg9r5Uz6-lIde2mSRSc41qDF7tbCGHA48vK9fUq2dJnoFGNPSgN62JLsG7qWBwdA6qQtnns71m_8e41CENFmtd5M0WVoKMPjBFMT7TyzqQ8x8nqbBioq-67VwUL9zgckJJyXUhq_AeInzMwjxuz07czGit-w7F12kTdc2RjERriTDiahMPPlIg7b3Qdf5_ujr8Ezr_9PwowFQQSuOz7RRudPBlqIAapxU3E6wjKwyNhOJUZc0Hr0IS6Nyn7-K7tZV5R0NGhCSY3y3kl-QjGfaXuSS1lj-gKw0qvVrI51YF80D48sqI1cNCLpeTZ8Y3EGEphku2DmbV2ElG_QypSAOM02c'

    var config = {
      headers: {
        Authorization: 'Bearer ' + '' + accesToken1 // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY3N2JhMGE3NzEzMDJkNWU4NzBmNDBhZWM4OWQyZGM5Y2MwN2MyOTdmYWE5N2ZiM2E5Yjc3YzE2MDQyNzY1OWNiOTRjN2U5OTBkNDdlMGJlIn0.eyJhdWQiOiIxIiwianRpIjoiZjc3YmEwYTc3MTMwMmQ1ZTg3MGY0MGFlYzg5ZDJkYzljYzA3YzI5N2ZhYTk3ZmIzYTliNzdjMTYwNDI3NjU5Y2I5NGM3ZTk5MGQ0N2UwYmUiLCJpYXQiOjE1NzgyNjcwODgsIm5iZiI6MTU3ODI2NzA4OCwiZXhwIjoxNTkxMjI3MDg3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.oWSp35NNJ4-UqUXzLwlzliNRAOPyKP9iasMpi510R-qHwXfLEj_QUsYNvOSkfg1KCCB-SF2DfpbtmIdOndCUz-lBleEn0p9wfMcCPhoXpn7Dtonawo1MSSw_9FMGiWWzyBqZjy6wsV0AW6P6rHLUgsy8hVpJJG2RvXofzsOyNVfVtgW9cAge7tjg1_nzoy1cM0XWJGKuRjU-PANYWY07GtMwLT_myWVPqqGS85f-p-ZJKRNsmMXJmX2-0M8t6XD2PKmRkQpLEaLEVlBnuWVbJlzrt7mO53dYNroWGj92ZlViYdwiiZE6ju5s5ywMJIWwMpN8J1jnKmBYNfg1X-3inc5dukmQz6-8dUbvsTyNMqyyJ81ZgM_ElUR_c-05WFBkcwxrQua5th7IYkylt-UUzIbmxENL2OjFh0xPZNddbOCVW7SK0keOkgIcEOQ92-wUbbziBRnc_I0SCFFuwn82L0Qd27AlOO-_qUwcqzAV6bSpVcoIXLRhzm3vWBULwM4YqrfmoMvu19T8PmNKtRRiySpZ4Gos_5JEuzuVbjbM33A3UXhe-PWO1pPorMdF1TU63zuFBQQN5_mw4xy2CYoLQ9itV2AbSsYwwfbLHV1WF_gOAeZgphDenEmVOfuOnz2rujCbzg1kroMAvxduefaPclKzpWTIKTxbgOJ055uEKmc'
      }
    }
    var bodyParameters = {
      check_list_id: checklistid,
      opciones_check_list_id: opcioneschecklistid,
      valor1: valor1,
      valor2: valor2,
      valor3: valor3,
      valor4: valor4,
      valor5: valor5,
      valor6: valor6,
      valor7: valor7,
      valor8: valor8,
      valor9: valor9,
      valor10: valor10,
      tipo: tipo,
      atributo: atributo
    }
    axios.post(urll,
      bodyParameters,
      config
    )
      .then(resp => {
        console.log(resp)
      })
      .then(response => {
        console.log(response)
        return response
      }).catch(e => {
        console.log(e)
        return false
      })
  }
}

export default CheckListOpcionesCheckListController
