document.addEventListener("DOMContentLoaded", function(event) {
    if(window.sessionStorage.getItem("sidebar") === null) {
      console.log("initializing sidebar token");
      window.sessionStorage.setItem("sidebar", "open");
    } else if(window.sessionStorage.getItem("sidebar") === "closed") {
      $('[data-toggle="tooltip"]').tooltip('enable');
      toggleSidebar(false);
    }
  
      const current_path = window.location.pathname;
        var rows = document.getElementsByClassName("sidebar-link");
        var path = current_path.split('/')[2] === "" ? '/' : '/'+current_path.split('/')[1]+'/';
        for(i=0; i<rows.length; i++) {
          if(rows[i].getAttribute('href') === path) {
            rows[i].className += " sidebar-nav-active";
          }
        }
    });
  
    function toggleDropdown(event) {
      event.preventDefault();
      var classes = event.target.classList;
      var id = classes[classes.length-1];
      var x = document.getElementById(id);
      var arr = document.getElementById(id+'-arrow');
      var arr_classes = arr.classList;
  
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  
      if (arr_classes.contains('sidebar-arrow-up')) {
        arr_classes.remove('sidebar-arrow-up');
      } else {
        var cl = 'sidebar-arrow-up '+ arr_classes ;
        arr.setAttribute('class', cl);
      }
  
  
  
    }