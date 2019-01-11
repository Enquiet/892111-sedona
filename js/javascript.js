"use strict";
var link = document.querySelector(".main-search-sedona");
var popup = document.querySelector(".main-form");
var submit = document.querySelector("form");
var none = popup.querySelector(".main-form-block");
var close = popup.querySelector(".main-form-close");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=date-of-departure]");


popup.classList.add("main-form-block");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("main-form-block");
    popup.classList.remove("modal-error");
    arrivalDate.focus();
});
submit.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !dateDeparture.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.classList.add("modal-error");

    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.add("main-form-block")) {
            popup.classList.add("main-form-block");
        }
    }
});
