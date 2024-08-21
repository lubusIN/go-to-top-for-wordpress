<?php

/**
 * Plugin Name: Go To Top
 * Description: Add a smooth 'Go to Top' button for quick page scrolling.
 * Version: 1.0.0
 * Requires PHP: 7.4
 * Author: Lubus
 * Author URI: https://lubus.in/
 * Contributor: Lubus, https://lubus.in/
 * Text Domain: go-to-top
 * 
 * @package go-to-top
 */

namespace Lubus\GoToTop;

use Lubus\GoToTop\Admin\{
    Admin_Menu,
    Enqueue_Scripts
};
use Lubus\GoToTop\Rest\Settings;

defined('ABSPATH') || exit;

require_once 'vendor/autoload.php';
require_once 'inc/functions.php';

if (!class_exists('GoToTop')) {

    /**
     * Go To Top Main Class
     */
    class GoToTop
    {
        /**
         * The single instance of the class.
         *
         * @var GoToTop
         */
        protected static $_instance = null;

        /**
         * Singleton instance method.
         *
         * @return self
         */
        public static function instance()
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        /**
         * Constructor to initialize the plugin.
         */
        public function __construct()
        {
            $this->setup_constants();
            $this->bootstrap();
        }

        /**
         * Setup plugin constants.
         */
        private function setup_constants()
        {
            // Plugin version.
            if (!defined('WGTT_VERSION')) {
                define('WGTT_VERSION', '0.1.0');
            }

            // Plugin Root File.
            if (!defined('WGTT_PLUGIN_FILE')) {
                define('WGTT_PLUGIN_FILE', __FILE__);
            }

            // Plugin Folder Path.
            if (!defined('WGTT_PLUGIN_DIR')) {
                define('WGTT_PLUGIN_DIR', plugin_dir_path(WGTT_PLUGIN_FILE));
            }

            // Plugin Folder URL.
            if (!defined('WGTT_PLUGIN_URL')) {
                define('WGTT_PLUGIN_URL', plugin_dir_url(WGTT_PLUGIN_FILE));
            }

            // Plugin Basename aka: "go-to-top-for-wordpress/go-to-top.php".
            if (!defined('WGTT_PLUGIN_BASENAME')) {
                define('WGTT_PLUGIN_BASENAME', plugin_basename(WGTT_PLUGIN_FILE));
            }
        }

        /**
         * Bootstraps the plugin.
         */
        private function bootstrap()
        {
            new Admin_Menu();
            new Enqueue_Scripts();
            new Settings();
        }
    }
}

return GoToTop::instance();
