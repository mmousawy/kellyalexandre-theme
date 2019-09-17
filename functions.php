<?php

add_theme_support('title-tag');
add_theme_support('editor-styles');
add_editor_style('editor-style.css');
wp_enqueue_script('script', '/wp-content/themes/kellyalexandre/script.js', [], 1, true);

function registerMainMenu() {
  register_nav_menus([
    'main-menu-commissioned' => 'Commissioned',
    'main-menu-personal' => 'Personal'
  ]);
}
add_action('init', 'registerMainMenu');


// // Remove these lines when website goes live
// function checkAdmin() {
// 	if (!is_user_logged_in()) {
// 		header("Location: comingsoon.html");
// 		die();
// 	}
// }
// add_action('template_redirect', 'checkAdmin');
