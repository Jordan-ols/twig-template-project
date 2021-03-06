var $ = jQuery;
/*
 * Sidebar collapsing JS, supported for Bootstrap
 * 
 * @param;
 * @return;
 */
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

/*
 * Scroll to top if page is greater than 800 in height
 * 
 * @param;
 * @return;
 */
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
});