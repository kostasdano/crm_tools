export function homepageRedirect() {
  if (window.location.href.split('/').length <= 5) {
    document.getElementsByTagName('html')[0].style.display = 'none';
    window.location.href = window.location.origin + '/music-users';
  }
}

export function hideToggleButton() {
  if (window.location.pathname.split('/')[2] == 'profile') {
    document.getElementsByClassName('menu-open')[0].style.display = 'none';
    document.getElementsByClassName('open-menu-container')[0].style.cursor = 'auto';
    $('.open-menu-container').hover(function () {
      $(this).css('background-color', 'inherit');
    });
  }
}
