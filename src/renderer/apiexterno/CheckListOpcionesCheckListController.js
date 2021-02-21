import axios from 'axios'
import fs from 'fs'
import crypto from 'crypto'
import FormData from 'form-data'
import { AUTH_CONFIG } from '../oauth/auth0-variables'

class CheckListOpcionesCheckListController {
  getequiponumeroserie (checklistid, opcioneschecklistid, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
    if (typeof valor1 === 'undefined' || !valor1 || valor1 === '') {
      valor1 = '---'
    }
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists' + ''
    var accesToken1 = localStorage.getItem('access_token')
    var config = {
      headers: {
        Authorization: 'Bearer ' + '' + accesToken1
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
      valor10: valor10
    }
    axios.post(urll,
      bodyParameters,
      config
    )
      .then(response => {
        // console.log(response)
        return response
      }).catch(e => {
        console.log(e)
        console.log(e.response)
        if (e.response.status === 401) {
          alert(JSON.stringify(e.response.data.error))
        }
        if (e.response.status === 422) {
          alert(JSON.stringify(e.response.data.error))
        }
        if (e.response.status === 502) {
          setTimeout(function () {
            const cloclc = new CheckListOpcionesCheckListController()
            cloclc.getequiponumeroserie(checklistid, opcioneschecklistid, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10)
          }, 5000)
        }
        return false
      })
  }
  setequipofile (file) {
    var algorithm = 'sha256'

    var textToHash = JSON.stringify(file)
    var shasum2 = crypto.createHash(algorithm)
    shasum2.update(textToHash)
    var hash2 = shasum2.digest('hex')
   
    var filenamejk = hash2 +'.txt'
    fs.writeFile( filenamejk, textToHash, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists_upload_file'
    

    fs.readFile(filenamejk, (err, imageData) => {
      if (err) {
        throw err;
      }
      const form = new FormData();
      form.append('uploadfile', imageData);
      var accesToken1 = localStorage.getItem('access_token')
      
      const options2 = {
        url: urll,
        method: 'POST',
        baseURL: urll,
        transformRequest: [function (data, headers) {
          // Do whatever you want to transform the data
          console.log(data, headers)      
          return data;
        }],
        headers: form.getHeaders({'Authorization': 'Bearer ' + '' + accesToken1}),
        data: form,
        withCredentials: true,
        proxy: {          
          host: '127.0.0.1',
          port: 8080,          
        },
        decompress: false                
      }
      
      console.log(options2)

      var formData = {
        my_field: 'my_value',
        uploadfile: imageData,
      };
      //var cabecera = form.getHeaders({'Authorization': 'Bearer ' + '' + accesToken1});
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data");
      myHeaders.append("Authorization", 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODBkMjlkNzNlZDUxYTFjMWM3MDc5ZTM0NjUzMTVlNjM2MGZkOWM3YTJiODkxNjA1NjQ5MTZkZmY2NDM5Mzc4YWQ1YTU4MzA2NDQ3NWM1YTgiLCJpYXQiOjE2MTM1MTExMTIsIm5iZiI6MTYxMzUxMTExMiwiZXhwIjoxNjI2NDcxMTEyLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.BCnSWjYtAA2RMzKwsyUIILN46OqChXNVtw5PbVREYhawAXoougYiPVb4RAbPrEOtpQDu-cRKGoIlZN0sYwg4En7070IV5lnoihEzX1cEUisC6IrvEsrAcDyXJz2hESGdDd7wVzorgF1Wodb_oDDRMt7PdlzwUNklT5Pzl8CrgJmaMmK8q_p2ewF1_W1NdL51IoRzGxcRiagwk7XAShs3WTmJ80PIb4kRSbWTKOhMJp0TFYmfc4zn1YvWS40y_jSJoo5TddvjDC47Q38PDoGuHUIEc8Qs3ZggX_i1CeZHVNNmi641EpPoboFN_qRHe_CDrvVhXdazfPnwsZlj-Sd2UUupbOlM5MrnhRSL7UYTOVZY1PMMUXXxJR6JvdCBiIwipqcdhRedMJHaCL-YPENszO1aGsoqP-QRdJQc3TlMBxYosO2lORw-L-_wkiC30qsvi31z7I0XUQEa3xcFgegJ23dH_moJ_gQ6sFcQCTt_ALmKO-9d6vzWVgyoFlXU68ICUnhC47IcoT-O7vrkx3Dq6568qV--LFrWiPdExg-sv0x7w1HWwim-LaY90cM92CrHNJ6Idc1guDrbep45aQjFox3DfBSc7sJV4aoNfEKlK6nGbe5B621XqtX0NckcMLxn1aODIpaeJzOF-42zpvP2COfhXMCUMwENLqggOnIVzhQ');
      myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
      //cabecera =form.getHeaders({'Authorization': 'Bearer ' + '' + accesToken1})
      
      fetch(urll, { 
        method: 'POST', 
        body: JSON.stringify(formData),
        mode: 'no-cors',
        headers: myHeaders,
      })
        .then(function(res) {
          console.log(res)
          console.log(formData)
            return res.json();
        }).then(function(json) {
            console.log(json);
        });
      
      /*
      axios(options2).then(response => {
        console.log('success! ', response.status, response.statusText, response.headers, typeof response.data, Object.prototype.toString.apply(response.data));
      }).catch(err => {
        console.log(err);
      });
      */
    });
       
  }
  borrarOpcionCheclist (checklistid, opcioneschecklistid) {
    let urll = AUTH_CONFIG.apibase + '/api/check_list__opciones_check_lists_delete' + ''
    var accesToken1 = localStorage.getItem('access_token')
    var config = {
      headers: {
        Authorization: 'Bearer ' + '' + accesToken1
      }
    }
    var bodyParameters = {
      check_list_id: checklistid,
      opciones_check_list_id: opcioneschecklistid
    }
    axios.post(urll,
      bodyParameters,
      config
    )
      .then(response => {
        // console.log(response)
        return response
      }).catch(e => {
        console.log(e)
        console.log(e.response)
        if (e.response.status === 401) {
          alert(JSON.stringify(e.response.data.error))
        }
        if (e.response.status === 422) {
          alert(JSON.stringify(e.response.data.error))
        }
        if (e.response.status === 502) {
          setTimeout(function () {
            const cloclc = new CheckListOpcionesCheckListController()
            cloclc.borrarOpcionCheclist(checklistid, opcioneschecklistid)
          }, 4000)
        }
        return false
      })
  }
}

export default CheckListOpcionesCheckListController
