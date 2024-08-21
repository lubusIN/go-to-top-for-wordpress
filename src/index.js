/**
 * WordPress dependencies.
 */
import { createRoot } from 'react-dom/client';
import '@wordpress/components/build-style/style.css';

/**
 * Internal dependencies.
 */
import SettingsProvider from './data/context';
import App from './app';
import './app.scss'

window.addEventListener(
    'load',
    function () {
        const container = document.querySelector('#go-to-top');
        const root = createRoot(container);
        root.render(
            <SettingsProvider>
                <App />
            </SettingsProvider>
        );
    },
    false
);