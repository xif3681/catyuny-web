import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { ReduxStore } from 'src/reducers'
import * as MenusActions from "@/actions/common"
import { Tabs, Input, Button } from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './adopt.scss'
const { TabPane } = Tabs;


interface StateProps {

}

interface DispatchProps {
  handleClick: (e: any) => void

}

interface OwnProps {

}

interface OwnState {
  editorState: any,
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
    this.state = {
      editorState: EditorState.createEmpty(),
    };

  }
  onEditorStateChange = (editorState: any) => {
    this.setState({
      editorState,
    });
  }

  tabPaneItem = (item: any) => {
    if(item.id === '001') {
      const { editorState } = this.state;
      return (
        <Editor
          editorState={editorState}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          toolbarClassName="toolbarClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      )
    } else {
      return (
        <div>图文</div>
      )
    }
  }


  render() {

    const recordType = [
      { id: '001', name: '图文'},
      { id: '002', name: '写博客'},
    ]
    return (
      <div >
        <div style={{height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.85)'}}></div>
        <Tabs defaultActiveKey="001" tabPosition='left' style={{ minHeight: '100vh' }}>
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
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adopt)

