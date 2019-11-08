import React from 'react';
import { render } from 'react-dom';
import FirstComponent from './components/FirstComponent'

render(
    <div>
        <FirstComponent></FirstComponent>
    </div>,
    document.querySelector('[data-app="react"]')
);
