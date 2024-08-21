<?php

namespace Lubus\GoToTop\Admin;

/**
 * Admin_Menu handles adding a menu page in the WordPress admin.
 */
class Admin_Menu
{

    /**
     * Constructor that initializes the WordPress hook.
     */
    public function __construct()
    {
        add_action('admin_menu', array($this, 'menu'));
    }

    /**
     * Registers a new menu page in the WordPress admin.
     */
    public function menu()
    {
        add_menu_page(
            __('Go To Top', 'gototop'),
            __('Go To Top', 'gototop'),
            'manage_options',
            'go-to-top',
            function () {
                echo '<div id="go-to-top"></div>';
            },
            'dashicons-arrow-up-alt2',
            2
        );
    }
}
