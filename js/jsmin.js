"use strict";var link=document.querySelector(".main-search-sedona"),popup=document.querySelector(".main-form-close"),submit=document.querySelector("form"),arrivalDate=popup.querySelector("[name=arrival-date]"),dateDeparture=popup.querySelector("[name=date-of-departure]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("main-form-link"),popup.classList.remove("modal-error"),arrivalDate.focus()}),submit.addEventListener("submit",function(e){arrivalDate.value&&dateDeparture.value||(e.preventDefault(),popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("main-form-link")&&popup.classList.remove("main-form-link"))});