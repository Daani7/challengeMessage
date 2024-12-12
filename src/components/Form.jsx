import React, { useState, useContext } from 'react';
import { Context } from '../store/Context';

const Form = () => {
    const { dispatch } = useContext(Context);
    const [text, setText] = useState('');
    const [color, setColor] = useState('palevioletred');
    const [size, setSize] = useState(15);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        dispatch({
            type: 'ADD_TEXT',
            payload: { text, color, size },
        });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Saisir le texte :</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label>Selectionnez un rendu :</label>
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="palevioletred">PaleVioletRed</option>
                    <option value="tomato">Tomato</option>
                </select>
            </div>
            <div>
                <label>Taille du texte :</label>
                <select value={size} onChange={(e) => setSize(parseInt(e.target.value))}>
                    {[15, 16, 17, 18, 19, 20].map((s) => (
                        <option key={s} value={s}>
                            {s}px
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Valider</button>
        </form>
    );
};

export default Form;
