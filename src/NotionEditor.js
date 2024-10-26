import React, { useState, useRef } from 'react';
import { Editor, EditorState, RichUtils, Modifier, AtomicBlockUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './NotionEditor.css';

function NotionEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef(null);

    // Funções para aplicar estilos de texto
    const toggleInlineStyle = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    // Função para adicionar cor ao texto INCOMPLETA

    // const applyColor = (color) => {
    //     const selection = editorState.getSelection();
    //     const contentState = editorState.getCurrentContent();
    //     const newContentState = Modifier.applyInlineStyle(contentState, selection, color);
    //     setEditorState(EditorState.push(editorState, newContentState, 'change-inline-style'));
    // };

    // Função para adicionar imagem

    // const addImage = (url) => {
    //     const contentState = editorState.getCurrentContent();
    //     const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
    //     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    //     setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    // };

    // Função para alinhamento de texto

    // const applyAlignment = (alignment) => {
    //     setEditorState(RichUtils.toggleBlockType(editorState, alignment));
    // };

    return (
        <div className="editor-container">
            {/* Barra de ferramentas */}
            <div className="toolbar">
                {/* Estilos de texto */}
                <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('BOLD'); }}>B</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('ITALIC'); }}>I</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleInlineStyle('UNDERLINE'); }}>U</button>
                
                {/* Títulos e listas */}
                <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('header-one'); }}>H1</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('header-two'); }}>H2</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('blockquote'); }}>Quote</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('unordered-list-item'); }}>UL</button>
                <button onMouseDown={(e) => { e.preventDefault(); toggleBlockType('ordered-list-item'); }}>OL</button>

                {/* Alinhamento */}
                {/* <button onMouseDown={(e) => { e.preventDefault(); applyAlignment('left'); }}>Left</button>
                <button onMouseDown={(e) => { e.preventDefault(); applyAlignment('center'); }}>Center</button>
                <button onMouseDown={(e) => { e.preventDefault(); applyAlignment('right'); }}>Right</button> */}

                {/* Cores */}
                {/* <button onMouseDown={(e) => { e.preventDefault(); applyColor('RED'); }}>Red</button>
                <button onMouseDown={(e) => { e.preventDefault(); applyColor('GREEN'); }}>Green</button>
                <button onMouseDown={(e) => { e.preventDefault(); applyColor('BLUE'); }}>Blue</button> */}

                {/* Adicionar Imagem */}
                {/* <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const url = prompt("Enter the URL of the image:");
                        if (url) addImage(url);
                    }}
                >
                    Add Image
                </button> */}
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
    );
}

export default NotionEditor;
