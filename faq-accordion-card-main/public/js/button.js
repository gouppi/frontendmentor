(function () {

    let rows = document.getElementsByClassName("card-faq-row-head");
    for (row of rows) {
        row.addEventListener("click", function (e) {

            // Vanilla JS siblings selector. Remove "open" class from anyole else except currently pressed one.
            let me = e.target.parentElement;
            let rows = document.getElementsByClassName("card-faq-row-head");
            for (row of rows) {
                if (row.parentElement == me) {
                    continue;
                }
                row.parentElement.classList.remove('open');
            }


            e.target.parentElement.classList.toggle("open");



        });

    }


})();
