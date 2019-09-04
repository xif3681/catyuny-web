import React, { Component } from 'react'
import Moment from 'moment'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Calendar, Badge } from 'antd';
import { ReduxStore } from 'src/reducers'
import * as MenusActions from "@/actions/common"
import { Tabs, Radio,  Timeline, Icon } from 'antd';
import  {RECORDTYPE , RECORDDATE} from '@/constants/RecordType'
import {List} from 'immutable'

const { TabPane } = Tabs;
let RecordType = List(RECORDTYPE)

interface MyColor {
  type: 'success' | 'processing' | 'default' | 'error' | 'warning', 
  content:string
}

interface StateProps {
  current: string
}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps {

}

interface OwnState {
  mode: "top" | "right" | "bottom" | "left",
  defaultActiveKey: string
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, ReduxStore> = (state) => {
  return {
    current: state.get('menusCurrent').get('current')
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class MyCat extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    this.props.handleClick({key: 'myCat'})
    this.state = {
      mode: 'left',
      defaultActiveKey: RECORDTYPE[0].id
    };


  }

  handleModeChange = (e: any) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  getListData = (value: any) => {
    let listData: MyColor[] = [];
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
    const listData : MyColor[] = this.getListData(value);
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
  selectDate = (date: any) => {
    console.log(Moment(date).format('YYYY-MM-DD HH:mm:ss'))
  }
  tabPaneItem = (item: any) => {
    if(item.id === '000') {
      return (
        <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} onSelect={this.selectDate}/>
      )
    } else {
      const recordData =  List(RECORDDATE)
      return (
        <div style={{paddingTop: '15px'}}>
          <div style={{padding: '15px'}}>{item.name}</div>
            <Timeline mode="alternate">
              {recordData.map(item => {
                if(!item.icon) {
                  return (
                    <Timeline.Item color={item.color} key={item.id}>{item.content} | {item.time}</Timeline.Item>
                  )
                } else {
                  return (
                    <Timeline.Item  dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}key={item.id}>{item.content} | {item.time}</Timeline.Item>
                  )
                }
              })}
          </Timeline>
        </div>
  
      )
    }
  }
  render() {
    const recordType = RecordType.set(0, { 'id': '000' ,  'type': 'success', 'name': '总览', 'creatTime': '2019-09-04', 'canDelete': false })
    return (
      <div >
        <div style={{height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.85)'}}></div>
        <div>
        <Tabs defaultActiveKey={this.state.defaultActiveKey} tabPosition={this.state.mode} style={{ minHeight: '100vh' }}>
          {recordType.map((item, i) => (
            <TabPane tab={item.name} key={item.id}>
              {this.tabPaneItem(item)}
            </TabPane>
          ))}
        </Tabs>
       </div>
    
      </div>
   );
  }
  

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCat)