window.onload = function () {
    document.querySelector('.container-mobile-nav').style.display = 'none';
    document.querySelector('.fa-bars').onclick = function () {
        this.style.display = 'none';
        document.querySelector('.blueasy-title-header').style.display = 'none';
        document.querySelector('.container-mobile-nav').style.display = 'flex';
        document.querySelector('.fa-close').onclick = function () {
            document.querySelector('.blueasy-title-header').style.display = 'block';
            document.querySelector('.container-mobile-nav').style.display = 'none';
            document.querySelector('.fa-bars').style.display = 'block';
        }
    }

    var pano1 = document.querySelector('.panoramas1');
    var pano2 = document.querySelector('.panoramas2');
    var portrait1 = document.querySelector('.portraits1');
    var portrait2 = document.querySelector('.portraits2');
    var macro1 = document.querySelector('.macros1');
    var macro2 = document.querySelector('.macros2');
    var journal1 = document.querySelector('.journal1');
    var journal2 = document.querySelector('.journal2');

    document.querySelector('.all').onclick = function() {
        var all = [pano1, pano2, portrait1, portrait2, macro1, macro2, journal1, journal2];
        showAll(all);
    };
    document.querySelector('.panorama').onclick = function() {
        var none = [portrait1, portrait2, macro1, macro2, journal1, journal2];
        show(pano1, pano2, none);
    };
    document.querySelector('.portrait').onclick = function() {
        var none = [pano1, pano2, macro1, macro2, journal1, journal2];
        show(portrait1, portrait2, none);
    };
    document.querySelector('.macro').onclick = function() {
        var none = [pano1, pano2, portrait1, portrait2, journal1, journal2];
        show(macro1, macro2, none);
    };
    document.querySelector('.journal').onclick = function() {
        var none = [pano1, pano2, portrait1, portrait2, macro1, macro2];
        show(journal1, journal2, none);
    };
};

function show (img1, img2, elements) {
    img1.classList.replace('hidden', 'visible');
    img2.classList.replace('hidden', 'visible');
    for (var i in elements) {
        elements[i].classList.replace('visible', 'hidden');
    }

    img1.classList.replace('hidden', 'visible');
    img2.classList.replace('hidden', 'visible');
}

function showAll (all) {
    for (var i in all) {
        all[i].classList.replace('hidden', 'visible');
    }
}