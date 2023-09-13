<?php

/**
 * Plugin Name: Go To Top
 * Update URI:  lubus-go-to-top
 */

//g2t

function g2t_admin_menu()
{
    // Create a new admin page for our app.
    add_menu_page(
        __('Go To Top', 'gototop'),
        __('Go To Top', 'gototop'),
        'manage_options',
        'go-to-top',
        function () {
            echo '
            <h2>Go To Top</h2>
            <div id="go-to-top"></div>
        ';
        },
        'dashicons-arrow-up-alt2',
        2
    );
}

add_action('admin_menu', 'g2t_admin_menu');

function g2t_wp_admin_scripts($hook)
{
    // Load only on ?page=my-first-gutenberg-app.
    if ('toplevel_page_go-to-top' !== $hook) {
        return;
    }

    // Load the required WordPress packages.

    // Automatically load imported dependencies and assets version.
    $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

    // Enqueue CSS dependencies.
    foreach ($asset_file['dependencies'] as $style) {
        wp_enqueue_style($style);
    }

    // Load our app.js.
    wp_register_script(
        'go-to-top',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_enqueue_script('go-to-top');

    // Load our style.css.
    wp_register_style(
        'go-to-top',
        plugins_url('style.css', __FILE__),
        array(),
        $asset_file['version']
    );
    wp_enqueue_style('go-to-top');
}

add_action('admin_enqueue_scripts', 'g2t_wp_admin_scripts');
