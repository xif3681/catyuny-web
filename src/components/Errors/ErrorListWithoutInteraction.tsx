import * as React from 'react'

interface ComponentProps {
  message?: string;
  detailList?: Array<string>;
}
interface ComponentState {}

export default class ErrorListWithoutInteraction extends React.Component<ComponentProps, ComponentState> {
  render() {
    const { message = '', detailList = [] } = this.props

    const detailNode = detailList.map((item: string, index: number) => (
      <p key={`${index}`} style={{wordBreak: 'break-all', margin: '2px'}}>{`${item}`}</p>
    ))
    
    return (
      <div>
        {/* <p style={{wordBreak: 'break-all', margin: '2px'}}>{message}</p> */}
        <div>{detailNode}</div>
      </div>
    )
  }
}
