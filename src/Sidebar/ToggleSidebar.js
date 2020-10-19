function toggleClass(className, toggleClassName) {
  var element = document.getElementsByClassName(className);
  for(var i = 0; i < element.length; i++){
    element[i].classList.toggle(toggleClassName);
  }
}

export function toggleSidebar(change_token = true) {
  document.getElementById('wrapper').classList.toggle('wrapper-hidden');
  document.getElementById('sidebar-wrapper').classList.toggle('sidebar-wrapper-hidden');
  document.getElementById('sidebar').classList.toggle('sidebar-hidden');

  toggleClass('sidebar-link','li-a-hidden');
  toggleClass('sidebar-col-icon','sidebar-col-icon-hidden');
  toggleClass('sidebar-col-label','hidden-element');
  toggleClass('sidebar-arrow','hidden-element');
  toggleClass('dropdown-sidebar','sidebar-hidden');
  toggleClass('sidebar-icon','sidebar-icon-hidden');
  toggleClass('sidebar-sub-icon','sidebar-icon-hidden');
  toggleClass('dropdown-row','dropdown-row-hidden');
  toggleClass('sidebar-link','dropdown-row-hidden');

  if (change_token) {
    if (window.sessionStorage.getItem('sidebar') === 'open') {
      window.sessionStorage.removeItem('sidebar');
      window.sessionStorage.setItem('sidebar', 'closed');
      $('[data-toggle="tooltip"]').tooltip('enable');
    } else {
      window.sessionStorage.removeItem('sidebar');
      window.sessionStorage.setItem('sidebar', 'open');
      $('[data-toggle="tooltip"]').tooltip('disable');
    }
  }
}
