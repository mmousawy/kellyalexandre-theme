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
    <label class="menu-button--close" for="menu-button"></label>
    <div class="menu-holder">
      <nav class="menu-container no-scroll">
        <div class="menu-container__commissioned">
          <div class="wrap">
            <div class="wrap-inside">
              <h2>COMMISSIONED</h2>
              <?= wp_nav_menu([
                'theme_location' => 'main-menu-commissioned'
              ]); ?>
            </div>
          </div>
        </div>
        <div class="menu-container__personal">
          <div class="wrap">
            <div class="wrap-inside">
              <h2>PERSONAL</h2>
              <?= wp_nav_menu([
                'theme_location' => 'main-menu-personal'
              ]); ?>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
