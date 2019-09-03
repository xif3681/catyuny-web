import request from './request'

// const host = process.env.NODE_ENV === 'production' ? '118.89.18.229' : '118.89.18.229'
// const port = process.env.NODE_ENV === 'production' ? '10008' : '10008'
// const baseURL = `http://${host}:${port}/order-service/api/v1`
// const baseURL = 'http://192.168.10.85:10008/order-service/api/v1'
// const baseURL = 'http://localhost:10008/order-service/api/v1'

const baseURL = '/order-service/api/v1'

// 大区周计划查询
export const queryWeekOrgOrder = ( disCode: string ) => {
  return request.javaGet(`${baseURL}/week/${disCode}/queryWeekOrgOrder`)
}
