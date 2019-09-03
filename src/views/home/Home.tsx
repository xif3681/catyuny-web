import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import * as HomeActions from "src/actions/tabs"
import { ReduxStore } from 'src/redux/rootReducer'
import CarouselPeature from 'src/components/CarouselPeature';
import RoomList from 'src/components/RoomList';

import './home.scss'
import { Input, Button } from 'antd';
import { RoomInfoInterface } from 'src/interface/common';
const { Search } = Input;


interface StateProps {
  count: Number,
  roomInfo: Array<RoomInfoInterface>
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
  reset: () => void
}

interface OwnProps {

}

interface OwnState {
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, ReduxStore> = (state) => {
  return {
    count: state.get('tabs').get('count'),
    roomInfo: state.get('roomInfo').get('data')
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(HomeActions.increment()),
    decrement: () => dispatch(HomeActions.decrement()),
    reset: () => dispatch(HomeActions.reset()),
  }
}
class Home extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)

  }

  pictureList = [
    { src: require('src/assets/images/白云先生冬季系列.jpeg') },
    { src: require('src/assets/images/小夜人系列.jpeg') },
    { src: require('src/assets/images/毕奇系列.jpeg') },
    { src: require('src/assets/images/仙人掌系列.jpeg') },
  ];


  static navigationOptions = {
    title: 'AuthLoading',
    tabBarVisible: false
  };
  componentDidMount() {
    console.log(this.props)
  }


  render() {
    const roomInfo: RoomInfoInterface  = this.props.roomInfo[0]
    // this.props.roomInfo.shift()
    return (
      <div className="Home">
        <CarouselPeature pictureList={roomInfo}></CarouselPeature>
        <div className="home-content">
          <Search placeholder="input search text" size="large" onSearch={value => console.log(value)} enterButton />
          <Button onClick={this.props.increment}>+</Button>
          <Button onClick={this.props.decrement}>-</Button>
          <div>{this.props.count}</div>
          {this.props.roomInfo.map((item , index) => {
            if( index === 0) return
            else {
              return (
                <RoomList roomInfo={item} key={index}/>
              )
            }


          })}
        </div>

      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)