import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { ReduxStore } from 'src/reducers'
import * as MenusActions from "@/actions/common"
import { Tabs, Input, Button, Divider, Upload, Icon, Modal } from 'antd';
import { EditorState , convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './adopt.scss'
const { TabPane } = Tabs;
const { TextArea } = Input;
function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
function uploadImageCallBack(file: any) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

interface  recordTypetInterfase     {
  id: string,
  name: string,

}
interface StateProps {

}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps {

}

interface OwnState {
  textAreaContent: string,
  recordType: Array<recordTypetInterfase>
  activeKey: string,
  editorState: any,
  contentState: any,
  previewVisible: boolean,
  previewImage: string,
  fileList: any,
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
      textAreaContent: '',
      recordType: [
        { id: '001', name: '图文'},
        { id: '002', name: '写博客'},
      ],
      activeKey: '001',
      editorState: EditorState.createEmpty(),
      contentState: {},
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],

    };

  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList } : any) => this.setState({ fileList });
  onEditorStateChange = (editorState: any) => {
    console.log(editorState)
    this.setState({
      editorState,
    });
  }
  onContentStateChange = (contentState: any) => {
    console.log(contentState)
    this.setState({
      contentState,
    });
  }

  handleInputChange = (event: any) => {
    const { value } = event.target
    this.setState({
      textAreaContent: value
    })
  }

  getCurrentContent = ( e: any) => {
    console.log(e)
  }

  contentSummit = () => {
    if(this.state.activeKey === '001') {
      const textAreaContent = this.state.textAreaContent + '#话题#'
      this.setState({
        textAreaContent,
      })

    } else {
      console.log('002')
      console.log(this.state.editorState)
      // const editorState = this.state.editorState + '#<a>话题</a>#'
      // this.onEditorStateChange(editorState)
    }
  }
  activeKeyChange = (activeKey: any) => {
    this.setState({
      activeKey,
    })
  }




  render() {
    const { previewVisible, previewImage, fileList, editorState, recordType, activeKey, textAreaContent, contentState } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const summitButton = (
      <div className="border-style" style={{textAlign: 'right'}}>
        <a style={{marginRight:'15px'}} onClick={this.contentSummit}> # 话题</a>
        <Button>发布</Button>
      </div>
    )
    const tabPaneItem = recordType.map((item, i) => {
      if(!item) return
      if(item.id === '002') {
        return (
          <TabPane tab={item.name} key={item.id}>
            <div style={{margin: "30px", width: "80%"}}>
              <Editor
                editorState={editorState}
                initialContentState={contentState}
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                toolbarClassName="toolbarClassName"
                onEditorStateChange={this.onEditorStateChange}
                onContentStateChange={this.onContentStateChange}
                // toolbar={{
                //   inline: { inDropdown: true },
                //   list: { inDropdown: true },
                //   textAlign: { inDropdown: true },
                //   link: { inDropdown: true },
                //   history: { inDropdown: true },
                //   image: { uploadCallback: getBase64, alt: { present: true, mandatory: true } },
                // }}
              />
               {summitButton}
            </div>
            <div style={{margin: "30px", width: "80%"}}>
              <textarea style={{width: "100%"}}
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              />

            </div>

          </TabPane>

        )
      } else {
        return (
          <TabPane tab={item.name} key={item.id}>
          <div style={{margin: "30px", width: "80%"}}>
            <Divider orientation="left">添加文本</Divider>
            <TextArea rows={4} onChange={this.handleInputChange} value={textAreaContent}/>
            <div className="border-style">
             
              <div className="clearfix">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
            {summitButton}
            </div>
            <div></div>
  
          </div>
          </TabPane>
        )
      }
    })
    return (
      <div >
        <div style={{height: '50px', backgroundColor: 'rgba(0, 0, 0, 0.85)'}}></div>
        <Tabs defaultActiveKey={activeKey} tabPosition='left' style={{ minHeight: '100vh' }} onChange={this.activeKeyChange}>
          {tabPaneItem}
        </Tabs>

  

      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adopt)

