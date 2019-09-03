const productionHost = 'api/v1'
// const testHost = 'http://127.0.0.1:7001/'
const testHost = '/api'

const uploadProductionHost = 'api/v1'
const bookWebHost = '/order'

export const host =  process.env.NODE_ENV === 'production' ? productionHost: testHost;
export const bookWeb = process.env.NODE_ENV === 'production' ? uploadProductionHost: bookWebHost;
