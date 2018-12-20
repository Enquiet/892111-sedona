var link = document.querySelector(".main-search-sedona");
var popup = document.querySelector(".main-form-close");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=date-of-departure]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("main-form-link");
    arrivalDate.focus();

});
