import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { ReduxStore } from 'src/reducers'
import * as MenusActions from "@/actions/common"
import { Input, Button } from 'antd';


interface StateProps {

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

  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class Adopt extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    this.props.handleClick({key: 'adopt'})

  }


  render() {

    return (
      <div >
        <div style={{height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.85)'}}></div>
        <div>领养</div>
  

      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adopt)