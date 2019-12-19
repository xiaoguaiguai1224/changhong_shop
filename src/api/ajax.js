import axios from 'axios'
// promise异步函数返回的正确数据是response.data
export default function ajax(url, data={}, type){
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      var key;
      let dataStr = ''
      for(key in object) {
        dataStr += key + '=' + object[key] + '&'
      }
      if(dataStr !== '') {
        dataStr.substring(0, dataStr.lastIndexOf('&')) // 取最后一个前面的
        url = url + '?' + dataStr
      }
      // 使用axios发送get请求
      promise = axios.get(url);
    } else {
      // 使用axios发送post请求
      promise = axios.get(url, data);
    }
    promise.then((response) => {
      resolve(response.data) // 直接获取数据
    }).catch((error) => {
      reject(error)
    })
  })
}