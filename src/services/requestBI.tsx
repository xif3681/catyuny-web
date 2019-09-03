import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import * as React from 'react'
import { message, notification } from 'antd';
import ErrorDescription from 'src/components/Errors/ErrorDescription'
import ErrorListDescription from 'src/components/Errors/ErrorListDescription'
import ErrorListWithoutInteraction from 'src/components/Errors/ErrorListWithoutInteraction'

import { getCookie } from '@/utils/cookie'
import { navigationToPagoda } from '@/utils/navigator'
import { host, bookWeb } from './hostConfig'

axios.defaults.baseURL = host
axios.defaults.timeout = 1000 * 60 * 60 * 24;

let _token = getCookie('quickbi_token')

interface NoticeFor6071 {
  messages: Array<string>
}
interface AxiosErrorProps extends AxiosError {
  config: AxiosRequestConfigProps
  response?: AxiosResponseProps
}
interface AxiosResponseProps extends AxiosResponse {
  data: {
    code: number
    data: Array<string>|Array<Array<string>>|NoticeFor6071
    message: string
    detail: string
  }
}
interface AxiosRequestConfigProps extends AxiosRequestConfig {
  showErrorDetail: boolean
  showLoading: boolean
  manualCloseErrorNotification: boolean
}

class Loading {
  counts: number = 0
  ele: HTMLElement = document.getElementById('global-loading') as HTMLElement
  // loadingInstance: any // TODO: // boolean | MessageType = false
  show = () => {
    this.counts++
    if (this.counts <= 0) return
    this.ele.style.opacity = '1'
    // if (this.loadingInstance) return

    // this.loadingInstance = message.loading('加载中...', 0)
  }
  hide = () => {
    this.counts--
    if (this.counts >= 1) return
    this.ele.style.opacity = '0'
    // if (!this.loadingInstance) return

    // setTimeout(() => this.loadingInstance = this.loadingInstance && this.loadingInstance(), 0)
  }
}

const loading = new Loading()
axios.interceptors.request.use((config: any) => {
  if (config.showLoading) {
    loading.show()
  }

  const token = _token || getCookie('quickbi_token')
  config.headers.Authorization = `Bearer ${token}`
  
  return config;
}, (error: AxiosErrorProps) => {
  const { config, code, response, request } = error

  notification.error({
    description: <ErrorDescription message={error.message} detail={error.message}/>,
    ...config.manualCloseErrorNotification && { duration: null },
    message: '请求错误'
  });

  if (config.showLoading) {
    loading.hide()
  }
  
  return Promise.reject(error);
});

axios.interceptors.response.use((response: any) => {
  const { config } = response

  if (config.showLoading) {
    loading.hide()
  }

  return response;
}, (error: AxiosErrorProps) => {
  // 422 错误也在此处抛出
  const { config, code, response, request } = error

  if (config.showLoading) {
    loading.hide()
  }

  const message = response && response.data && response.data.message
  const detail = response && response.data && response.data.detail
  let detailList: Array<string> = []

  if (response && response.data && config.showErrorDetail) {
    switch (response.data.code) {
      // 没有权限, 跳转
      case 401:
        window.location.reload()
        return;
      case 20001:
      case 20003:
        navigationToPagoda()
        return;
      case 6059:
        detailList = response.data.data as Array<string>
        notification.error({
          description: <ErrorDescription detail={detail} detailList={detailList} message={message}/>,
          ...error.config.manualCloseErrorNotification && { duration: null },
          message: '响应错误'
        });
        break;
      case 3013:
      case 3014:
        notification.error({
          description: <ErrorListDescription detailList={response.data.data as Array<Array<string>>} message={message}/>,
          ...error.config.manualCloseErrorNotification && { duration: null },
          message: '响应错误'
        });
        break;
      case 6071:
        const detailListFor6071 = response.data.data as NoticeFor6071
        notification.error({
          description: <ErrorListWithoutInteraction detailList={detailListFor6071.messages} message={message}/>,
          ...error.config.manualCloseErrorNotification && { duration: null },
          message: '响应错误'
        });
        break;
      default:
        notification.error({
          description: <ErrorDescription detail={detail} detailList={detailList} message={message}/>,
          ...error.config.manualCloseErrorNotification && { duration: null },
          message: '响应错误'
        });
    }
    
    return Promise.reject(error);
  }

  if (config.showErrorDetail) {
    notification.error({
      description: <ErrorDescription detail={detail} detailList={detailList} message={message}/>,
      ...error.config.manualCloseErrorNotification && { duration: null },
      message: '响应错误'
    });
  }
  
  return Promise.reject(error);
});

const baseRequest = (config: any) => {
  return axios.request(config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

const getConfig = (config?: object) => {
  return {
    manualCloseErrorNotification: true,
    showErrorDetail: true,
    showLoading: true,
    ...config
  }
}

export default {
  get (url: string, params?: object, config?: object) {
    return baseRequest({
      method: 'get',
      params,
      url,
      ...getConfig(config)
    })
  },
  javaGet (url: string, params?: object, config?: object) {
    return baseRequest({
      method: 'get',
      params,
      baseURL: `${bookWeb}`,
      url,
      ...getConfig(config)
    })
  },
  post (url: string, data: object, config?: object) {
    return baseRequest({
      data,
      method: 'post',
      url,
      ...getConfig(config)
    })
  },
  javaPost (url: string, data: object, config?: object) {
    return baseRequest({
      data,
      method: 'post',
      baseURL: `${bookWeb}`,
      url,
      ...getConfig(config)
    })
  },
  put (url: string, data?: object, config?: object) {
    return baseRequest({
      data,
      method: 'put',
      url,
      ...getConfig(config)
    })
  },
  delete (url: string, data?: object, config?: object) {
    return baseRequest({
      data,
      method: 'delete',
      url,
      ...getConfig(config)
    })
  }
}
