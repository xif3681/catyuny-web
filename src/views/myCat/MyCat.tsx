import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Calendar, Badge } from 'antd';
import { ReduxStore } from 'src/reducers'


interface StateProps {
  current: string
}

interface DispatchProps {
  // handleClick: (e: any) => void
}

interface OwnProps {

}

interface OwnState {
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, ReduxStore> = (state) => {
  return {
    current: state.get('menusCurrent').get('current')
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    // handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class MyCat extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)

  }

  getListData = (value: any) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  dateCellRender= (value: any) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.length > 0 && listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  getMonthData = (value: any) => {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  monthCellRender = (value: any) => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  render() {
    return (
      <div style={{paddingTop: '50px'}}>
        <div>{this.props.current}</div>
            <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />,
    
      </div>
      );
  }
  

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCat)