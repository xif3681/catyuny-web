import React, { Component } from 'react'
import Moment from 'moment'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Calendar, Badge } from 'antd';
import { ReduxStore } from 'src/reducers'
import * as MenusActions from "@/actions/common"
import { Tabs,  Timeline, Icon , Modal, Form,
  Input,
  Select,} from 'antd';
  import { FormComponentProps } from 'antd/lib/form'
import { RecordTypeInterface , RecordDataInterface} from 'src/interface';
import {List} from 'immutable'

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

interface MyColor {
  type: 'success' | 'processing' | 'default' | 'error' | 'warning', 
  content:string
}

interface StateProps {
  current: string, 
  recordData: List<RecordDataInterface>,
  recordType: List<RecordTypeInterface>,
}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps extends FormComponentProps {

}

interface OwnState {
  // mode: "top" | "right" | "bottom" | "left",
  defaultActiveKey: string,
  ModalText: string,
  visible: boolean,
  confirmLoading: boolean,
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, ReduxStore> = (state) => {
  return {
    current: state.get('menusCurrent').get('current'),
    recordData: List(state.get('recordData').get('data')),
    recordType: List(state.get('recordType').get('data')),

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
      defaultActiveKey: '000',
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };


  }
 // modal
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };


  // calader
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
    this.showModal()
  }

  tabPaneItem = (item: any) => {
    if(item.id === '000') {
      return (
        <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} onSelect={this.selectDate}/>
      )
    } else {
      return (
        <div style={{paddingTop: '15px'}}>
          <div style={{padding: '15px'}}>{item.name}</div>
            <Timeline mode="alternate">
              {this.props.recordData.map(item => {
                if(!item) return
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

  // selete
   onCatChange = (value: any) => {
    console.log(`selected ${value}`);
  }
  
   onTypeChange = (value: any) => {
    console.log(`selected ${value}`);
  }
  
   onBlur = () => {
    console.log('blur');
  }
  
   onFocus = () => {
    console.log('focus');
  }
  
   onSearch = (val: any) => {
    console.log('search:', val);
  }
  render() {
    const recordType =  this.props.recordType.set(0, { 'id': '000' ,  'type': 'success', 'name': '总览', 'creatTime': '2019-09-04', 'canDelete': false })
    const { visible, confirmLoading, ModalText } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <div >
        <div style={{height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.85)'}}></div>
        <div>
        <Tabs defaultActiveKey={this.state.defaultActiveKey} tabPosition='left' style={{ minHeight: '100vh' }}>
          {recordType.map((item, i) => {
            if(!item) return
            return (
              <TabPane tab={item.name} key={item.id}>
                {this.tabPaneItem(item)}
              </TabPane>
            )
          })}
        </Tabs>
       </div>
       <Modal
          title="创建新记录"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
        <Form  className="login-form" {...formItemLayout}>
          <Form.Item label="喵主子">
            {getFieldDecorator('cat', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a cat"
              optionFilterProp="children"
              onChange={this.onCatChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option: any) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>,
            )}
          </Form.Item>
          <Form.Item label="类型">
            {getFieldDecorator('type', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a type"
              optionFilterProp="children"
              onChange={this.onTypeChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option: any) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>,
            )}
          </Form.Item>
          <Form.Item label="内容">
          {getFieldDecorator('content', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <TextArea rows={4} />
            )}

          </Form.Item>
        </Form>
        </Modal>
    
      </div>
   );
  }
  

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(MyCat))