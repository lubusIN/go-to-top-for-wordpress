<?php
function enqueue_g2t_assets($asset_file)
{
    // Enqueue CSS dependencies.
    foreach ($asset_file['dependencies'] as $style) {
        wp_enqueue_style($style);
    }

    // Load app.js.
    wp_register_script(
        'go-to-top',
        plugins_url('build/index.js', dirname(__FILE__)),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_enqueue_script('go-to-top');

    // Load style.css.
    wp_register_style(
        'go-to-top',
        plugins_url('style.css', dirname(__FILE__)),
        [],
        $asset_file['version']
    );
    wp_enqueue_style('go-to-top');
}

function g2t_wp_admin_scripts($hook)
{
    // Load only on ?page=go-to-top
    if ('toplevel_page_go-to-top' !== $hook) {
        return;
    }

    // Automatically load imported dependencies and assets version.
    $asset_file = include plugin_dir_path(dirname(__FILE__)) . 'build/index.asset.php';

    enqueue_g2t_assets($asset_file);
}

add_action('admin_enqueue_scripts', 'g2t_wp_admin_scripts');

function ls_g2t_enqueue_scripts()
{
    wp_enqueue_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js');
}
add_action('wp_enqueue_scripts', 'ls_g2t_enqueue_scripts');
