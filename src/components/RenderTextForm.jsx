import React, { useContext } from 'react';
import { Context } from '../store/Context';

const RenderTextForm = ({ index, text, color, size }) => {
    const { dispatch } = useContext(Context);

    const handleDelete = () => {
        dispatch({ type: 'REMOVE_TEXT', payload: index });
    };

    return (
        <div>
            <p style={{ color, fontSize: `${size}px` }}>{text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default RenderTextForm;
