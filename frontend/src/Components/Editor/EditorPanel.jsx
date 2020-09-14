import React from 'react';
import { useDragging } from '../Utils/Dragable';

const EditorPanel = (props) => {
    const [ref, x, y, isDragging] = useDragging(450, 150);
    return ( 
        <div className="editorPanel"
        ref={ref}
        style={{
            left: x,
            top: y,
            opacity: isDragging ? 0.6 : 1
        }}
        >
            <div className="panelHeader">
                <span>Panel</span>
                <span onClick={props.onClose}>X</span>
            </div>
            {JSON.stringify(props.el.style)}
        </div>
     );
}
 
export default EditorPanel;