"use strict";
var link = document.querySelector(".main-search-sedona");
var popup = document.querySelector(".main-form-close");
var submit = document.querySelector("form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=date-of-departure]");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("main-form-link");
    popup.classList.remove("modal-error");
    arrivalDate.focus();

});
submit.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !dateDeparture.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");

    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("main-form-link")) {
            popup.classList.remove("main-form-link");
        }
    }
});
