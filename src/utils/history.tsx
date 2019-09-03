import { Pathname } from "history"
import { ObjectInterface } from '@/tsTypes'

export const parseSourceId = (pathname: Pathname, regExp: RegExp) => regExp.exec(pathname)

export const extractIdFromPathParams = (pathParams: ObjectInterface, key: string) => pathParams && pathParams[key]

export const getParameter = (key: string) => {
  const { search } = window.location
  const regExp = new RegExp ('\\s?' + key + '\\s?=\\s?([^\&\\s]*)' , 'i' )
  const res = regExp.exec(search)

  if (res) return res[1]

  return null
}