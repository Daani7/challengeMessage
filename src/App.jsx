import React from 'react';
import { TextProvider } from './store/Context';
import Form from './components/Form';
import RenderTextList from './components/RenderTextList';

const App = () => {
    return (
        <TextProvider>
            <div>
                <h1>Text Renderer</h1>
                <Form />
                <hr />
                <RenderTextList />
            </div>
        </TextProvider>
    );
};

export default App;
