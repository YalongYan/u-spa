// let requestUlr = 'http://localhost:1153/scanStatic/addScanInfo';

// const postRequest = function (url, data) {
export const postRequest = function (url: string, data: any) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          // resolve(JSON.parse(this.responseText), this)
          resolve(this.responseText)
        } else {
          var resJson = { code: this.status, response: this.response }
          reject(resJson)
        }
      }
    }
    xhr.send(JSON.stringify(data))
  })
}

// postRequest(requestUlr, {'name':'vvvvvv'})
// 为啥用ajax 不用 fetch?
// https://www.cnblogs.com/baixiaoxiao/p/11302814.html
