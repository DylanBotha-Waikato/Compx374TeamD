import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "../styles/DraftEditor.css";


function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const test = document.getElementsByClassName('preview');

  console.log(test);

  return (
    <div className="textEditor">
      <header className="App-header">
        Create Post
      </header>
      <button>Press me</button>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        
      />
  
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>
      
  </div>
  )
}

export default TextEditor;

