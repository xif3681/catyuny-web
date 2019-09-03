import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import {  Menu, Icon } from 'antd';
import * as MenusActions from "@/actions/common"
import { ReduxStore } from 'src/redux/rootReducer'
import './menus.scss'
const { SubMenu } = Menu;

interface StateProps {
  current: string
}

interface DispatchProps {
  handleClick: (e: any) => void
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
    handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class Menus extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }
  render() {
    return (
      <div className="Menus">
      < div className="position-ab">
        <Menu onClick={this.props.handleClick} selectedKeys={[this.props.current]} mode="horizontal" >
          <Menu.Item key="home">
            <Icon type="home" theme="twoTone" twoToneColor="#52c41a" />
            社区
          </Menu.Item>
          
          <Menu.Item key="mycat">
            <Icon type="heart" theme="twoTone" twoToneColor="#52c41a" />
            我的喵
          </Menu.Item>

          <Menu.Item key="adopt">
            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
            领养
          </Menu.Item>

          <Menu.Item key="board">
            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
            寄宿
          </Menu.Item>


          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />
                扩展
              </span>
            }
          >
            <Menu.Item key="extend:1">品种介绍</Menu.Item>
            <Menu.Item key="extend:2">必备知识</Menu.Item>
            <Menu.Item key="extend:3">产品推荐</Menu.Item>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="smile" theme="twoTone"  />
                活动
              </span>
            }
          >
            <Menu.Item key="activity:1">榜单</Menu.Item>
            <Menu.Item key="activity:2">投票</Menu.Item>
            <Menu.Item key="activity:3">奖励</Menu.Item>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="message" theme="twoTone" twoToneColor="#faad14" />
                消息
              </span>
            }
          >
            <Menu.ItemGroup title="消息">
              <Menu.Item key="inform:1">Option 1</Menu.Item>
              <Menu.Item key="inform:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="通知">
              <Menu.Item key="inform:3">Option 3</Menu.Item>
              <Menu.Item key="inform:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="smile" theme="twoTone" />
                帮助
              </span>
            }
          >
            <Menu.ItemGroup title="推荐帮助">
              <Menu.Item key="help:1">Option 1</Menu.Item>
              <Menu.Item key="help:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Item key="help:3">联系医生</Menu.Item>

          </SubMenu>
        </Menu>
      </div >
      </div>
     

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menus)
