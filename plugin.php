<?php
/**
 * Plugin Name: wpmastery-code-block — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: wpmastery-code-block — is a Gutenberg plugin created via create-guten-block.
 * Author: foack
 * Author URI: https://wpmastery.xyz
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
