
export declare type ResourceType = 'reports' | 'datasources' | 'datasets' | 'profile' | 'management'
// 页面枚举
export enum PageEnum {
  DATASOURCE = 'dataSource',
  DATASET = 'dataSet',
  REPORT = 'report',
  MANAGEMENT = 'management',
  USERANDPERMISSION = 'userAndPermission',
  USER = 'user',
  USERGROUP = 'userGroup',
  USERROLE = 'userRole',
  REPORTMANAGEMENT = 'reportManagement',
  REPORTURL = 'reportUrl',
  REPORTSTATISTIC = 'reportStatistic',
}
// 主页面枚举
export interface MaiPageProps {
  path: string
  icon: string
  label: string
  keys: PageEnum
}
// 请求状态
export enum LoadStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail'
}
// token 信息
export interface TokenInfo {
  token: string
  status: LoadStatus
}
// 页面权限信息
export interface AccessInfo {
  status: LoadStatus
  pagePermissions: PageEnum[]
}

export interface UserInfo {
  [index: string]: any;
  id: string;
  username: string;
  email: string;
  chineseName: string;
  state: 'system' | 'valid' | 'invalid' | '';
  groupIds: string[],
  createdAt: string;
  attrs?: {
    [x: string]: (string | null)[]
  }
}

export default interface User {
  userInfo: UserInfo
  tokenInfo: TokenInfo
  accessInfo: AccessInfo,

}