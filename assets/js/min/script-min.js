$(document).ready(function(){var o=$(".nav").offset().top,n=function(){var n=$(window).scrollTop();n>o?($(".nav").addClass("sticky"),$(".wave").show()):($(".nav").removeClass("sticky"),$(".wave").hide())};n(),$(window).scroll(function(){n()}),$("input[type=button]").click(function(){$(this).css("background-color","#0073a8")})});