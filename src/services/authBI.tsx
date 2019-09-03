import Request from './requestBI'
import { PageEnum, UserInfo } from 'src/interface/user'

// 通用登陆接口
export const login = (username:string, password: string) => Request.post('/user/login', { username, password })

/**
 * 百果园定制
 * 单点登陆接口, 使用该接口获取token
 * 取代login登陆获取用户信息
 */
export const pagodaLogin = (params: { ticket: string }): Promise<{userId: string, token: string}> => Request.post('/user/casLogin', params)

// 获取当前用户的部分信息
export const loadUserCurrent = () => Request.get('/user/current')
// 获取当前用户信息 & 用户权限
export const loadUserInfoMixedAccess = (): Promise<{ current: UserInfo, permissions: { pagePermissions: PageEnum[] } }> => Request.get(`/user/currentMix`)


