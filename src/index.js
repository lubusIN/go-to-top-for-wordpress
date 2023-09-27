import { render } from '@wordpress/element';
import App from './app';
import SettingsProvider from './data/context';

window.addEventListener(
    'load',
    function () {
        render(
            <SettingsProvider>
                <App />
            </SettingsProvider>,
            document.querySelector('#go-to-top'),
        );
    },
    false
);