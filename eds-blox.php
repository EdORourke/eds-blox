<?php
/**
 * Plugin Name:       Eds Blox
 * Description:       A collection of blocks by Ed O&#39;Rourke
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Ed O&#39;Rourke
 * Text Domain:       eds-blox
 * Domain Path:       eds-blox
 *
 * @package EdsBlox
 */
namespace EdORourkeDotNet;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
final class EdsBlox {
	static function init() {

		add_action('init', function(){

			add_filter('block_categories_all', function($categories){
				array_unshift($categories, [
					"slug" => "eds-blox",
					"title" => "Ed's Blox"
				]);
				return $categories;
			});

			$blocks = [
				['name' => 'wave-header'],
				['name' => 'clix-group'],
				['name' => 'clix'],
				['name' => 'image-gallery'],
				['name' => 'image-gallery-image']
			];

			foreach($blocks as $block) {
				register_block_type( __DIR__ . '/build/eds-blox/' . $block['name']);
			}

		});
	}
	static function eds_blox_convert_custom_properties($value) {
		$prefix = 'var:';
		$prefix_len = strlen($prefix);
		$token_in = '|';
		$token_out = '--';
		if(str_starts_with($value, $prefix)) {
			$unwrapped_name = str_replace($token_in, $token_out, substr($value, $prefix_len));
			$value = "var(--wp--$unwrapped_name)";
		}
		return $value;
	}
}

EdsBlox::init();