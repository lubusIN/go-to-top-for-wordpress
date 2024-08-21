<?php

namespace Lubus\GoToTop\Admin;

/**
 * Handles the enqueuing of scripts and styles.
 */
class Enqueue_Scripts
{
    /**
     * Constructor that initializes WordPress hooks.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
    }

    /**
     * Enqueues JavaScript and CSS files.
     *
     * @param array $asset_file Array containing the dependencies and version of the assets.
     */
    private function enqueue_assets($asset_file)
    {
        // Load app.js.
        wp_register_script(
            'go-to-top',
            plugins_url('build/index.js', WGTT_PLUGIN_FILE),
            $asset_file['dependencies'],
            $asset_file['version']
        );
        wp_enqueue_script('go-to-top');

        wp_register_style(
            'go-to-top-wp',
            plugins_url('build/style-index.css', WGTT_PLUGIN_FILE),
            [],
            '1.0.0'
        );
        wp_enqueue_style('go-to-top-wp');

        wp_register_style(
            'go-to-top-backend',
            plugins_url('build/index.css', WGTT_PLUGIN_FILE),
            [],
            '1.0.0'
        );
        wp_enqueue_style('go-to-top-backend');
    }

    /**
     * Enqueues admin scripts and styles on the plugin's settings page.
     *
     * @param string $hook The current admin page hook.
     */
    public function enqueue_admin_scripts($hook)
    {
        // Bail out if not on the Go-To-Top settings page.
        if ('toplevel_page_go-to-top' !== $hook) {
            return;
        }

        // Load the asset file containing dependencies and version information.
        $asset_file = array(
            'dependencies' => [],
            'version'      => '1.0.0',
        );

        $this->enqueue_assets($asset_file);
    }
}
