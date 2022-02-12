// ouvrir et fermer menu au click sur bouton burger
document.getElementById("menuBar").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("menuOpen");
});

// fermer menu au click sur liens '<a></a>'
let fermernav = document.querySelectorAll(".fermer");
for (let i = 0; i < fermernav.length; i++) {
    fermernav[i].addEventListener("click", function () {
        document.querySelector(".menuOpen").classList.toggle("menuOpen");
    });
}

// barre recherche
document.getElementById("date1").addEventListener("click", function () {
    let type = this.type;
    if (type == "text") {
        this.type = "date";
    }
});
document.getElementById("date1").addEventListener("blur", function () {
    this.type = "text";
});
document.getElementById("date2").addEventListener("click", function () {
    let type = this.type;
    if (type == "text") {
        this.type = "date";
    }
});
document.getElementById("date2").addEventListener("blur", function () {
    this.type = "text";
});

// carousel slick 1
$(".monCarrousel").slick({
    autoplay: true,
    autoplaySpeed: 15000,
});

// carousel slick 2
$(".monCarrouselResultat").slick({
    prevArrow: "<i id='prev' class='fas fa-caret-left'></i>",
    nextArrow: "<i id='next' class='fas fa-caret-right'></i>",
});

// changement couleur boutons
let newColor = document.querySelectorAll(".newColor");

for (let j = 0; j < newColor.length; j++) {
    newColor[j].addEventListener("click", function () {
        newColor[j].style.backgroundColor = "orange";
        newColor[j].style.color = "#000";
        alert(
            "Ce site a été crée lors d'une formation ! \nIl n'est donc pas fonctionnelle."
        );
    });
}
