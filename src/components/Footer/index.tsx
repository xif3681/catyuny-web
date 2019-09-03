import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import * as FooterActions from "@/actions/common"
import { ReduxStore } from 'src/redux/rootReducer'
import './footer.scss'

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
    handleClick: (e: any) => dispatch(FooterActions.handleClick(e))
  }
}
class Footer extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
  }
  render() {
    return (
      < div className="Footer">
        <hr/>
        <div className="foot-text">2019 © 联系方式</div>
      </div >

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
