import Moment from 'moment'

export const formatTime = (text?: string|number, formatter: string = 'YYYY-MM-DD HH:mm:ss') => {
  return text ? Moment(text).format(formatter) : undefined
}