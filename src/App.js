import React, { useState, useRef } from 'react';
import { Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './App.css'

function App() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef(null);

    const toggleInlineStyle = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    return (
        <div className="App">

            <div className='title'>
                <h1>Text Editor</h1>
            </div>

            <div className="editor-container">
                <div className="toolbar">
                    <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('BOLD'); }}>B</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('ITALIC'); }}>I</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('UNDERLINE'); }}>U</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('header-one'); }}>H1</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('header-two'); }}>H2</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('blockquote'); }}>Quote</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('unordered-list-item'); }}>UL</button>
                    <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('ordered-list-item'); }}>OL</button>
                </div>
    
                {/* Editor */}
                <div className="editor" onClick={() => editorRef.current.focus()}>
                    <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        placeholder="Digite aqui..."
                        ref={editorRef}
                    />
                </div>
            </div>


        </div>
    );
}

export default App;