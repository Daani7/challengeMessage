import React, { useContext } from 'react';
import { Context } from '../store/Context';
import RenderTextForm from './RenderTextForm';

const RenderTextList = () => {
    const { state } = useContext(Context);

    return (
        <div>
            {state.texts.map((textData, index) => (
                <RenderTextForm key={index} index={index} {...textData} />
            ))}
        </div>
    );
};

export default RenderTextList;
