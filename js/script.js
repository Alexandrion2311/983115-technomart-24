
var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".letter");
var close = document.querySelector(".form-modal-close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

// var linkMap = document.querySelector(".open-map-btn");
// var popupMap = document.querySelector(".map-big");
// var closeMap = document.querySelector(".map-modal-close");

// linkMap.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popupMap.classList.add("modal-show");
// });

// closeMap.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popupMap.classList.remove("modal-show");
// });

var linkBasket = document.querySelector(".catalog-item-buy");
var popupBasket = document.querySelector(".basket-added");
var closeBasket = document.querySelector(".modal-close");



linkBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBasket.classList.add("modal-show");
});

closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
});
