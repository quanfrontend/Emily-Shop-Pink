$(document).ready(function () {
  $(".menu__toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar__menu").toggleClass("active");
  });
});
