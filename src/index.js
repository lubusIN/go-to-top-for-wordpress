import { render } from '@wordpress/element';
import App from './app';

window.addEventListener(
    'load',
    function () {
        render(
            <App />,
            document.querySelector('#go-to-top')
        );
    },
    false
);