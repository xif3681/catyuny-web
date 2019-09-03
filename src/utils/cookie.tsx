import { ObjectInterface } from "src/tsTypes";

function decode (value: string) {
  try {
    return decodeURIComponent(value)
  } catch (e) {
    console.debug('decode error')
    return undefined
  }
}

function parse (str: string) {
  const obj: ObjectInterface = {}
  const pairs = str.split(/ *; */)
  let pair
  if (pairs[0] === '') {
    return obj
  }
  for (const item of pairs) {
    pair = item.split('=')
    const tempy = decode(pair[0])
    if (tempy !== undefined) {
      obj[tempy] = decode(pair[1])
    }
  }
  return obj
}

function all (cookie?: string): any {
  let str
  try {
    str = cookie || document.cookie
  } catch (err) {
    return {}
  }
  return parse(str)
}

export function getCookie (name: string, cookie?: string) {
  return all(cookie)[name]
}

export function setCookie (name: string, value: string, minite?: number) {
  const cookie = document.cookie
  if (cookie === undefined) {
    console.debug('get cookie error')
  }
  const now = new Date().getTime()
  const expires = new Date(now + (minite ? minite : 1440) * 60 * 1000)
  document.cookie = `${decode(name)}=${decode(value)}; expires=${expires}; path=/;`
}

export function clearCookie (name: string) {
  setCookie(name, ' ', -1)
}
