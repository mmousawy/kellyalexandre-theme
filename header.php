<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="author" content="Murtada al Mousawy">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head();?>
  <link href="/wp-content/themes/kellyalexandre/style.css" rel="stylesheet">
</head>
<body <?= body_class(); ?>>
<header class="page-header">
  <div class="wrapper">
    <p class="site-title"><a href="<?= get_home_url() ?>"><?= get_bloginfo('title'); ?></a></p>
    <input type="checkbox" class="menu-button" id="menu-button">
    <div class="menu-holder">
      <div class="wrapper">
        <nav class="menu-container">
          <?= wp_nav_menu([
            'theme_location' => 'main-menu'
          ]); ?>
        </nav>
        <label class="menu-button--close" for="menu-button"></label>
      </div>
    </div>
  </div>
</header>
