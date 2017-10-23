"use strict";

var allSections = Array.from($(".nav-bar-item-btn"));

var Btn = $(".nav-bar-item-btn").click(function () {
  var _this = this;

  var filtered = allSections.filter(function (button) {
    return button.value !== _this.value;
  });
  $(this).addClass("active");
  $("#" + this.value).show();
  filtered.forEach(function (button) {
    $("#" + button.value).hide();
    $(button).removeClass("active");
  });
});

$(".submit-btn").on("submit", function (e) {
  e.preventDefault();
  $(".form").reset();
});

var mySelftDes = new Typed("#myself-des", {
  strings: ["am front-end developer .", "teach myself how to code .", "love to code .", "love you, too ."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});