<?php

/**
 * Plugin Name: Go To Top
 * Update URI:  lubus-go-to-top
 */

// admin menu setup
require_once plugin_dir_path(__FILE__) . 'inc/admin-menu.php';

// load the scripts
require_once plugin_dir_path(__FILE__) . 'inc/enqueue-scripts.php';

// REST API settings registration
require_once plugin_dir_path(__FILE__) . 'inc/rest-settings.php';

// load functions.php
require_once plugin_dir_path(__FILE__) . 'inc/functions.php';
