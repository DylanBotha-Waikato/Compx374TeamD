import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "../styles/DraftEditor.css";

//The textbox and toolbar for the create post page.
function TextEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);
  //gets the content from the textbox and converts it to html
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);
  //cleans the html up to be readable html
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    //displays the text box and adds some of the functionality to the toolbar
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
      {/* Previews the cleaned html to the user outside the textbox */}
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>
      
  </div>
  )
}

export default TextEditor;

