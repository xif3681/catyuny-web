import { getParameter } from '@/utils/history'

// export const navigation = () => {
//   const { host, href, pathname, search } = window.location
//   // 临时处理, 如果是查看dashboard, 在没有token的情况下, 也不做跳转
//   if (pathname.startsWith('/dashboard')) {
//     return
//   }
//   if (pathname !== '/login') {
//     window.location.href = `/login?direct=${pathname}${search}`
//   }
// }

export const navigationToPagoda =  () => {
  const { host, pathname, search, protocol } = window.location
  // 票据只能使用一次
  const oldTicket = getParameter('ticket')
  // 搜索参数
  let newSearch = ''
  if (oldTicket) {
    const reg = new RegExp('\^\(\\?|\^\\&\)\\s*?ticket\\s*?=\\s*?' + oldTicket)
    newSearch = search.replace(reg, '')
  }
  // 跳转（20003/20001）百果园登陆
  window.location.href = `https://cas.pagoda.com.cn/cas2/login?service=${encodeURIComponent(
    `${protocol}//${host}${pathname}${newSearch}`
  )}`
}