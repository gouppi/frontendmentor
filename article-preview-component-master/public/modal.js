

document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    let d = document.getElementById("share-button");
    console.log(d);
    d.addEventListener("click", function () {
        d.classList.toggle('open');
        document.getElementById("share-modal").classList.toggle('closed');
    });

});