import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { DispatchFunction } from '@/tsTypes'
import {  Menu, Icon } from 'antd';
import * as MenusActions from "@/actions/common"
import { ReduxStore } from 'src/reducers'
import { PAGEINFO } from '@/constants'
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
  // constructor(props: StateProps & DispatchProps & OwnProps) {
  //   super(props)
  //   // this._bootstrapAsync()
  // }
  render() {
    const menuItem = PAGEINFO.map((item, index )=> {
      if (!item.SubMenu) {
        return (
          <Menu.Item key={item.key}>
            <NavLink to={item.path}><Icon type={item.icon} theme="twoTone" twoToneColor={item.twoToneColor} />{item.label}</NavLink> 
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key}
              title={
                <span className="submenu-title-wrapper">
                  <Icon type={item.icon} theme="twoTone" twoToneColor={item.twoToneColor}/>
                  {item.label}
                </span>
              }
            >
              {item.children && item.children.map(subItem => {
                return (
                  <Menu.Item key={subItem.key}>
                    <NavLink to={subItem.path}>{subItem.label}</NavLink> 
                  </Menu.Item>
                )
              })}
            </SubMenu>
        )
      }
    })

    return (
      <div className="Menus">
      < div className="position-ab">
        {/* <Menu onClick={this.props.handleClick} selectedKeys={[this.props.current]} mode="horizontal" > */}
        <Menu onClick={this.props.handleClick} selectedKeys={[this.props.current]} mode="horizontal" >
          {menuItem}
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
