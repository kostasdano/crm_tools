export function toggleSidebar(change_token = true) {
    document.getElementById('wrapper').classList.toggle("wrapper-hidden");
    document.getElementById('sidebar-wrapper').classList.toggle("sidebar-wrapper-hidden");
    document.getElementById('sidebar').classList.toggle("sidebar-hidden");
    var anchors = document.getElementsByClassName('sidebar-link');
    for(var i=0; i<anchors.length; i++) {
      anchors[i].classList.toggle('li-a-hidden');
    }
    var icons = document.getElementsByClassName('sidebar-col-icon');
    for(var i=0; i<icons.length; i++) {
      icons[i].classList.toggle('sidebar-col-icon-hidden');
    }
    var labels = document.getElementsByClassName('sidebar-col-label');
    for(var i=0; i<labels.length; i++) {
      labels[i].classList.toggle('hidden-element');
    }
    var arrows = document.getElementsByClassName('sidebar-arrow');
    for(var i=0; i<arrows.length; i++) {
      arrows[i].classList.toggle('hidden-element');
    }
    var dropdowns = document.getElementsByClassName('dropdown-sidebar');
    for(var i=0; i<dropdowns.length; i++) {
      dropdowns[i].classList.toggle('sidebar-hidden');
    }
    var col_icons = document.getElementsByClassName('sidebar-icon');
    for(var i=0; i<col_icons.length; i++) {
      col_icons[i].classList.toggle('sidebar-icon-hidden');
    }
    var sub_icons = document.getElementsByClassName('sidebar-sub-icon');
    for(var i=0; i<sub_icons.length; i++) {
      sub_icons[i].classList.toggle('sidebar-icon-hidden');
    }
    var dropdown_rows = document.getElementsByClassName('dropdown-row');
    for(var i=0; i<dropdown_rows.length; i++) {
      dropdown_rows[i].classList.toggle('dropdown-row-hidden');
    }
  
    var links = document.getElementsByClassName('sidebar-link');
    for(var i=0; i<links.length; i++) {
      links[i].classList.toggle('dropdown-row-hidden');
    }
  
    if(change_token) {
      if(window.sessionStorage.getItem("sidebar") === "open") {
        window.sessionStorage.removeItem("sidebar");
        window.sessionStorage.setItem("sidebar", "closed");
        $('[data-toggle="tooltip"]').tooltip('enable');
      } else {
        window.sessionStorage.removeItem("sidebar");
        window.sessionStorage.setItem("sidebar", "open");
        $('[data-toggle="tooltip"]').tooltip('disable');
      }
    }
  
  }