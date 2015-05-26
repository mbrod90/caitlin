
$(document).ready(function() {
  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('.nav').addClass('sticky')
      $('.wave').show();
    } else {
      $('.nav').removeClass('sticky');
      $('.wave').hide();
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  $( "input[type=button]" ).click(function() {
    $(this).css("background-color","#0073a8");
  });

});

