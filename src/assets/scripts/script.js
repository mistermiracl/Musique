$(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000
  });
  $('.carousel').carousel('cycle');

  $('#top-nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 500
  });


});



// animation
$(window).scroll(function () {
  $('#about, .album, .blogevent ul li').each(function () {
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (elementPos < topOfWindow + 400) {
      $(this).addClass("animated fadeInUp");
    }
  });


  $('h3,h4').each(function () {
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (elementPos < topOfWindow + 500) {
      $(this).addClass("animated fadeInUp");
    }
  });


});

/** CODE TO ADD REMOTE SCRIPT DINAMYCALLY */
(function (d, s, id) {
  //console.log(d);
  //console.log(id);
  var js;
  var fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); 
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=249078091804020&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');











