const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    externals: {
        ...defaultConfig.externals,
        '@wordpress/api-fetch': 'wp.apiFetch',
    },
};