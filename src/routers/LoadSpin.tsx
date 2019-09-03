import * as React from 'react'

import { Spin } from 'antd'

interface ComponentProps {
  message?: string
}
interface ComponentState {}
export default class LoadSpin extends React.Component<ComponentProps, ComponentState> {
  render() {
    return <Spin/>
  }
}