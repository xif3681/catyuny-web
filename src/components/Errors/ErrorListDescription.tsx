import * as React from 'react'
import { Icon } from 'antd'

interface ComponentProps {
  message?: string;
  detailList?: Array<Array<string>>;
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
    const { message, detailList } = this.props
    const { visible } = this.state
    const type = !visible ? 'caret-down' : 'caret-up'

    let detailNode

    if (detailList instanceof Array && detailList.length) {
      detailNode = (<div>
        {detailList.map((list: Array<string>, index: number) => {
          let s = ''
          if (list instanceof Array && list.length) {
            list.forEach((item: string, index: number) => {
              if (index === 0) {
                s += `第${item + 2}行`
              } else {
                s += `  ${item}`
              }
            })
          }
          return <p style={{marginBottom: '4px'}} key={`${index}`}>{s}</p>
        })}
      </div>)
    }
    
    return (
      <div>
        <span style={{cursor: 'pointer'}} onClick={this.handleClick}>
          <span style={{wordBreak: 'break-all'}}>{message}<Icon type={type}/></span>
        </span>
        {visible && <div>{detailNode}</div>}
      </div>
    )
  }
}
