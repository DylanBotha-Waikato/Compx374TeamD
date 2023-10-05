import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import '../styles/DraftEditor.css'; // Import the CSS file

class DraftEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    return (
      <div className="draft-editor-container">
        {/* Apply CSS class to the editor content */}
        <div className="draft-editor-content">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Comment..."
          />
        </div>
      </div>
    );
  }
}

export default DraftEditor;
