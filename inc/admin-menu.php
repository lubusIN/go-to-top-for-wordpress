<?php
function g2t_admin_menu()
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

add_action('admin_menu', 'g2t_admin_menu');
