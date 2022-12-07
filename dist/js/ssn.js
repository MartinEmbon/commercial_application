$(document).ready(function () {
  
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js', function () {
  
      $(".ssn input").mask("999-99-9999");
  
    });
  
  });