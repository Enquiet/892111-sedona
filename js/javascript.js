"use strict";
var link = document.querySelector(".main-search-sedona");
var popup = document.querySelector(".main-form-close");
var arrivalDate = popup.querySelector("[name=arrival-date]");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("main-form-link");
    arrivalDate.focus();

});
