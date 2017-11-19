import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Editor, EditorState } from 'draft-js';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty }
    this.onChange = {editorState}
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

ReactDom.render(
  <Editor />
  document.getElementById('container')
)
