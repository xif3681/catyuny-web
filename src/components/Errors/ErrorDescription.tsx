import * as React from 'react'
import { Icon } from 'antd'

interface ComponentProps {
  detail?: any;
  message?: string;
  detailList?: Array<string>;
}
interface ComponentState {
  visible: boolean;
}
export default class ErrorDescription extends React.Component<ComponentProps, ComponentState> {
  state = {
    visible: false
  }

  handleClick = () => this.setState({ visible: !this.state.visible })

  render() {
    const { detail, message, detailList } = this.props
    const { visible } = this.state
    const type = !visible ? 'caret-down' : 'caret-up'

    const detailNode = detailList instanceof Array && detailList.length ?
      <div>{detailList.map((detail: string, index: number) => {
        return <p style={{marginBottom: '4px'}} key={`${index}`}>{index}、 {detail}</p>
      })}</div>
      :
      detail && <Icon type={type}/>
    return (
      <div>
        <span style={{cursor: 'pointer'}} onClick={this.handleClick}>
          <span style={{wordBreak: 'break-all'}}>{message}</span>
          {detailNode}
        </span>
        {visible && detail && <div>{detail}</div>}
      </div>
    )
  }
}
