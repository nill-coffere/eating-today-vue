import axios from 'axios'
import { Loading } from 'element-ui';


export function exportMethod(data) {
    axios({
        method: data.method,
        url: data.url,
        data: data.data,
        responseType: 'blob'
    }).then((res) => {
        const link = document.createElement('a')
        let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'})
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
 
        link.download = data.fileName 
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }).catch(error => {
        this.$Notice.error({
            title: '错误',
            desc: '网络连接错误'
        })
        console.log(error)
    })
}
