$(document).ready(function() {
    $("#design").click(function() {
      $("#design-icon").toggle('slow');
      $("#design-p").toggle('slow');
    });
    $("#dev").click(function() {
        $("#dev-icon").toggle('slow');
        $("#dev-p").toggle('slow');
    });
    $("#product").click(function() {
      $("#product-icon").toggle('slow');
      $("#product-p").toggle('slow');
    });
    $("#work4").hover(function(){
        $(".work4").toggle('slow');
    });
    $("#work3").hover(function(){
      $(".work3").toggle('slow');
    });
    $("#work2").hover(function(){
      $(".work2").toggle('slow');
  });
    $("#work1").hover(function(){
      $(".work1").toggle('slow');
    });
    $("#work5").hover(function(){
      $(".work5").toggle('slow');
    });
    $("#work6").hover(function(){
      $(".work6").toggle('slow');
    });
    $("#work7").hover(function(){
      $(".work7").toggle('slow');
    });
    $("#work8").hover(function(){
      $(".work8").toggle('slow');
    });
    jQuery('form#form1').submit(function (event) {
        event.preventDefault();
        var userName = document.getElementById('name').value;
        alert(userName + ' Your message has been received. Thank you for reaching out.');
        jQuery('#contact-form')[0].reset();
  
    })
  });