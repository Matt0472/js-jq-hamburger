var hamburgerMenuBtn = $('.header-right > a');
var hamburger_menu = $('.hamburger-menu');
var closeMenu = $('.close');
hamburgerMenuBtn.click(
  function() {
    hamburger_menu.show(1000);
  }
);

closeMenu.click(
  function() {
    hamburger_menu.hide(1000);
  }
);
